// Keeps the site in step with the latest published Taksim release.
//
//   node scripts/release.mjs render            render generated files from release/manifest.json (offline)
//   node scripts/release.mjs sync [--strict] [--walk]
//
// sync reads the latest release of the releases repository and rewrites release/manifest.json:
//   1. If the release ships `taksim-release-manifest.json`, that file is the source of truth.
//   2. Otherwise, with --walk on Windows, the published binary is downloaded, checked against
//      SHA256SUMS.txt and asked for its own command tree and --client list.
//   3. Otherwise only version, tag and assets are refreshed and a warning is printed.
// A release without install.ps1 is never accepted: --strict fails, otherwise the snapshot is kept.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = new URL('..', import.meta.url);
const manifestPath = new URL('release/manifest.json', root);
const MANIFEST_ASSET = 'taksim-release-manifest.json';
const REQUIRED_ASSETS = [
  'taksim-connector-win-x64.zip',
  'SHA256SUMS.txt',
  'install.ps1',
];

export function readManifest() {
  return JSON.parse(readFileSync(manifestPath, 'utf8'));
}

export function installCommands(repository, tag) {
  const url = `https://github.com/${repository}/releases/latest/download/install.ps1`;
  return {
    oneLine: `irm ${url} | iex`,
    pinned: `& ([scriptblock]::Create((irm ${url}))) -Version ${tag} -NoSetup`,
  };
}

export function validateManifest(m) {
  const errors = [];
  if (m.schema !== 'taksim.release-manifest.v1')
    errors.push(`unknown schema ${m.schema}`);
  if (!/^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/.test(m.version ?? ''))
    errors.push(`bad version ${m.version}`);
  if (m.tag !== `v${m.version}`)
    errors.push(`tag ${m.tag} does not match version ${m.version}`);
  if (!m.install?.oneLine?.includes('/releases/latest/download/install.ps1'))
    errors.push('install.oneLine missing');
  if (!Array.isArray(m.commands) || m.commands.length < 10)
    errors.push('commands missing');
  if (!Array.isArray(m.groups)) errors.push('groups missing');
  for (const g of m.groups ?? [])
    if (!m.commands?.includes(g)) errors.push(`group ${g} is not a command`);
  if (!Array.isArray(m.clients) || m.clients.length === 0)
    errors.push('clients missing');
  for (const c of m.clients ?? []) {
    if (!c.id || !c.name)
      errors.push(`client without id/name: ${JSON.stringify(c)}`);
    if (typeof c.observe !== 'boolean' || typeof c.judge !== 'boolean')
      errors.push(`client ${c.id}: observe/judge must be boolean`);
    if (typeof c.route !== 'string')
      errors.push(`client ${c.id}: route must be a string`);
  }
  return errors;
}

function renderLlms(m) {
  const template = readFileSync(
    new URL('release/llms.template.txt', root),
    'utf8',
  );
  return template
    .replaceAll('{{version}}', m.version)
    .replaceAll('{{tag}}', m.tag)
    .replaceAll('{{installCommand}}', m.install.oneLine);
}

export function render(m = readManifest()) {
  const errors = validateManifest(m);
  if (errors.length)
    throw new Error(
      `release/manifest.json is invalid:\n- ${errors.join('\n- ')}`,
    );
  writeFileSync(new URL('public/llms.txt', root), renderLlms(m));
  console.log(`release: rendered for ${m.tag} (${m.source})`);
}

async function gh(path, accept = 'application/vnd.github+json') {
  const headers = {
    Accept: accept,
    'User-Agent': 'taksim-website',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (process.env.GITHUB_TOKEN)
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const res = await fetch(
    path.startsWith('http') ? path : `https://api.github.com${path}`,
    { headers, redirect: 'follow' },
  );
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${path}`);
  return res;
}

async function download(asset) {
  const res = await gh(asset.browser_download_url, 'application/octet-stream');
  return Buffer.from(await res.arrayBuffer());
}

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

function checksums(text) {
  const map = new Map();
  for (const line of text.split(/\r?\n/)) {
    const m = line.trim().match(/^([0-9a-f]{64})\s+\*?(.+)$/i);
    if (m) map.set(m[2].trim(), m[1].toLowerCase());
  }
  return map;
}

/** Walk `taksim --help` recursively. Returns every command path, including aliases. */
export function walkCommands(exe, env) {
  const commands = new Set();
  const groups = new Set();
  const run = (args) => {
    try {
      return execFileSync(exe, args, {
        encoding: 'utf8',
        env,
        timeout: 30000,
        stdio: ['ignore', 'pipe', 'pipe'],
      });
    } catch (e) {
      return `${e.stdout ?? ''}${e.stderr ?? ''}`;
    }
  };
  const visit = (path) => {
    const help = run([...path, '--help']);
    const start = help.indexOf('\nCommands:');
    if (start < 0) return;
    const usage = help.match(/Usage:\s*\n\s*(.+)/)?.[1] ?? '';
    // A command with subcommands that takes no free arguments is either a pure group or a runnable
    // command; asking it to run with no arguments tells them apart without side effects for groups.
    if (
      path.length &&
      !/additional arguments/.test(usage) &&
      /Required command was not provided/.test(run(path))
    ) {
      groups.add(path.join(' '));
    }
    for (const line of help.slice(start + 10).split(/\r?\n/)) {
      if (!line.startsWith('  ')) {
        if (line.trim() === '') continue;
        break;
      }
      const m = line.match(/^ {2}(\S[^<]*?)(?:\s+<[^>]+>)*\s{2,}\S/);
      if (!m) continue;
      const names = m[1].split(',').map((s) => s.trim());
      for (const name of names) commands.add([...path, name].join(' '));
      visit([...path, names[0]]);
    }
  };
  visit([]);
  return {
    commands: [...commands].sort((a, b) => a.localeCompare(b)),
    groups: [...groups].sort((a, b) => a.localeCompare(b)),
  };
}

export function parseClientIds(importHelp) {
  const line =
    importHelp.split(/\r?\n/).find((l) => /--client\b/.test(l)) ?? '';
  const list = line.split(/import:/i)[1]?.split('[default')[0] ?? '';
  return list
    .replace(/\([^)]*\)/g, '')
    .replace(/\.\s*$/, '')
    .split(/,|\bor\b/)
    .map((s) => s.trim())
    .filter(Boolean);
}

async function fromBinary(release, snapshot, sums) {
  const zipAsset = release.assets.find(
    (a) => a.name === 'taksim-connector-win-x64.zip',
  );
  const zip = await download(zipAsset);
  if (sha256(zip) !== sums.get(zipAsset.name))
    throw new Error('connector zip does not match SHA256SUMS.txt');
  const dir = mkdtempSync(join(tmpdir(), 'taksim-release-'));
  writeFileSync(join(dir, 'connector.zip'), zip);
  execFileSync('powershell', [
    '-NoProfile',
    '-Command',
    `Expand-Archive -LiteralPath '${join(dir, 'connector.zip')}' -DestinationPath '${join(dir, 'bin')}'`,
  ]);
  const exe = join(dir, 'bin', 'taksim.exe');
  if (!existsSync(exe))
    throw new Error('taksim.exe not found in the connector zip');
  const env = {
    ...process.env,
    TAKSIM_HOME: join(dir, 'home'),
    TAKSIM_UPDATE_CHECK: '0',
    TAKSIM_NO_BROWSER: '1',
    CI: 'true',
  };
  const version = execFileSync(exe, ['version'], { encoding: 'utf8', env });
  if (!version.includes(release.tag_name.slice(1)))
    throw new Error(
      `binary reports "${version.trim()}", expected ${release.tag_name}`,
    );
  const { commands, groups } = walkCommands(exe, env);
  const ids = parseClientIds(
    execFileSync(exe, ['history', 'import', '--help'], {
      encoding: 'utf8',
      env,
    }),
  );
  const missing = snapshot.clients
    .filter((c) => !ids.includes(c.id))
    .map((c) => c.id);
  if (missing.length)
    throw new Error(
      `clients on the site but not in ${release.tag_name}: ${missing.join(', ')}`,
    );
  const unknown = ids.filter(
    (id) => !snapshot.clients.some((c) => c.id === id),
  );
  if (unknown.length)
    console.warn(
      `::warning::${release.tag_name} imports clients the site does not describe yet: ${unknown.join(', ')}`,
    );
  return {
    commands,
    groups,
    clients: snapshot.clients,
    source: 'release-binary',
  };
}

async function sync({ strict, walk }) {
  const snapshot = readManifest();
  const repository = snapshot.repository;
  const release = await (
    await gh(`/repos/${repository}/releases/latest`)
  ).json();
  const names = release.assets.map((a) => a.name);
  const missing = REQUIRED_ASSETS.filter((n) => !names.includes(n));
  if (missing.length) {
    const message = `latest release ${release.tag_name} is missing ${missing.join(', ')}`;
    if (strict) throw new Error(message);
    console.warn(
      `::warning::${message}; keeping the committed snapshot (${snapshot.tag})`,
    );
    return render(snapshot);
  }

  const sums = checksums(
    (
      await download(release.assets.find((a) => a.name === 'SHA256SUMS.txt'))
    ).toString('utf8'),
  );
  const installer = await download(
    release.assets.find((a) => a.name === 'install.ps1'),
  );
  if (sha256(installer) !== sums.get('install.ps1'))
    throw new Error('install.ps1 does not match SHA256SUMS.txt');
  const version = release.tag_name.replace(/^v/, '');
  const install = installCommands(repository, release.tag_name);
  if (!installer.toString('utf8').includes(install.oneLine)) {
    throw new Error(
      `install.ps1 in ${release.tag_name} no longer documents "${install.oneLine}"`,
    );
  }

  let next;
  const manifestAsset = release.assets.find((a) => a.name === MANIFEST_ASSET);
  if (manifestAsset) {
    next = {
      ...JSON.parse((await download(manifestAsset)).toString('utf8')),
      source: 'release-manifest',
    };
  } else if (walk && process.platform === 'win32') {
    next = { ...snapshot, ...(await fromBinary(release, snapshot, sums)) };
  } else {
    console.warn(
      `::warning::${release.tag_name} has no ${MANIFEST_ASSET}; commands and clients come from the committed snapshot`,
    );
    next = { ...snapshot, source: 'release-metadata' };
  }
  next = {
    ...next,
    schema: next.schema ?? 'taksim.release-manifest.v1',
    repository,
    version,
    tag: release.tag_name,
    publishedAt: release.published_at,
    assets: names.sort((a, b) => a.localeCompare(b)),
    install: next.install?.oneLine ? next.install : install,
  };
  const errors = validateManifest(next);
  if (errors.length)
    throw new Error(
      `manifest for ${release.tag_name} is invalid:\n- ${errors.join('\n- ')}`,
    );
  writeFileSync(manifestPath, `${JSON.stringify(next, null, 2)}\n`);
  if (snapshot.tag !== next.tag)
    console.warn(
      `::notice::site now describes ${next.tag} (snapshot was ${snapshot.tag})`,
    );
  render(next);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  const [cmd, ...flags] = process.argv.slice(2);
  try {
    if (cmd === 'render') render();
    else if (cmd === 'sync')
      await sync({
        strict: flags.includes('--strict'),
        walk: flags.includes('--walk'),
      });
    else
      throw new Error(
        'usage: node scripts/release.mjs render | sync [--strict] [--walk]',
      );
  } catch (e) {
    console.error(`release: ${e.message}`);
    process.exit(1);
  }
}
