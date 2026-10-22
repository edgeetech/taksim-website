import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { en } from '../lib/i18n/en.ts';
import { tr } from '../lib/i18n/tr.ts';
import { launchConfig, waitlistHref } from '../lib/launch.ts';
import { planMatrix, planMatrixGroups, plans } from '../lib/plan-matrix.ts';
import { doctorExcerpt, endpoints, homeFiles, outsideFiles, watchCommands } from '../lib/verify.ts';
import { report, copyTokens, fillKnown } from '../lib/benchmark/report.ts';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = (path) => readFile(join(root, path), 'utf8');
const dicts = { en, tr };

const goodToken = 'a1b2c3d4e5f60718293a4b5c6d7e8f90';

test('launch switches are all off when no variable is set', () => {
  const off = launchConfig({});
  assert.deepEqual(off, {
    checkout: { pro: null, team: null },
    demoVideoUrl: null,
    demoCaptionsUrl: null,
    analyticsToken: null,
  });
  assert.deepEqual(launchConfig({ PUBLIC_CF_ANALYTICS_TOKEN: '  ', PUBLIC_PRO_CHECKOUT_URL: '' }), off);
});

test('launch switches accept only well-formed values', () => {
  const on = launchConfig({
    PUBLIC_PRO_CHECKOUT_URL: 'https://checkout.example.com/pro',
    PUBLIC_TEAM_CHECKOUT_URL: 'https://checkout.example.com/team',
    PUBLIC_DEMO_VIDEO_URL: 'https://media.example.com/taksim-demo.mp4',
    PUBLIC_DEMO_CAPTIONS_URL: 'https://media.example.com/taksim-demo.en.vtt',
    PUBLIC_CF_ANALYTICS_TOKEN: goodToken,
  });
  assert.equal(on.checkout.pro, 'https://checkout.example.com/pro');
  assert.equal(on.checkout.team, 'https://checkout.example.com/team');
  assert.equal(on.demoVideoUrl, 'https://media.example.com/taksim-demo.mp4');
  assert.equal(on.demoCaptionsUrl, 'https://media.example.com/taksim-demo.en.vtt');
  assert.equal(on.analyticsToken, goodToken);

  const bad = launchConfig({
    PUBLIC_PRO_CHECKOUT_URL: 'http://checkout.example.com/pro',
    PUBLIC_TEAM_CHECKOUT_URL: 'javascript:alert(1)',
    PUBLIC_DEMO_VIDEO_URL: 'https://www.youtube.com/watch?v=abc',
    PUBLIC_DEMO_CAPTIONS_URL: 'https://media.example.com/captions.txt',
    PUBLIC_CF_ANALYTICS_TOKEN: '"><script>alert(1)</script>',
  });
  assert.deepEqual(bad, {
    checkout: { pro: null, team: null },
    demoVideoUrl: null,
    demoCaptionsUrl: null,
    analyticsToken: null,
  });
});

test('without a checkout URL the plans fall back to a mailto waitlist, never a dead link', async () => {
  assert.equal(waitlistHref('pro'), 'mailto:info@edgee.tech?subject=Taksim%20Pro%20waitlist');
  assert.equal(waitlistHref('team'), 'mailto:info@edgee.tech?subject=Taksim%20Team%20waitlist');
  const plansSource = await source('components/pricing-plans.tsx');
  assert.match(plansSource, /launch\.checkout\[plan\]/);
  assert.match(plansSource, /href=\{url\} rel="noopener"/);
  assert.match(plansSource, /href=\{waitlistHref\(plan\)\}/);
  assert.doesNotMatch(plansSource, /href="#"|href=\{'#'\}/);
  for (const dict of [en, tr]) {
    assert.ok(dict.plans.soon && dict.plans.waitlist && dict.plans.buy.pro && dict.plans.buy.team);
  }
});

test('Cloudflare Web Analytics is emitted only from one component and only when a token is set', async () => {
  const component = await source('components/cf-analytics.tsx');
  assert.match(component, /if \(!token\) return null/);
  assert.match(component, /https:\/\/static\.cloudflareinsights\.com\/beacon\.min\.js/);
  assert.match(component, /data-cf-beacon=\{JSON\.stringify\(\{ token \}\)\}/);
  assert.match(await source('components/root-shell.tsx'), /<CloudflareAnalytics \/>/);
  const files = [];
  for (const dir of ['app', 'components', 'lib', 'public']) {
    for (const entry of await readdir(join(root, dir), { recursive: true, withFileTypes: true })) {
      if (entry.isFile() && /\.(?:tsx?|css|html|txt|xml)$/.test(entry.name)) files.push(join(entry.parentPath, entry.name));
    }
  }
  const mentions = [];
  for (const file of files) {
    if (/cloudflareinsights/i.test(await readFile(file, 'utf8'))) mentions.push(file.replaceAll('\\', '/').split('/').slice(-2).join('/'));
  }
  assert.deepEqual(mentions, ['components/cf-analytics.tsx']);
  assert.match(await source('AGENTS.md'), /PUBLIC_CF_ANALYTICS_TOKEN/);
});

test('publishes Free, Pro and Team at the owner prices with the launch offer', () => {
  for (const dict of [en, tr]) {
    assert.equal(dict.plans.developer.price, '$0');
    assert.equal(dict.plans.pro.price, '$12');
    assert.equal(dict.plans.team.price, '$18');
    assert.match(dict.plans.team.sub, /5/);
    assert.match(dict.plans.team.sub, /\$90/);
    assert.match(dict.plans.launch, /20/);
    assert.match(dict.plans.launch, /50/);
    assert.match(dict.plans.payment, /Paddle/);
  }
  assert.match(en.plans.launch, /first 20 customers get 50% off/);
});

test('the plan matrix gives Free the observe features, Pro routing and budgets, Team the roll-up', () => {
  const byId = Object.fromEntries(planMatrix.map((row) => [row.id, row]));
  for (const id of ['import', 'dashboard', 'judge']) assert.deepEqual([byId[id].free, byId[id].pro, byId[id].team], [true, true, true], id);
  for (const id of ['routing', 'learning', 'budgets']) assert.deepEqual([byId[id].free, byId[id].pro, byId[id].team], [false, true, true], id);
  for (const id of ['rollup', 'chargeback']) assert.deepEqual([byId[id].free, byId[id].pro, byId[id].team], [false, false, true], id);
  assert.deepEqual([...plans], ['free', 'pro', 'team']);
  for (const row of planMatrix) assert.ok(planMatrixGroups.includes(row.group), row.id);
  for (const dict of [en, tr]) {
    assert.deepEqual(Object.keys(dict.pricing.matrix.rows).sort(), planMatrix.map((r) => r.id).sort());
    for (const group of planMatrixGroups) assert.ok(dict.pricing.matrix.groups[group], group);
  }
});

test('the pricing FAQ covers the offline licence, expiry, refunds and VAT without hidden promises', () => {
  const faq = en.pricing.faq.map(({ q, a }) => `${q}\n${a}`).join('\n');
  assert.match(faq, /Do I need a Taksim account\?/);
  assert.match(faq, /signed file/);
  assert.match(faq, /makes no network call/);
  assert.match(faq, /What happens when my licence expires\?/);
  assert.match(faq, /Routing stops/);
  assert.match(faq, /Claude Code is never blocked/);
  assert.match(faq, /Payments and refunds go through Paddle/);
  assert.match(faq, /merchant of record/);
  assert.match(faq, /collects and remits VAT/);
  assert.match(faq, /\(\/privacy\/verify\)/);
  assert.equal(tr.pricing.faq.length, en.pricing.faq.length);
});

test('launch copy keeps to the claims discipline', () => {
  for (const [locale, dict] of Object.entries(dicts)) {
    const text = JSON.stringify([dict.plans, dict.pricing.faq, dict.pricing.matrix, dict.pricing.pilot, dict.pricing.lede, dict.verify]);
    assert.doesNotMatch(text, /subscription (?:routing|rewrite)|routing subscription|routes? (?:your )?(?:claude )?subscription/i, locale);
    assert.doesNotMatch(text, /desktop/i, locale);
    assert.doesNotMatch(text, /context (?:saving|fold|compress)|fold(?:ing)? (?:save|reduc)|token compression|bağlam (?:tasarruf|katlama)/i, locale);
    assert.doesNotMatch(text, /guarantee(?:d)? saving|cuts your bill|%74 daha ucuz garanti/i, locale);
    assert.doesNotMatch(text, /\bofficial\b|Anthropic-approved|\bpartner\b/i, locale);
  }
  // The subscription question stays out of the pricing FAQ; the only plan features that mention
  // subscriptions are read-only quota windows.
  assert.doesNotMatch(JSON.stringify(en.pricing.faq), /subscription/i);
  assert.match(en.plans.developer.features.join(' '), /subscription quota windows/);
  for (const feature of [...en.plans.pro.features, ...en.plans.team.features]) assert.doesNotMatch(feature, /subscription/i, feature);
});

test('the pricing page shows the internal pilot only with its caveat and the Sonnet arm', async () => {
  const page = await source('components/pricing-pilot.tsx');
  assert.match(page, /const armKeys = \['opus', 'sonnet', 'taksim'\] as const/);
  assert.match(page, /\{t\.caveat\}/);
  assert.match(page, /localePath\(locale, '\/benchmark'\)/);
  assert.match(await source('components/pages/pricing.tsx'), /<PricingPilot locale=\{locale\} \/>/);
  const labels = (dict) => ({ notMeasured: dict.home.pilot.notMeasured, undefinedPerAccepted: dict.home.pilot.undefinedPerAccepted });
  const enPilot = fillKnown(en.pricing.pilot, copyTokens(report, 'en', labels(en)));
  const trPilot = fillKnown(tr.pricing.pilot, copyTokens(report, 'tr', labels(tr)));
  assert.match(enPilot.summary, /Routed runs cost 74% less than always-Opus, with 54 of 58 runs accepted against 52 for Opus/);
  assert.match(enPilot.summary, /Always-Sonnet cost \$4\.19 with 53 of 58 accepted/);
  assert.match(trPilot.summary, /hep-Opus’tan %74 daha ucuza/);
  assert.match(trPilot.summary, /Hep-Sonnet \$4\.19 tuttu/);
  assert.match(enPilot.caveat, /Internal pilot, not an independent benchmark and not held-out/);
  assert.match(trPilot.caveat, /İç pilot; bağımsız bir benchmark değildir ve held-out değildir/);
  assert.match(enPilot.caveat, /API-equivalent list prices, not an invoice/);
  assert.match(enPilot.caveat, /Results hold for this pilot only/);
  for (const text of [JSON.stringify(enPilot), JSON.stringify(trPilot)]) {
    assert.doesNotMatch(text, /\{\w+\}(?<!\{n\}|\{total\})/, 'no unfilled tokens');
    assert.doesNotMatch(text, /Claude Team subscription|BrightSG|more accurate|daha doğru/i);
  }
});

test('Pricing stays in the nav; no new nav entry is added before launch', async () => {
  const chrome = await source('components/site-chrome.tsx');
  const header = chrome.slice(chrome.indexOf('export function Header'), chrome.indexOf('export function Footer'));
  assert.equal((header.match(/t\.nav\.pricing/g) ?? []).length, 2);
  assert.doesNotMatch(header, /t\.nav\.verify/);
  assert.match(chrome.slice(chrome.indexOf('export function Footer')), /href\('\/privacy\/verify'\)/);
});

test('the demo video slot renders nothing until a video URL is configured and loads no third-party player', async () => {
  const slot = await source('components/demo-video.tsx');
  assert.match(slot, /if \(!src\) return null/);
  assert.match(slot, /<video controls preload="none"/);
  assert.doesNotMatch(slot, /iframe|youtube|vimeo/i);
  assert.match(await source('components/pages/pricing.tsx'), /<DemoVideo locale=\{locale\} \/>/);
});

test('the demo storyboard is internal and covers the five scenes in 60 to 90 seconds', async () => {
  const doc = await source('docs/launch-demo-storyboard.md');
  for (const scene of ['`taksim claude`', 'taksim setup', 'taksim dashboard', 'taksim report cost', 'routed']) assert.ok(doc.includes(scene), scene);
  const ends = [...doc.matchAll(/\| \d:\d{2}-(\d):(\d{2}) \|/g)].map((m) => Number(m[1]) * 60 + Number(m[2]));
  const last = Math.max(...ends);
  assert.ok(last >= 60 && last <= 90, `storyboard runs ${last}s`);
  assert.match(doc, /not served by the site/);
  for (const dir of ['public', 'app']) {
    assert.doesNotMatch((await readdir(join(root, dir), { recursive: true })).join('\n'), /storyboard/i, dir);
  }
});

test('the verify page lists files, endpoints and OS-tool commands, in both languages', async () => {
  for (const dict of [en, tr]) {
    for (const file of homeFiles) assert.ok(dict.verify.files.home[file.id], `${file.id} in files.home`);
    for (const file of outsideFiles) assert.ok(dict.verify.files.outside[file.id], `${file.id} in files.outside`);
    for (const endpoint of endpoints) {
      assert.ok(dict.verify.network.rows[endpoint.id].when && dict.verify.network.rows[endpoint.id].sent, endpoint.id);
      if (!endpoint.host) assert.ok(dict.verify.network.hostFallback[endpoint.id], `${endpoint.id} needs a host label`);
    }
    assert.equal(Object.keys(dict.verify.files.home).length, homeFiles.length);
    assert.equal(Object.keys(dict.verify.network.rows).length, endpoints.length);
  }
  const hosts = endpoints.map((e) => e.host);
  for (const host of ['127.0.0.1:4027', 'api.anthropic.com', 'github.com/edgeetech/taksim-releases', 'api.typesafe.ai', 'api.github.com']) assert.ok(hosts.includes(host), host);
  assert.ok(homeFiles.some((f) => f.path === 'control-plane.db'));
  assert.match(watchCommands.powershell, /Get-NetTCPConnection/);
  assert.match(watchCommands.netstat, /netstat -ano/);
  assert.equal(watchCommands.resmon, 'resmon');
  assert.match(watchCommands.lsof, /lsof -nP -iTCP -a -c taksim/);
  assert.match(en.verify.watch.resmon, /Resource Monitor|resmon/);
  assert.match(en.verify.watch.lsof, /lsof/);
  const verify = await source('components/pages/verify.tsx');
  for (const section of ['files', 'network', 'watch', 'doctor', 'limits']) assert.match(verify, new RegExp(`id="${section}"`));
});

test('the doctor excerpt on the verify page is valid JSON that reports no sensitive data collected', () => {
  const doctor = JSON.parse(doctorExcerpt);
  assert.equal(doctor.rawSensitiveDataCollected, false);
  assert.equal(doctor.databaseStatus, 'ok');
  assert.equal(doctor.claudeGatewayUsed, false);
  assert.equal(doctor.update.source, 'disabled');
  assert.doesNotMatch(doctorExcerpt, /Ahmet|\\Temp\\|tmp\./i);
});

test('verify and pricing copy name only commands the release has', async () => {
  const manifest = JSON.parse(await source('release/manifest.json'));
  const commands = new Set(manifest.commands);
  const texts = [JSON.stringify(en.verify), JSON.stringify(en.pricing), JSON.stringify(en.plans), Object.values(watchCommands).join('\n')];
  const seen = new Set();
  for (const text of texts) {
    for (const match of text.matchAll(/taksim ([a-z][\w-]*(?: [a-z][\w-]*)*)/g)) {
      const words = match[1].split(' ');
      const known = [1, 2, 3].map((n) => words.slice(0, n).join(' ')).filter((c) => commands.has(c));
      assert.ok(known.length > 0, `taksim ${match[1]} is not a released command`);
      seen.add(known.at(-1));
    }
  }
  for (const command of ['claude', 'doctor', 'dashboard', 'report team', 'routing auto', 'judge enable', 'uninstall', 'report baseline']) {
    assert.ok(seen.has(command), `expected copy to mention taksim ${command}`);
  }
});

test('the verify page does not overclaim what the checks prove', () => {
  assert.match(en.verify.limits.body, /They do not cover your coding client or your providers/);
  assert.match(en.verify.limits.body, /does send data to the destination you chose/);
  assert.match(en.verify.doctor.note, /Taksim reporting on itself/);
  assert.doesNotMatch(JSON.stringify(en.verify), /nothing ever leaves|zero network|never connects/i);
  assert.match(en.verify.network.rows.releases.sent, /TAKSIM_UPDATE_CHECK=0/);
});
