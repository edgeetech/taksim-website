// Security audit gate for `npm run audit` and the Validate workflow.
//
// AUDIT_IGNORE_GHSA lists advisories that have no patched release yet, as comma-separated
// GHSA-id:YYYY-MM-DD entries (a GitHub repo variable in CI, the environment locally). Each entry
// stops counting toward the gate until its date passes, then the gate enforces it again. The date
// must be a real calendar day at most 30 days ahead, so an ignore has to be renewed on purpose and
// can never become permanent. Every ignore needs an entry in .agents/local/security-decisions.md.
//
// npm reports each vulnerable package once, with `via` holding either advisory objects or the
// names of vulnerable dependencies it is vulnerable through. The gate counts advisories, not
// packages: a package whose only advisories are ignored drops out together with the chain
// entries npm lists only because of it, and a package that also has another advisory still fails.
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

export const MAX_DAYS = 30;
const FAILING = new Set(['high', 'critical']);
const GHSA_ID = /^GHSA(-[0-9a-z]{4}){3}$/;
const GHSA_IN_URL = /GHSA(-[0-9a-z]{4}){3}/i;

const day = (d) => d.toISOString().slice(0, 10);
const norm = (id) =>
  String(id || '')
    .trim()
    .toLowerCase()
    .replace(/^ghsa/, 'GHSA');
const advisoryKey = (via) => {
  const ghsa = norm(String(via.url || '').match(GHSA_IN_URL)?.[0]);
  return { ghsa, key: ghsa || `npm:${via.source ?? via.url ?? via.title}` };
};
const esc = (s) =>
  String(s).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');

export function parseIgnoreList(raw, now = new Date()) {
  const today = day(now);
  const limit = day(
    new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate() + MAX_DAYS,
      ),
    ),
  );
  const ignore = new Map();
  const warnings = [];
  const entries = String(raw || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  for (const entry of entries) {
    const parts = entry.split(':');
    const id = norm(parts[0]);
    const until = parts.length === 2 ? parts[1].trim() : '';
    const parsed = /^\d{4}-\d{2}-\d{2}$/.test(until)
      ? new Date(`${until}T00:00:00Z`)
      : null;
    if (!GHSA_ID.test(id)) {
      warnings.push(
        `AUDIT_IGNORE_GHSA entry "${entry}" has no valid GHSA id; not ignored.`,
      );
    } else if (
      !parsed ||
      Number.isNaN(parsed.getTime()) ||
      day(parsed) !== until
    ) {
      warnings.push(
        `AUDIT_IGNORE_GHSA entry "${entry}" has no valid YYYY-MM-DD date; not ignored.`,
      );
    } else if (until < today) {
      warnings.push(
        `AUDIT_IGNORE_GHSA entry ${id} expired on ${until}; enforced again.`,
      );
    } else if (until > limit) {
      warnings.push(
        `AUDIT_IGNORE_GHSA entry ${id} date ${until} is more than ${MAX_DAYS} days ahead (latest ${limit}); not ignored.`,
      );
    } else {
      ignore.set(id, until);
    }
  }
  return { ignore, warnings };
}

export function evaluate(report, ignore) {
  const vulns = report?.vulnerabilities ?? {};
  const advisories = new Map();
  const remainingByPackage = new Map();
  const matched = new Set();
  const warnings = [];

  for (const [name, vuln] of Object.entries(vulns)) {
    for (const via of vuln.via ?? []) {
      if (typeof via !== 'object' || via === null) continue;
      const { ghsa, key } = advisoryKey(via);
      if (ghsa && ignore.has(ghsa)) {
        if (!matched.has(ghsa)) {
          matched.add(ghsa);
          warnings.push(
            `Ignoring ${ghsa} (${via.name ?? name}, ${via.severity}) until ${ignore.get(ghsa)} via AUDIT_IGNORE_GHSA.`,
          );
        }
        continue;
      }
      advisories.set(key, {
        id: ghsa || key,
        name: via.name ?? name,
        severity: via.severity,
        title: via.title,
        url: via.url,
      });
    }
  }

  // Which non-ignored advisories each package is exposed to, directly or through its `via` chain.
  const reach = (name, seen, found) => {
    if (seen.has(name)) return;
    seen.add(name);
    for (const via of vulns[name]?.via ?? []) {
      if (typeof via === 'string') reach(via, seen, found);
      else if (
        via &&
        typeof via === 'object' &&
        advisories.has(advisoryKey(via).key)
      ) {
        found.add(advisoryKey(via).key);
      }
    }
  };
  for (const name of Object.keys(vulns)) {
    const found = new Set();
    reach(name, new Set(), found);
    remainingByPackage.set(name, found);
  }

  for (const id of ignore.keys()) {
    if (!matched.has(id)) {
      warnings.push(
        `AUDIT_IGNORE_GHSA entry ${id} matches no advisory in this audit; remove it if it is no longer needed.`,
      );
    }
  }

  const remaining = [...advisories.values()];
  const failing = remaining.filter((a) => FAILING.has(a.severity));
  const affectedPackages = [...remainingByPackage.entries()]
    .filter(([, keys]) =>
      [...keys].some((key) => FAILING.has(advisories.get(key).severity)),
    )
    .map(([name]) => name)
    .sort((a, b) => a.localeCompare(b));
  return { remaining, failing, affectedPackages, warnings, matched };
}

function runAudit() {
  const result = spawnSync('npm audit --json', {
    encoding: 'utf8',
    shell: true,
    maxBuffer: 64 << 20,
  });
  if (result.error) throw result.error;
  return result.stdout;
}

function main() {
  const inputFlag = process.argv.indexOf('--input');
  const raw =
    inputFlag > -1
      ? readFileSync(process.argv[inputFlag + 1], 'utf8')
      : runAudit();
  let report;
  try {
    report = JSON.parse(raw);
  } catch {
    console.error('npm audit did not return JSON; failing the gate.');
    console.error(raw);
    return 1;
  }
  if (report.error) {
    console.error(
      `npm audit failed: ${report.error.summary ?? JSON.stringify(report.error)}`,
    );
    return 1;
  }

  const { ignore, warnings: parseWarnings } = parseIgnoreList(
    process.env.AUDIT_IGNORE_GHSA,
  );
  const { remaining, failing, affectedPackages, warnings } = evaluate(
    report,
    ignore,
  );
  for (const msg of [...parseWarnings, ...warnings])
    console.error(`::warning::${esc(msg)}`);

  for (const a of remaining) {
    console.log(
      `${a.severity.padEnd(8)} ${a.id} ${a.name}: ${a.title ?? ''} ${a.url ?? ''}`.trim(),
    );
  }
  if (failing.length > 0) {
    console.error(
      `::error::${failing.length} high or critical advisor${failing.length === 1 ? 'y remains' : 'ies remain'}, affecting: ${affectedPackages.join(', ')}.`,
    );
    return 1;
  }
  console.log(
    `Audit gate passed: no high or critical advisories remain (${remaining.length} lower-severity advisor${remaining.length === 1 ? 'y' : 'ies'} reported).`,
  );
  return 0;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  process.exitCode = main();
}
