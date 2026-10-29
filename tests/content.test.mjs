import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

// English copy lives in the dictionary; page components only hold structure, commands and code samples.
const copyPath = 'lib/i18n/en.ts';

test('uses the selected Taksim brand mark alongside accessible product text', async () => {
  const chrome = await source('components/site-chrome.tsx');
  const metadata = await source('lib/i18n/index.ts');
  assert.match(chrome, /src="\/taksim-mark\.png"/);
  assert.match(chrome, /alt=""/);
  assert.match(chrome, /unoptimized/);
  assert.match(chrome, /<strong>Taksim<\/strong>/);
  assert.match(metadata, /taksim-icon-v1\.svg/);
});

test('keeps the CLI free for individuals, including at work, and publishes Free, Pro and Team pricing', async () => {
  const copy = await source(copyPath);
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  assert.match(copy, /for any individual, at home or at work/);
  assert.match(copy, /Can I use the free version at work\?/);
  for (const dict of [en, tr]) {
    assert.equal(dict.plans.pro.price, '$12');
    assert.equal(dict.plans.team.price, '$18');
    assert.match(dict.plans.team.sub, /\$90/);
  }
  assert.match(en.plans.team.sub, /5-developer minimum/);
  assert.match(tr.plans.team.sub, /En az 5 geliştirici/);
  assert.equal(en.plans.pro.badge, 'First 20 customers: 50% off for the first 12 months');
  assert.equal(tr.plans.pro.badge, 'İlk 20 müşteriye ilk 12 ay için %50 indirim');
  assert.equal(en.plans.pro.cta, 'Reserve a founding seat');
  assert.equal(en.plans.team.cta, 'Start a team pilot');
  assert.equal(en.plans.billingNote, 'Billing opens when checkout is live; reserving costs nothing.');
  assert.doesNotMatch(JSON.stringify(en.plans), /for life|lifetime/i);
  assert.doesNotMatch(JSON.stringify(tr.plans), /ömür boyu/i);
  for (const path of [
    copyPath,
    'lib/i18n/tr.ts',
    'components/pages/terms.tsx',
    'components/pages/getting-started.tsx',
    'public/llms.txt',
  ]) {
    assert.doesNotMatch(await source(path), /\bSolo\b/, path);
  }
});

test('keeps the retired Team price and plan wording out of every page and the llms file', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const llms = await source('public/llms.txt');
  const retired = [/\$8\b/, /\$99\b/, /20% off with annual billing/, /%20 indirim/, /informational; nothing is blocked/, /hiçbir şey engellenmez/];
  const texts = {
    'lib/i18n/en.ts': await source(copyPath),
    'lib/i18n/tr.ts': await source('lib/i18n/tr.ts'),
    'public/llms.txt': llms,
    evaluatedEn: JSON.stringify(en),
    evaluatedTr: JSON.stringify(tr),
  };
  for (const path of ['components/pages/terms.tsx', 'components/pricing-plans.tsx', 'release/llms.template.txt']) {
    texts[path] = await source(path);
  }
  for (const [path, text] of Object.entries(texts)) {
    for (const pattern of retired) assert.doesNotMatch(text, pattern, path);
  }
  assert.match(llms, /\$12 per month/);
  assert.match(llms, /\$18 per active developer per month/);
  assert.match(llms, /5-developer minimum \(\$90 per month\)/);
});

test('takes plan prices and the feature split from one constants file', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const { entitlements, freeFeatures, prices, foundingOffer } = await import('../lib/plans.ts');
  assert.deepEqual(entitlements.pro, ['budget.enforce', 'digest.delivery', 'report.summaryHtml', 'audit.native', 'support.priority']);
  assert.deepEqual(entitlements.team, ['report.team', 'budget.team', 'policy.org']);
  // Routing and the proof export are free; only enforcement, automation and team features are paid.
  for (const id of ['free.mode', 'free.routingAuto', 'free.routingSubscription', 'free.proof']) assert.ok(freeFeatures.includes(id), id);
  assert.ok(![...entitlements.pro, ...entitlements.team].some((id) => id.startsWith('routing.')));
  assert.deepEqual([prices.pro, prices.team, prices.teamMinDevelopers, prices.teamMinMonthly], [12, 18, 5, 90]);
  assert.equal(prices.teamMinDevelopers * prices.team, prices.teamMinMonthly);
  assert.deepEqual([foundingOffer.customers, foundingOffer.discountPercent, foundingOffer.months], [20, 50, 12]);
  for (const dict of [en, tr]) {
    assert.equal(dict.plans.developer.features.length, freeFeatures.length);
    assert.equal(dict.plans.pro.features.length, entitlements.pro.length);
    assert.equal(dict.plans.team.features.length, entitlements.team.length);
  }
  for (const path of ['lib/i18n/en.ts', 'lib/i18n/tr.ts']) assert.match(await source(path), /from '\.\.\/plans\.ts'/, path);
  const counted = en.pricing.faq.find((item) => item.q === 'How is an active developer counted?');
  assert.ok(counted?.a.includes(`${prices.teamMinDevelopers}-developer minimum ($${prices.teamMinMonthly} per month)`));
  assert.ok(en.pricing.faq.some((item) => item.q === 'What happens when a paid plan lapses?'));
  const buy = en.pricing.faq.find((item) => item.q === 'Can I buy a plan today?');
  assert.ok(buy?.a.includes(`${foundingOffer.discountPercent}% off for the first ${foundingOffer.months} months`));
  assert.equal(tr.pricing.faq.length, en.pricing.faq.length);
});

test('offers Pro, Team and security intents on the contact form, prefilled from the URL', async () => {
  const form = await source('components/contact-form.tsx');
  const plans = await source('components/pricing-plans.tsx');
  const { en } = await import('../lib/i18n/en.ts');
  assert.match(form, /URLSearchParams\(window\.location\.search\)\.get\('intent'\)/);
  assert.deepEqual(Object.values(en.contact.form.intents), ['Pro founding seat', 'Team pilot', 'Security question']);
  assert.deepEqual(Object.keys(en.contact.form.intents), ['pro', 'team', 'security']);
  for (const option of ['<option>1</option>', '2–4', '5–10', '11–50', '50+', '$500–2k', '$2–10k', '$10k+']) {
    assert.ok(form.includes(option), option);
  }
  assert.doesNotMatch(form, /\$100k|\$50k/);
  assert.match(form, /Taksim: \$\{intentLabel\}/);
  assert.match(form, /info@edgee\.tech/);
  assert.equal(en.contact.form.copy, 'Copy address');
  assert.match(plans, /\/contact\?intent=pro/);
  assert.match(plans, /\/contact\?intent=team/);
});

test('keeps the Copilot managed-launch boundary explicit', async () => {
  const copy = await source(copyPath);
  assert.match(copy, /Usage import from the local Copilot CLI session store; startup model selection only/);
  assert.match(copy, /'Not available',/);
  assert.match(copy, /observe: 'Usage import from the local Copilot CLI session store\.'/);
  assert.doesNotMatch(copy, /GitHub usage reports/);
});

test('keeps first-time Windows installation self-contained in the docs', async () => {
  const quickstart = await source('components/pages/getting-started.tsx');
  const easy = await source('components/pages/quick-start.tsx');
  const copy = await source(copyPath);
  for (const page of [quickstart, easy]) {
    assert.match(page, /release\.installCommand/);
    assert.doesNotMatch(page, /asozyurt\/taksim|install-release\.ps1|v\d+\.\d+\.\d+/);
  }
  assert.match(easy, /taksim setup/);
  assert.match(easy, /taksim dashboard/);
  assert.match(easy, /taksim update --apply/);
  assert.match(copy, /More info\*\*, then \*\*Run anyway/);
  assert.match(copy, /Unblock-File/);
  assert.match(copy, /taksim uninstall --dry-run/);
  assert.match(copy, /taksim uninstall --purge-data/);
  assert.match(copy, /Your local ledger and reports are preserved/);
  assert.match(copy, /\['Easy install', '\/docs\/quick-start'\]/);
  assert.match(quickstart, /history import --client opencode/);
  assert.match(quickstart, /history import --client devin_desktop/);
  assert.match(quickstart, /taksim version/);
  assert.match(quickstart, /taksim doctor/);
  assert.match(quickstart, /taksim install status/);
  assert.match(quickstart, /taksim claude/);
  assert.match(quickstart, /taksim codex/);
  assert.match(quickstart, /taksim verification explain-latest/);
  assert.match(quickstart, /taksim history import/);
  assert.match(quickstart, /history import --client codex/);
  assert.match(quickstart, /history import --client devin/);
  assert.match(quickstart, /history import --client github_copilot/);
  assert.match(copy, /Scope Process/);
  assert.doesNotMatch(quickstart + copy, /INSTALLATION\.md/);
  assert.match(copy, /\['Full install guide', '\/docs\/getting-started'\]/);
  assert.match(copy, /powershell/);
  assert.match(copy, /quickstart/);
  assert.match(copy, /claude code codex/);
});

test('has no Taksim account, sign-in or hosted Taksim service anywhere on the site', async () => {
  const { access } = await import('node:fs/promises');
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.match(copy, /No Taksim account is required/i);
  assert.match(llms, /no Taksim account, sign-in or server/i);
  for (const path of ['lib/i18n/en.ts', 'lib/i18n/tr.ts', 'lib/i18n/config.ts', 'release/llms.template.txt']) {
    const text = await source(path);
    assert.doesNotMatch(text, /Identity__|\/docs\/sign-in|taksim log(?:in|out)|hosted (?:sign-in|features?)|Taksim-hosted/i, path);
  }
  await assert.rejects(access(new URL('../components/pages/sign-in.tsx', import.meta.url)));
});

test('states subscription traffic is observed by default and Claude routing is opt-in', async () => {
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.match(copy, /does not rewrite the model/i);
  assert.match(copy, /Does Taksim change my model on a Claude or ChatGPT subscription\?/);
  assert.match(copy, /routing subscription on/);
  assert.match(copy, /Claude models only/);
  assert.match(llms, /forwards `Authorization` unchanged and never reads, copies or logs it/);
  for (const text of [copy, await source('lib/i18n/tr.ts'), llms]) {
    assert.doesNotMatch(text, /TAKSIM_ALLOW_SUBSCRIPTION_REWRITE/);
    assert.doesNotMatch(text, /power users/i);
  }
});

test('has no default hosted routing-advice service and stays local by default', async () => {
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.match(copy, /no default hosted\s+routing-advice service/i);
  assert.match(copy, /Update and pricing checks use external network services/);
  assert.match(copy, /provider receives truncated excerpts/);
  assert.doesNotMatch(copy, /nothing leaves the machine unless/i);
  assert.match(llms, /no default hosted routing-advice service/i);
});

test('keeps the client matrix in one config with subscriptions observe-only', async () => {
  const { clientSupport } = await import('../lib/client-support.ts');
  const { en } = await import('../lib/i18n/en.ts');
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.ok(clientSupport.length >= 5);
  for (const row of clientSupport) {
    const access = en.matrix.rows[row.id].access;
    assert.equal(row.billing === 'plan', /plan/i.test(access), access);
    if (row.billing === 'plan' && row.id !== 'claudeCodePlan') assert.equal(row.cells.route, 'no', access);
  }
  const anthropic = clientSupport.find((row) => en.matrix.rows[row.id].access === 'Anthropic API key');
  assert.equal(anthropic?.cells.route, 'yes');
  assert.match(copy, /model rewrite only for proven model ids/);
  assert.doesNotMatch(copy, /\['Devin',/);
  assert.doesNotMatch(llms, /Devin: managed/i);
});

test('lets keyboard users scroll the client matrix', async () => {
  const matrix = await source('components/client-matrix.tsx');
  // A labelled <section> has the implicit region role; an explicit role would be redundant.
  assert.match(matrix, /<section className="matrix-wrap" tabIndex=\{0\} aria-label=\{t\.regionLabel\}>/);
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  assert.ok(en.matrix.regionLabel && tr.matrix.regionLabel);
});

test('keeps the desktop docs navigation readable', async () => {
  const styles = await source('app/globals.css');
  const copy = await source(copyPath);
  assert.match(styles, /--docs-sidebar: 288px/);
  assert.match(styles, /padding: 30px 24px 48px 32px/);
  assert.match(styles, /overflow-x: hidden/);
  assert.doesNotMatch(copy, /href: '#(?:concepts|clients)'/);
});

test('positions Taksim as a control plane whose ledger proves the decisions', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.equal(en.home.hero.title, 'Spend control and receipts for Claude Code.');
  assert.match(en.home.hero.lede, /steps down instead of cutting off at a budget cap/);
  assert.match(en.home.hero.lede, /no Taksim server exists/);
  assert.match(copy, /when a cheaper model would have done the job/);
  assert.match(llms, /control plane for AI coding agents, built around a sufficiency ledger/);
  for (const text of [copy, llms]) assert.doesNotMatch(text, /Selection and delegation governance/);
});

test('makes Get Taksim free the primary CTA and sends it to the easy install', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  assert.equal(en.chrome.install, 'Get Taksim free');
  assert.equal(en.plans.developer.cta, en.chrome.install);
  assert.match(tr.chrome.install, /ücretsiz/);
  assert.equal(tr.plans.developer.cta, tr.chrome.install);
  for (const path of ['components/site-chrome.tsx', 'components/pages/home.tsx', 'components/pricing-plans.tsx']) {
    const text = await source(path);
    assert.match(
      text,
      /href=\{(?:href|localePath)\((?:locale, )?'\/docs\/quick-start'\)\}\s+data-funnel=\{funnel\.getFree\}/,
      path,
    );
  }
  assert.match(en.home.hero.trust, /No Taksim account/);
});

test('shows a first-value path built only from released commands', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const manifest = JSON.parse(await source('release/manifest.json'));
  const commands = new Set(manifest.commands);
  const steps = en.howItWorks.firstValue.steps;
  assert.equal(steps.length, 6);
  for (const step of steps.filter((s) => s.detail)) {
    const words = step.detail.replace(/^taksim /, '').split(' ').filter((w) => !w.startsWith('--'));
    assert.ok(commands.has(words.join(' ')) || commands.has(words[0]), step.detail);
  }
  assert.match(steps[5].body, /add a second judge/);
  assert.match(steps[5].body, /lone verdict stays single and is never counted/);
  assert.deepEqual(
    steps.map((s) => s.detail).filter(Boolean),
    ['taksim setup', 'taksim history import', 'taksim dashboard', 'taksim report weekly', 'taksim judge enable --in-session'],
  );
  for (const step of en.home.how.steps) {
    const words = step.detail.replace(/^taksim /, '').split(' ').filter((w) => !w.startsWith('--'));
    assert.ok(commands.has(words.join(' ')) || commands.has(words[0]), step.detail);
  }
});

test('describes the subscription boundary as current release behaviour, not a permanent rule', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  for (const path of [copyPath, 'lib/i18n/tr.ts', 'public/llms.txt', 'components/pages/terms.tsx']) {
    const text = await source(path);
    assert.doesNotMatch(text, /never sits between|used only by Claude Code itself|never passes through Taksim/i, path);
    assert.doesNotMatch(text, /asla girmez/i, path);
  }
  assert.match(en.matrix.footnote, /describes the current release/);
  for (const text of [en.matrix.footnote, en.docs.subscriptions.body3, en.home.modes.futureBody]) {
    assert.match(text, /not an endorsement by Anthropic|does not imply Anthropic endorsement/);
    assert.doesNotMatch(text, /bars third-party developers/);
  }
  assert.match(en.docs.subscriptions.title, /opt-in/);
  assert.match(en.docs.subscriptions.body, /Only `ANTHROPIC_BASE_URL` is set/);
  assert.match(en.docs.subscriptions.body, /never reads, copies or logs it/);
  assert.match(en.docs.subscriptions.body2, /reported as plan quota/);
  assert.match(en.docs.subscriptions.body3, /restricts third-party intermediation of Claude.ai credentials/);
  assert.match(await source('components/pages/terms.tsx'), /routing is opt-in and off by\s+default/);
});

test('separates subscription, API-key and private economics without claiming private routing', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const [subscription, apiKey, privateMode] = en.home.modes.items;
  assert.match(subscription.economics, /labelled as quota, never as billed dollars/);
  assert.match(subscription.current, /Claude-only model switching/);
  assert.match(apiKey.economics, /billed dollars per token/);
  assert.match(privateMode.current, /^Not a routing target in the current release/);
  assert.match(await source('components/pages/pricing.tsx'), /<EconomicModes t=\{dict\.home\.modes\} \/>/);
});

test('marks funnel steps without loading any analytics', async () => {
  const { funnel } = await import('../lib/funnel.ts');
  assert.deepEqual(Object.keys(funnel).sort(), ['docsNext', 'getFree', 'installCopy', 'installGuide', 'proReserve', 'seeHow', 'teamContact']);
  const files = [
    'components/site-chrome.tsx',
    'components/pages/home.tsx',
    'components/pricing-plans.tsx',
    'components/pages/quick-start.tsx',
    'components/copy-command.tsx',
    'components/root-shell.tsx',
  ];
  for (const path of files) {
    assert.doesNotMatch(await source(path), /gtag|googletagmanager|plausible|posthog|segment\.com|sendBeacon|analytics.js/i, path);
  }
  assert.match(await source('components/copy-command.tsx'), /data-funnel=\{funnelStep\}/);
  assert.match(await source('lib/i18n/en.ts'), /does not load a third-party analytics tracker/);
});

test('shows the internal pilot benchmark high on the home page with exact, qualified figures', async () => {
  const { en } = await import('../lib/i18n/en.ts');
  const { tr } = await import('../lib/i18n/tr.ts');
  const home = await source('components/pages/home.tsx');
  const pilot = await source('components/pilot-benchmark.tsx');
  assert.ok(
    home.includes(
      '<PilotBenchmark t={t.pilot} locale={locale} version={release.version} />',
    ),
  );
  assert.ok(
    home.indexOf('values-grid') < home.indexOf('<PilotBenchmark'),
    'after the values band',
  );
  assert.ok(
    home.indexOf('<PilotBenchmark') < home.indexOf('id="how-it-works"'),
    'before how it works',
  );
  const flat = pilot.replace(/\s+/g, ' ');
  assert.ok(flat.includes('const userReplyRelease = [0, 3, 11];'));
  // The figures live in data/benchmark and are derived by lib/benchmark/report.ts (tests/benchmark.test.mjs).
  assert.doesNotMatch(pilot, /17\.63|runsPerArm = 58|costSaving = 74/);
  const { report, copyTokens, fillKnown } = await import('../lib/benchmark/report.ts');
  const labelsOf = (dict) => ({
    notMeasured: dict.home.pilot.notMeasured,
    undefinedPerAccepted: dict.home.pilot.undefinedPerAccepted,
  });
  const enPilot = fillKnown(en.home.pilot, copyTokens(report, 'en', labelsOf(en)));
  const trPilot = fillKnown(tr.home.pilot, copyTokens(report, 'tr', labelsOf(tr)));
  assert.equal(enPilot.title, '74% lower cost. More tasks accepted.');
  assert.match(trPilot.title, /^%74 daha düşük maliyet/);
  assert.match(
    en.home.pilot.footnote,
    /Internal pilot, not an independent benchmark/,
  );
  assert.match(
    tr.home.pilot.footnote,
    /İç pilot; bağımsız bir benchmark değildir/,
  );
  assert.match(en.home.pilot.footnote, /plan quota, not an invoice/);
  assert.match(en.home.pilot.footnote, /cold start, with no prior outcome history/);
  assert.doesNotMatch(en.home.pilot.footnote, /still to run/);
  for (const dict of [en, tr]) assert.ok(dict.home.pilot.coldStart);
  assert.equal(enPilot.warm.title, 'Corrected tasks: 4 failures → 0');
  assert.equal(trPilot.warm.title, 'Düzeltilen görevler: 4 hata → 0');
  // Learning keeps corrected tasks on the stronger model; it must not read as closing the overall gap.
  assert.match(enPilot.warm.overall, /^Overall still 54\/58/);
  assert.match(trPilot.warm.overall, /^Genel sonuç yine 54\/58/);
  assert.ok(enPilot.warm.cost.includes('$4.98 (cold $4.65), still 72% below always-Opus'));
  const enBenchmark = fillKnown(en.benchmark, copyTokens(report, 'en', labelsOf(en)));
  const warmPage = enBenchmark.sections.map((s) => s.body).join(' ');
  assert.match(warmPage, /stayed at 54 of 58 accepted/);
  assert.match(warmPage, /overall gap does not close by itself/);
  assert.match(warmPage, /internal pilot, not an independent benchmark/);
  for (const dict of [en, tr]) {
    const rendered = dict === en ? enPilot : trPilot;
    const text = JSON.stringify(rendered.warm) + JSON.stringify(dict.benchmark);
    assert.doesNotMatch(text, /58\/58|100%|%100|closes the gap|gap closes|fark kapanır/i);
  }
  assert.match(en.home.pilot.note, /^Internal pilot, not an independent benchmark/);
  assert.match(tr.home.pilot.note, /^İç pilot; bağımsız bir benchmark değildir/);
  assert.ok(pilot.includes('{t.note}'), 'the pilot label stays visible on the home page');
  assert.ok(pilot.includes("localePath(locale, '/benchmark')"), 'links to the method page');
  assert.match(en.home.pilot.footnote, /only switches between Claude models/);
  assert.equal(en.home.pilot.learn.steps.length, 4);
  for (const dict of [en, tr])
    assert.ok(
      dict.home.pilot.case.reason.includes('`OUTCOME_LEARNED_KEEP_START`'),
    );
  for (const dict of [en, tr]) {
    const text = JSON.stringify(dict.home.pilot);
    assert.doesNotMatch(
      text,
      /more accurate|daha doğru|success rate|başarı oranı|GPT|Gemini/i,
    );
  }
});

const publicCopy = [
  'lib/i18n/en.ts',
  'lib/i18n/tr.ts',
  'components/pages/getting-started.tsx',
  'components/pages/quick-start.tsx',
  'components/pages/next-steps.tsx',
  'components/pages/home.tsx',
  'components/pages/docs-home.tsx',
  'components/pages/terms.tsx',
  'components/pages/contact.tsx',
  'components/pages/compare.tsx',
  'components/pilot-benchmark.tsx',
  'lib/client-support.ts',
  'release/llms.template.txt',
  'public/llms.txt',
];

test('makes no claim the current product does not back', async () => {
  for (const path of publicCopy) {
    const text = await source(path);
    assert.doesNotMatch(text, /open[ -]source/i, path);
    assert.doesNotMatch(text, /notify hook/i, path);
    assert.doesNotMatch(text, /baseline readout|Book a readout|\$750/i, path);
    assert.doesNotMatch(text, /window usage/i, path);
    assert.doesNotMatch(text, /consent/i, path);
    assert.doesNotMatch(text, /every Monday|on Monday/i, path);
    assert.doesNotMatch(text, /usage reports/i, path);
    assert.doesNotMatch(text, /licen[cs]e (?:key|boundar)/i, path);
  }
});

test('states which clients are judged and that Copilot and Devin CLI are not', async () => {
  const { clientSupport } = await import('../lib/client-support.ts');
  const { en } = await import('../lib/i18n/en.ts');
  const llms = await source('public/llms.txt');
  const judged = (id) => clientSupport.find((row) => row.id === id)?.cells.judge;
  for (const id of ['claudeCodePlan', 'codexPlan', 'codexApi', 'devinDesktop', 'openCodeKilo', 'pi']) assert.equal(judged(id), 'yes', id);
  for (const id of ['copilotPlan', 'devinCli']) assert.equal(judged(id), 'no', id);
  assert.match(en.matrix.rows.codexPlan.observe, /History import from CODEX_HOME sessions/);
  assert.match(llms, /GitHub Copilot CLI: usage import .* Not judged/);
  assert.doesNotMatch(llms + (await source(copyPath)), /Judging covers Claude Code turns only/);
});

test('labels subscription usage as quota and team exports as inspectable aliases', async () => {
  const copy = await source(copyPath);
  assert.match(copy, /API-equivalent list-price dollars, labelled as quota, not billed/);
  assert.match(copy, /One command, one weekly report/);
  assert.match(copy, /Free for any individual, at home or at work/);
  assert.match(copy, /can inspect it before sharing; exports carry repo aliases, never paths/);
});

test('takes the release version and install command from the release manifest', async () => {
  const manifest = JSON.parse(await source('release/manifest.json'));
  const llms = await source('public/llms.txt');
  assert.match(llms, new RegExp(`Current release: ${manifest.tag.replaceAll('.', '\\.')}\\.`));
  assert.ok(llms.includes(manifest.install.oneLine));
  assert.match(llms, manifest.platforms.includes('osx-arm64') ? /Windows x64 and macOS/ : /Windows x64 only/);
  for (const path of publicCopy) {
    const text = await source(path);
    assert.doesNotMatch(text, /0\.1\.1|early preview|source\/development build/i, path);
  }
});

test('publishes discovery files for the canonical domain', async () => {
  // Static files in public/, because the static export does not emit app/sitemap.ts or app/robots.ts.
  const robots = await source('public/robots.txt');
  const config = await source('lib/i18n/config.ts');
  const sitemap = await source('public/sitemap.xml');
  const { localizedRoutes, locales } = await import('../lib/i18n/config.ts');
  assert.match(config, /siteUrl = 'https:\/\/taksim\.edgee\.tech'/);
  assert.match(robots, /^Sitemap: https:\/\/taksim\.edgee\.tech\/sitemap\.xml$/m);
  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  for (const route of localizedRoutes) {
    assert.ok(sitemap.includes(`<loc>https://taksim.edgee.tech${route}</loc>`), route);
    assert.ok(sitemap.includes(`<loc>https://taksim.edgee.tech/tr${route}</loc>`), `/tr${route}`);
  }
  assert.equal(sitemap.match(/<url>/g).length, localizedRoutes.length * locales.length);
});

test('exports a platform-independent static site for GitHub Pages', async () => {
  const config = await source('next.config.ts');
  const workflow = await source('.github/workflows/pages.yml');
  const vite = await source('vite.config.ts');
  assert.match(config, /output: 'export'/);
  assert.match(workflow, /path: dist\/client/);
  assert.match(workflow, /retention-days: 1/);
  assert.doesNotMatch(vite, /openai|cloudflare|wrangler/i);
});
