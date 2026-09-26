// Anti-drift checks: site copy may only reference the version, commands and clients of the release
// described by release/manifest.json. In CI that manifest is first rewritten from the latest
// published release (scripts/release.mjs sync), so these tests fail as soon as site and product diverge.
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import test from 'node:test';
import { validateManifest } from '../scripts/release.mjs';

const root = new URL('../', import.meta.url);
const manifest = JSON.parse(
  await readFile(new URL('release/manifest.json', root), 'utf8'),
);

async function walk(dir, ext) {
  const out = [];
  for (const entry of await readdir(new URL(dir, root), {
    withFileTypes: true,
  })) {
    const path = `${dir}${entry.name}`;
    if (entry.isDirectory()) out.push(...(await walk(`${path}/`, ext)));
    else if (ext.some((e) => entry.name.endsWith(e))) out.push(path);
  }
  return out;
}

const copyFiles = [
  'lib/i18n/en.ts',
  'lib/i18n/tr.ts',
  'lib/client-support.ts',
  'release/llms.template.txt',
  'public/llms.txt',
  ...(await walk('components/', ['.tsx'])),
  ...(await walk('app/', ['.tsx', '.ts'])),
];
const copy = await Promise.all(
  copyFiles.map(async (path) => [
    path,
    await readFile(new URL(path, root), 'utf8'),
  ]),
);

const commandSet = new Set(manifest.commands);
const groupSet = new Set(manifest.groups);
const clientIds = new Map();
for (const c of manifest.clients)
  for (const id of [c.id, ...(c.aliases ?? [])]) clientIds.set(id, c);

test('the release manifest is valid', () => {
  assert.deepEqual(validateManifest(manifest), []);
});

test('site copy mentions no Taksim version other than the current release', () => {
  for (const [path, text] of copy) {
    for (const m of text.matchAll(/(?<![\d.])v?(\d+\.\d+\.\d+)(?![\d.])/g)) {
      assert.equal(
        m[1],
        manifest.version,
        `${path} mentions ${m[0]}; the site describes ${manifest.tag}`,
      );
    }
  }
  // Pages must not hard-code the version at all: it comes from lib/release.ts.
  for (const [path, text] of copy.filter(([p]) => !p.endsWith('llms.txt'))) {
    assert.doesNotMatch(
      text,
      new RegExp(`v?${manifest.version.replaceAll('.', '\\.')}(?![\\d.])`),
      path,
    );
  }
});

test('every `taksim ...` command on the site exists in the release', () => {
  let seen = 0;
  for (const [path, text] of copy) {
    for (const m of text.matchAll(
      /(?<![\w./-])taksim((?: [a-z][a-z0-9-]*)+)/g,
    )) {
      const [first, second] = m[1].trim().split(' ');
      seen++;
      assert.ok(
        commandSet.has(first),
        `${path}: "taksim ${first}" is not a ${manifest.tag} command`,
      );
      if (groupSet.has(first)) {
        assert.ok(second, `${path}: "taksim ${first}" needs a subcommand`);
        assert.ok(
          commandSet.has(`${first} ${second}`),
          `${path}: "taksim ${first} ${second}" is not a ${manifest.tag} command`,
        );
      }
    }
  }
  assert.ok(seen > 40, `expected many command references, found ${seen}`);
});

test('every --client value on the site is a client the release imports', () => {
  for (const [path, text] of copy) {
    for (const m of text.matchAll(/--client ([a-z_-]+)/g)) {
      if (m[1] === 'all') continue;
      assert.ok(
        clientIds.has(m[1]),
        `${path}: --client ${m[1]} is not in ${manifest.tag}`,
      );
    }
  }
});

// Names a visitor would read as "supported". Unmapped names are clients Taksim does not support.
const clientNames = {
  'Claude Code': 'claude',
  Codex: 'codex',
  'GitHub Copilot': 'github_copilot',
  'Devin Desktop': 'devin_desktop',
  Windsurf: 'devin_desktop',
  'Devin CLI': 'devin',
  OpenCode: 'opencode',
  'Kilo Code': 'kilo',
  'Oh My Pi': 'pi',
  AgentBoard: 'agentboard',
  'Agent Workstation': 'agentworkstation',
  Cursor: null,
  Aider: null,
  Cline: null,
  'Roo Code': null,
  'Gemini CLI': null,
  'Amazon Q': null,
  Goose: null,
};

test('every client named on the site is a client the release imports', () => {
  for (const [path, text] of copy) {
    for (const [name, id] of Object.entries(clientNames)) {
      if (!new RegExp(`\\b${name}\\b`).test(text)) continue;
      assert.ok(
        id && clientIds.has(id),
        `${path} names ${name}, which ${manifest.tag} does not import`,
      );
    }
  }
});

test('the client matrix claims nothing the release does not do', async () => {
  const { clientSupport } = await import('../lib/client-support.ts');
  for (const row of clientSupport) {
    assert.ok(row.manifestClients.length > 0, row.id);
    for (const id of row.manifestClients) {
      const client = clientIds.get(id);
      assert.ok(client, `${row.id}: ${id} is not in ${manifest.tag}`);
      if (row.cells.observe === 'yes')
        assert.ok(
          client.observe,
          `${row.id}: ${id} is not observed in ${manifest.tag}`,
        );
      if (row.cells.judge === 'yes')
        assert.ok(
          client.judge,
          `${row.id}: ${id} is not judged in ${manifest.tag}`,
        );
      if (row.cells.route === 'yes') {
        assert.equal(
          client.route,
          'api-key',
          `${row.id}: ${id} is not routed in ${manifest.tag}`,
        );
        assert.equal(
          row.billing,
          'apiKey',
          `${row.id}: routing is only for API-key traffic`,
        );
      }
    }
    if (row.billing !== 'apiKey')
      assert.equal(
        row.cells.route,
        'no',
        `${row.id}: only API-key traffic is routed`,
      );
  }
});

test('the install command comes from the release, never from page copy', () => {
  for (const [path, text] of copy.filter(([p]) => !p.endsWith('llms.txt'))) {
    assert.doesNotMatch(
      text,
      /releases\/(?:latest\/)?download\//,
      `${path} hard-codes a release download URL`,
    );
    assert.doesNotMatch(
      text,
      /install-release\.ps1/,
      `${path} still documents the old installer`,
    );
  }
  const llms = copy.find(([p]) => p === 'public/llms.txt')[1];
  assert.ok(
    llms.includes(manifest.install.oneLine),
    'public/llms.txt is stale: run node scripts/release.mjs render',
  );
  assert.ok(llms.includes(`Current release: ${manifest.tag}.`));
});

test('removed product switches are gone from the site', () => {
  for (const [path, text] of copy) {
    assert.doesNotMatch(
      text,
      /TAKSIM_ALLOW_SUBSCRIPTION_REWRITE|allow-subscription-rewrite|subscription rewrite/i,
      path,
    );
  }
});
