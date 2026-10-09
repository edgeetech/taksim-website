// Free-tier funnel report from GitHub release asset download counts of edgeetech/taksim-releases.
// The site collects no analytics (owner decision, 2026-10-09); these counts are GitHub's own
// release statistics. Usage: npm run funnel (uses GITHUB_TOKEN when set, anonymous otherwise).
// Prints to stdout only; do not commit the output.
import { pathToFileURL } from 'node:url';

export const REPOSITORY = 'edgeetech/taksim-releases';

export const KINDS = {
  installer: 'installer script',
  installerStage: 'second-stage installer',
  windows: 'Windows binary',
  macos: 'macOS binary',
  linux: 'Linux binary',
  checksums: 'checksums',
  manifest: 'manifest',
  other: 'other',
};

const BINARY_KINDS = ['windows', 'macos', 'linux'];

// install.ps1 fetches install-release.ps1 as its second stage, so install-release.ps1 is only an
// entry point on old releases that ship no install.ps1.
export function classify(name, assetNames = []) {
  const n = name.toLowerCase();
  if (n === 'install-release.ps1')
    return assetNames.some((a) => a.toLowerCase() === 'install.ps1')
      ? 'installerStage'
      : 'installer';
  if (/^install.*\.(ps1|sh)$/.test(n)) return 'installer';
  if (/sha256sums|checksums|\.sha256$/.test(n)) return 'checksums';
  if (/manifest.*\.json$/.test(n)) return 'manifest';
  if (/win/.test(n) && /\.(zip|exe|msi)$/.test(n)) return 'windows';
  if (/(osx|macos|darwin)/.test(n)) return 'macos';
  if (/linux/.test(n)) return 'linux';
  return 'other';
}

const emptyKinds = () =>
  Object.fromEntries(Object.keys(KINDS).map((k) => [k, 0]));

export function summarize(releases) {
  const totals = emptyKinds();
  let installsExcludingSync = 0;
  const rows = releases.map((release) => {
    const assets = release.assets ?? [];
    const names = assets.map((a) => a.name);
    const byKind = emptyKinds();
    const items = assets.map((a) => {
      const kind = classify(a.name, names);
      byKind[kind] += a.download_count;
      return { name: a.name, kind, count: a.download_count };
    });
    for (const k of Object.keys(byKind)) totals[k] += byKind[k];
    // The website's release sync fetches install.ps1, SHA256SUMS.txt and the manifest on every
    // CI run; real installers never fetch the manifest, so its count estimates those fetches.
    installsExcludingSync += Math.max(0, byKind.installer - byKind.manifest);
    return {
      tag: release.tag_name,
      publishedAt: release.published_at ?? null,
      total: items.reduce((sum, i) => sum + i.count, 0),
      byKind,
      assets: items,
    };
  });
  const binaries = BINARY_KINDS.reduce((sum, k) => sum + totals[k], 0);
  const ratio = (a, b) => (b > 0 ? a / b : null);
  return {
    releases: rows,
    totals,
    funnel: {
      installs: totals.installer,
      siteSyncFetches: totals.manifest,
      installsExcludingSync,
      binaries,
      binariesPerInstall: ratio(binaries, totals.installer),
      binariesPerInstallExcludingSync: ratio(binaries, installsExcludingSync),
    },
  };
}

export async function fetchReleases({
  fetch: fetchImpl = fetch,
  token,
  repository = REPOSITORY,
} = {}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'taksim-website-funnel-report',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  const releases = [];
  let url = `https://api.github.com/repos/${repository}/releases?per_page=100`;
  while (url) {
    const res = await fetchImpl(url, { headers });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
    releases.push(...(await res.json()));
    const link = res.headers?.get?.('link') ?? '';
    url = link.match(/<([^>]+)>;\s*rel="next"/)?.[1] ?? null;
  }
  return releases;
}

const pct = (r) => (r === null ? 'n/a' : `${(r * 100).toFixed(1)}%`);

export function formatReport(
  summary,
  { repository = REPOSITORY, authenticated = false } = {},
) {
  const lines = [
    `Funnel report for ${repository} (${authenticated ? 'GITHUB_TOKEN' : 'anonymous'} API access)`,
    '',
  ];
  for (const r of summary.releases) {
    lines.push(
      `${r.tag}${r.publishedAt ? ` (${r.publishedAt.slice(0, 10)})` : ''}: ${r.total} downloads`,
    );
    for (const k of Object.keys(KINDS)) {
      const assets = r.assets.filter((a) => a.kind === k);
      if (assets.length === 0) continue;
      lines.push(`  ${KINDS[k]}: ${r.byKind[k]}`);
      for (const a of assets) lines.push(`    ${a.name}: ${a.count}`);
    }
  }
  const f = summary.funnel;
  lines.push(
    '',
    'Totals by kind:',
    ...Object.keys(KINDS)
      .filter((k) => summary.totals[k] > 0)
      .map((k) => `  ${KINDS[k]}: ${summary.totals[k]}`),
    '',
    'Funnel summary:',
    `  Install-script downloads: ${f.installs}`,
    `  Website release-sync fetches (manifest downloads): ${f.siteSyncFetches}`,
    `  Install-script downloads excluding website sync: ${f.installsExcludingSync}`,
    `  Platform binary downloads: ${f.binaries}`,
    `  Binaries per install-script download: ${pct(f.binariesPerInstall)}`,
    `  Binaries per install-script download excluding website sync: ${pct(f.binariesPerInstallExcludingSync)}`,
  );
  return lines.join('\n');
}

export async function main({
  fetch: fetchImpl = fetch,
  env = process.env,
  log = console.log,
} = {}) {
  const token = env.GITHUB_TOKEN || undefined;
  const releases = await fetchReleases({ fetch: fetchImpl, token });
  log(formatReport(summarize(releases), { authenticated: Boolean(token) }));
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  main().catch((error) => {
    console.error(`::error::${error.message}`);
    process.exitCode = 1;
  });
}
