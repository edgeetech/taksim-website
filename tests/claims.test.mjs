import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const built = new URL('dist/client/', root);

async function source(path) {
  return readFile(new URL(path, root), 'utf8');
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) yield* walk(new URL(`${entry.name}/`, dir));
    else yield { path: new URL(entry.name, dir).pathname, url: new URL(entry.name, dir) };
  }
}

const textFile = /\.(html|txt|js|css|json|xml|md|mjs|ts|tsx)$/;
const certification = /SOC ?2|ISO[ /]?(?:IEC )?27001/;
// A sentence that ties the Codex launcher to the gateway or to routing.
const codexRouting = /taksim codex[^.]*(?:gateway|rout)|(?:gateway|rout)[^.]*taksim codex/i;

// CI runs `npm test` before the build, so the built-output checks skip when there is no build,
// unless CLAIMS_REQUIRE_BUILD=1 (the workflow sets it for the step after the build).
const hasBuild = existsSync(built);
const buildOptions = { skip: !hasBuild && process.env.CLAIMS_REQUIRE_BUILD !== '1' && 'run `npm run build` first' };

test('names no certification the product does not hold, anywhere in the source', async () => {
  const dirs = ['app', 'components', 'lib', 'release', 'public', 'data'];
  let scanned = 0;
  for (const dir of dirs) {
    for await (const file of walk(new URL(`${dir}/`, root))) {
      if (!textFile.test(file.path)) continue;
      scanned++;
      assert.doesNotMatch(await readFile(file.url, 'utf8'), certification, file.path);
    }
  }
  assert.ok(scanned > 20, 'expected to scan the whole source tree');
  await assert.rejects(readFile(new URL('components/trust-strip.tsx', root)), { code: 'ENOENT' });
  const chrome = await source('components/site-chrome.tsx');
  assert.doesNotMatch(chrome, /TrustStrip|trust-strip/);
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  assert.equal('trust' in en.chrome, false);
  assert.equal('trust' in tr.chrome, false);
});

test('names no certification in the built output', buildOptions, async () => {
  let scanned = 0;
  for await (const file of walk(built)) {
    if (!textFile.test(file.path)) continue;
    scanned++;
    assert.doesNotMatch(await readFile(file.url, 'utf8'), certification, file.path);
  }
  assert.ok(scanned > 50, `expected a full build, scanned ${scanned} files`);
});

test('tells the local-paths and Codex truths in the copy', async () => {
  const en = await source('lib/i18n/en.ts');
  const tr = await source('lib/i18n/tr.ts');
  const llms = await source('release/llms.template.txt');
  assert.doesNotMatch(en, /credentials or local paths\./);
  assert.doesNotMatch(en, /Credentials and local paths/);
  assert.doesNotMatch(en + llms, /no prompts, responses, code, paths or credentials/);
  assert.doesNotMatch(tr, /yerel dosya yolları|dosya yolu ya da kimlik/);
  assert.match(
    en,
    /Never stored: prompts, responses, source code or credentials\. Local repository folders stay in your local database only, to attribute cost, and never appear in exports\./,
  );
  assert.match(en, /If the gateway is unavailable when a session starts, the session goes straight to Anthropic\./);
  assert.doesNotMatch(en, /sessions go straight to Anthropic \(fail open\)/);
  assert.doesNotMatch(en + tr + llms, /taksim claude or taksim codex|taksim claude veya taksim codex/);
  assert.match(en, /route: 'Observed; not routed\. Taksim routes only between Claude models\.'/);
  assert.match(llms, /Codex CLI on an OpenAI API key: .*Observed; not routed\. Taksim routes only between Claude models\./);
  for (const text of [en, tr, llms]) {
    for (const sentence of text.split(/(?<=\.)\s/)) assert.doesNotMatch(sentence, codexRouting, sentence.slice(0, 120));
  }
  const { clientSupport } = await import('../lib/client-support.ts');
  const codexApi = clientSupport.find((row) => row.id === 'codexApi');
  assert.equal(codexApi?.cells.gateway, 'no');
  assert.equal(codexApi?.cells.route, 'no');
});

test('ties no Codex launcher to the gateway or routing in the built pages', buildOptions, async () => {
  for await (const file of walk(built)) {
    if (!file.path.endsWith('.html') && !file.path.endsWith('/llms.txt')) continue;
    // Visible text only: the inline RSC payload repeats the same copy as one long JSON string.
    const text = (await readFile(file.url, 'utf8'))
      .replace(/<(script|style)[\s\S]*?<\/\1>/g, ' ')
      .replace(/<\/(?:p|li|pre|td|th|tr|summary|details|h\d|div|section|article)>/g, '.\n')
      .replace(/<[^>]+>/g, ' ');
    for (const sentence of text.split(/(?<=\.)\s|\n/)) {
      assert.doesNotMatch(sentence, codexRouting, `${file.path}: ${sentence.slice(0, 120)}`);
    }
  }
});

test('publishes /security in both languages and the sitemap', async () => {
  const { localizedRoutes } = await import('../lib/i18n/config.ts');
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  assert.ok(localizedRoutes.includes('/security/'));
  const sitemap = await source('public/sitemap.xml');
  assert.ok(sitemap.includes('<loc>https://taksim.edgee.tech/security/</loc>'));
  assert.ok(sitemap.includes('<loc>https://taksim.edgee.tech/tr/security/</loc>'));
  const chrome = await source('components/site-chrome.tsx');
  assert.match(chrome, /href\('\/security'\)/);
  for (const dict of [en, tr]) {
    const hosts = dict.security.egress.map((row) => row.host);
    assert.deepEqual(hosts, [
      'api.anthropic.com',
      'github.com',
      'api.github.com',
      'platform.claude.com',
      'huggingface.co',
      'api.typesafe.ai',
    ]);
    const body = JSON.stringify(dict.security);
    for (const needle of ['127.0.0.1', 'Host, Origin', 'X-Taksim-Hook-Secret', 'Credential Manager', 'Keychain', 'SHA256SUMS.txt']) {
      assert.ok(body.includes(needle), needle);
    }
  }
  assert.match(
    tr.security.sections.find((s) => s.title === 'Kod imzalama').body,
    /^Kod imzalama: beklemede; binary’ler bugün imzasız\./,
  );
  assert.match(
    en.security.sections.find((s) => s.title === 'Code signing').body,
    /^Code signing: pending; binaries are unsigned today\./,
  );
  assert.match(en.security.egress.find((row) => row.host === 'api.typesafe.ai').when, /Only when you choose Jev/);
  for (const path of ['app/(en)/security/page.tsx', 'app/tr/security/page.tsx']) {
    assert.match(await source(path), /pageMetadata\('(?:en|tr)', '\/security\/', 'security'\)/, path);
  }
});

test('serves security.txt for the disclosure contact', async () => {
  const text = await source('public/.well-known/security.txt');
  assert.match(text, /^Contact: mailto:info@edgee\.tech$/m);
  assert.match(text, /^Policy: https:\/\/taksim\.edgee\.tech\/security\/$/m);
  assert.match(text, /^Preferred-Languages: en, tr$/m);
  const expires = /^Expires: (\S+)$/m.exec(text)?.[1];
  assert.ok(expires, 'Expires field');
  const days = (Date.parse(expires) - Date.now()) / 86_400_000;
  assert.ok(days > 30 && days < 366, `Expires should be under a year out and not about to lapse, got ${Math.round(days)} days`);
});

test('sets security headers for every path', async () => {
  const headers = (await source('public/_headers')).replace(/\r\n/g, '\n');
  assert.match(headers, /^\/\*$/m);
  assert.match(headers, /^ {2}Strict-Transport-Security: max-age=31536000; includeSubDomains$/m);
  assert.match(headers, /^ {2}X-Content-Type-Options: nosniff$/m);
  assert.match(headers, /^ {2}Referrer-Policy: strict-origin-when-cross-origin$/m);
  assert.match(headers, /^ {2}Permissions-Policy: camera=\(\), microphone=\(\), geolocation=\(\)$/m);
  const csp = /^ {2}Content-Security-Policy: (.+)$/m.exec(headers)?.[1];
  assert.ok(csp, 'Content-Security-Policy');
  for (const directive of [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data:",
    "frame-ancestors 'none'",
    "base-uri 'none'",
    "form-action 'self' mailto:",
  ]) {
    assert.ok(csp.split('; ').includes(directive), directive);
  }
});

test('the build copies security.txt and the headers file next to the pages', buildOptions, async () => {
  for (const path of ['.well-known/security.txt', '_headers', 'security/index.html', 'tr/security/index.html']) {
    assert.ok(existsSync(new URL(path, built)), path);
  }
  const sitemap = await readFile(new URL('sitemap.xml', built), 'utf8');
  assert.ok(sitemap.includes('/security/') && sitemap.includes('/tr/security/'));
});
