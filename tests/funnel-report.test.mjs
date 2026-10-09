import assert from 'node:assert/strict';
import test from 'node:test';
import {
  classify,
  fetchReleases,
  formatReport,
  main,
  summarize,
} from '../scripts/funnel-report.mjs';

const asset = (name, download_count) => ({ name, download_count });

const releases = [
  {
    tag_name: 'v0.3.7',
    published_at: '2026-10-01T10:00:00Z',
    assets: [
      asset('install.ps1', 42),
      asset('install-release.ps1', 2),
      asset('install.sh', 1),
      asset('SHA256SUMS.txt', 42),
      asset('taksim-connector-win-x64.zip', 2),
      asset('taksim-connector-osx-arm64.tar.gz', 1),
      asset('taksim-connector-osx-x64.tar.gz', 1),
      asset('taksim-release-manifest.json', 38),
    ],
  },
  {
    tag_name: 'v0.1.0',
    published_at: '2026-08-01T10:00:00Z',
    assets: [
      asset('install-release.ps1', 9),
      asset('SHA256SUMS.txt', 7),
      asset('taksim-connector-win-x64.zip', 4),
    ],
  },
];

const response = (body, link) => ({
  ok: true,
  status: 200,
  statusText: 'OK',
  headers: new Headers(link ? { link } : {}),
  json: async () => body,
});

test('classifies release assets by kind', () => {
  const withEntry = ['install.ps1', 'install-release.ps1'];
  assert.equal(classify('install.ps1', withEntry), 'installer');
  assert.equal(classify('install.sh'), 'installer');
  assert.equal(classify('install-release.ps1', withEntry), 'installerStage');
  assert.equal(
    classify('install-release.ps1', ['install-release.ps1']),
    'installer',
  );
  assert.equal(classify('taksim-connector-win-x64.zip'), 'windows');
  assert.equal(classify('taksim-win-x64.exe'), 'windows');
  assert.equal(classify('taksim-connector-osx-arm64.tar.gz'), 'macos');
  assert.equal(classify('taksim-connector-linux-x64.tar.gz'), 'linux');
  assert.equal(classify('SHA256SUMS.txt'), 'checksums');
  assert.equal(classify('taksim-release-manifest.json'), 'manifest');
  assert.equal(classify('notes.txt'), 'other');
});

test('separates installs from checksum and manifest fetches', () => {
  const { releases: rows, totals, funnel } = summarize(releases);
  assert.equal(rows[0].total, 129);
  assert.deepEqual(rows[0].byKind, {
    installer: 43,
    installerStage: 2,
    windows: 2,
    macos: 2,
    linux: 0,
    checksums: 42,
    manifest: 38,
    other: 0,
  });
  assert.equal(totals.installer, 52);
  assert.equal(totals.windows, 6);
  assert.deepEqual(funnel, {
    installs: 52,
    siteSyncFetches: 38,
    installsExcludingSync: 14,
    binaries: 8,
    binariesPerInstall: 8 / 52,
    binariesPerInstallExcludingSync: 8 / 14,
  });
});

test('reports no ratio when there are no installs', () => {
  const { funnel } = summarize([
    { tag_name: 'v0', assets: [asset('taksim-connector-win-x64.zip', 3)] },
  ]);
  assert.equal(funnel.binariesPerInstall, null);
  assert.match(
    formatReport(summarize([])),
    /Binaries per install-script download: n\/a/,
  );
});

test('follows pagination and sends the token only when set', async () => {
  const calls = [];
  const fakeFetch = async (url, init) => {
    calls.push({ url, auth: init.headers.Authorization });
    return url.includes('page=2')
      ? response([releases[1]])
      : response(
          [releases[0]],
          '<https://api.github.com/repos/edgeetech/taksim-releases/releases?per_page=100&page=2>; rel="next"',
        );
  };
  const all = await fetchReleases({ fetch: fakeFetch, token: 'test-token' });
  assert.deepEqual(
    all.map((r) => r.tag_name),
    ['v0.3.7', 'v0.1.0'],
  );
  assert.equal(calls.length, 2);
  assert.match(
    calls[0].url,
    /^https:\/\/api\.github\.com\/repos\/edgeetech\/taksim-releases\/releases\?per_page=100$/,
  );
  assert.ok(calls.every((c) => c.auth === 'Bearer test-token'));

  calls.length = 0;
  await fetchReleases({ fetch: fakeFetch });
  assert.ok(calls.every((c) => c.auth === undefined));
});

test('throws on an API error', async () => {
  const fakeFetch = async () => ({
    ok: false,
    status: 403,
    statusText: 'rate limit exceeded',
  });
  await assert.rejects(
    fetchReleases({ fetch: fakeFetch }),
    /403 rate limit exceeded/,
  );
});

test('prints per-release counts and the funnel summary', async () => {
  const out = [];
  await main({
    fetch: async () => response(releases),
    env: {},
    log: (s) => out.push(s),
  });
  const text = out.join('\n');
  assert.match(text, /anonymous API access/);
  assert.match(text, /v0\.3\.7 \(2026-10-01\): 129 downloads/);
  assert.match(
    text,
    /installer script: 43\n {4}install\.ps1: 42\n {4}install\.sh: 1/,
  );
  assert.match(text, /second-stage installer: 2/);
  assert.match(text, /Install-script downloads: 52/);
  assert.match(text, /Install-script downloads excluding website sync: 14/);
  assert.match(text, /Platform binary downloads: 8/);
  assert.match(text, /Binaries per install-script download: 15\.4%/);
  assert.match(text, /excluding website sync: 57\.1%/);
});
