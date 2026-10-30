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
  assert.equal(codexApi?.cells.gateway, 'yes');
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
      'developers.openai.com',
      'huggingface.co',
      'api.typesafe.ai',
      'api.openai.com',
      'generativelanguage.googleapis.com',
      'api.cursor.com',
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

// R2-01: site claims that went stale or were written by hand.
const sentences = (text) => text.split(/(?<=[.!?])\s+/);

test('never limits live routing to the API key without naming the Claude-login opt-in', async () => {
  const en = await source('lib/i18n/en.ts');
  const tr = await source('lib/i18n/tr.ts');
  const llms = await source('release/llms.template.txt');
  let seen = 0;
  for (const sentence of [...sentences(en), ...sentences(llms)]) {
    if (!/limited to traffic billed to your own API key/.test(sentence)) continue;
    seen++;
    assert.match(sentence, /opt in/, sentence.slice(0, 160));
  }
  for (const sentence of sentences(tr)) {
    if (!/kendi API key’inize faturalanan trafikle sınırlı/.test(sentence)) continue;
    seen++;
    assert.match(sentence, /açmadıkça|açtıktan/, sentence.slice(0, 160));
  }
  assert.ok(seen >= 2, 'expected the Claude-only routing sentences to exist in both languages');
  const { en: enDict } = await import('../lib/i18n/en.ts');
  const { tr: trDict } = await import('../lib/i18n/tr.ts');
  assert.ok(enDict.docs.how.calloutBody.includes('`taksim routing subscription on`'));
  assert.ok(trDict.docs.how.calloutBody.includes('`taksim routing subscription on`'));
  assert.doesNotMatch(enDict.docs.how.calloutBody, /limited to traffic billed/);
});

test('prices plans per seat and never says "active developer"', async () => {
  for (const path of ['lib/i18n/en.ts', 'lib/i18n/tr.ts', 'components/pages/terms.tsx', 'release/llms.template.txt']) {
    assert.doesNotMatch(await source(path), /active developer|aktif geliştirici/i, path);
  }
  const { en } = await import('../lib/i18n/en.ts');
  assert.equal(en.plans.pro.per, 'per seat per month');
  assert.equal(en.plans.team.per, 'per seat per month');
  assert.equal(en.pricing.faq.some((item) => /active developer/i.test(item.q)), false);
  const { tr } = await import('../lib/i18n/tr.ts');
  assert.match(en.meta.pages.pricing.description, /Pro: \$12 per seat per month/);
  assert.match(tr.meta.pages.pricing.description, /Pro: koltuk başına aylık \$12/);
  assert.match(en.compare.rows.price.cells.taksim, /Pro is \$12 per seat a month/);
  assert.match(tr.compare.rows.price.cells.taksim, /Pro koltuk başına aylık \$12/);
});

test('"API key only" routing copy is left only on the Codex row, where ChatGPT sign-in is observed', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  for (const [dict, only] of [
    [en, /API key only/i],
    [tr, /Yalnızca API key/i],
  ]) {
    const rows = dict.docs.compat.rows.filter((row) => only.test(row[2])).map((row) => row[0]);
    assert.deepEqual(rows, ['Codex']);
  }
  for (const path of ['lib/i18n/en.ts', 'lib/i18n/tr.ts']) {
    assert.doesNotMatch(await source(path), /routing path for API-key traffic|API key trafiği için isteğe bağlı, fail-open/, path);
  }
});

test('the compatibility table date is the synced release date, not a hand-written one', async () => {
  const manifest = JSON.parse(await source('release/manifest.json'));
  const released = Date.parse(manifest.publishedAt.slice(0, 10));
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const months = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  };
  for (const locale of /** @type {const} */ (['en', 'tr'])) {
    const dict = locale === 'en' ? en : tr;
    const match = /(\d{1,2}) (\p{L}+) (\d{4})$/u.exec(dict.docs.compat.updated);
    assert.ok(match, `${locale}: ${dict.docs.compat.updated}`);
    const month = months[locale].indexOf(match[2]);
    assert.ok(month >= 0, `${locale} month ${match[2]}`);
    const verified = Date.UTC(Number(match[3]), month, Number(match[1]));
    assert.ok(verified >= released, `${locale}: "Last verified" ${dict.docs.compat.updated} is older than release ${manifest.publishedAt}`);
  }
  for (const path of ['lib/i18n/en.ts', 'lib/i18n/tr.ts']) {
    assert.doesNotMatch(await source(path), /(?:Last verified|Son doğrulama) · \d/, `${path} hard-codes the verified date`);
  }
  const claude = en.docs.compat.rows.find((row) => row[0] === 'Claude Code');
  assert.equal(claude[2], 'API key: optional. Claude login: opt-in, Claude models only.');
  const desktop = (await source('lib/i18n/en.ts')).includes('Claude desktop app (Code tab) sessions are observed, not routed yet');
  assert.ok(desktop, 'the Code-tab desktop app stays not routable');
});

test('the plan table uses the product feature ids and keeps unshipped features out of "Included now"', async () => {
  const { entitlements, isShipped, shippedIn } = await import('../lib/plans.ts');
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  // Exactly the ids in LicenseFeatures.cs (origin/claude/license-seam), grouped by plan.
  assert.deepEqual(entitlements.pro, ['budget.enforce', 'digest.delivery', 'report.summaryHtml', 'audit.nativeRouter', 'support.priority']);
  assert.deepEqual(entitlements.team, ['report.team', 'budget.team', 'policy.org']);
  const mirror = JSON.parse(await source('data/entitlements.json'));
  const ids = [...entitlements.pro, ...entitlements.team];
  for (const id of ids) assert.ok(mirror.features.some((feature) => feature.id === id), `${id} is missing from data/entitlements.json`);
  assert.deepEqual(mirror.features.map((feature) => feature.id), ids, 'data/entitlements.json lists ids the site does not know');
  for (const feature of mirror.features) assert.equal(entitlements[feature.plan].includes(feature.id), true, `${feature.id} plan`);
  assert.deepEqual(Object.keys(shippedIn), ids);
  assert.deepEqual(
    ids.filter((id) => shippedIn[id] === null),
    ['audit.nativeRouter', 'policy.org'],
  );
  const pending = new Set(ids.filter((id) => !isShipped(id)));
  const enCopy = await source('lib/i18n/en.ts');
  for (const dict of [en, tr]) {
    const included = [...dict.plans.pro.features, ...dict.plans.team.features];
    const coming = [...dict.plans.pro.coming, ...dict.plans.team.coming];
    assert.equal(coming.length, pending.size);
    assert.equal(included.length + coming.length, ids.length);
    assert.equal(new Set([...included, ...coming]).size, ids.length);
    assert.ok(dict.plans.includedNow && dict.plans.comingLabel);
  }
  // The unshipped features are exactly the ones whose copy sits in "coming", in both languages.
  assert.match(en.plans.pro.coming[0], /Native-router audit details/);
  assert.match(en.plans.team.coming[0], /^Org policy/);
  assert.match(tr.plans.pro.coming[0], /native yönlendirici denetim/);
  assert.match(tr.plans.team.coming[0], /^Kurum politikası/);
  for (const text of [...en.plans.pro.features, ...en.plans.team.features]) assert.doesNotMatch(text, /Native-router audit|^Org policy/);
  assert.equal(en.plans.comingLabel, 'Coming (not billed until shipped)');
  assert.ok(enCopy.includes("includedNow: 'Included now'"));
});

test('names no annual price', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  for (const dict of [en, tr]) assert.doesNotMatch(JSON.stringify(dict.plans) + JSON.stringify(dict.pricing), /annual|yıllık|per year|\/year/i);
});

test('the live check is a script and stays out of npm test', async () => {
  const pkg = JSON.parse(await source('package.json'));
  assert.equal(pkg.scripts['live-check'], 'node scripts/live-check.mjs');
  assert.doesNotMatch(pkg.scripts.test, /live-check/);
  assert.doesNotMatch(pkg.scripts.pretest, /live-check/);
  const script = await source('scripts/live-check.mjs');
  assert.doesNotMatch(script, /method:\s*['"](?:POST|PUT|PATCH|DELETE)/i, 'the live check is read-only');
});
