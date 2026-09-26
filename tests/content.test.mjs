import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

// English copy lives in the dictionary; page components only hold structure, commands and code samples.
const copyPath = 'lib/i18n/en.ts';

test('keeps the preview trust strip visible and qualifies both programmes', async () => {
  const chrome = await source('components/site-chrome.tsx');
  const trust = await source('components/trust-strip.tsx');
  const copy = await source(copyPath);
  assert.match(chrome, /<TrustStrip t=\{t\.trust\} \/>/);
  assert.match(trust, /\.chatgpt\.site/);
  assert.match(copy, /SOC 2 — In progress/);
  assert.match(copy, /ISO 27001 — In progress/);
});

test('uses the selected Taksim brand mark alongside accessible product text', async () => {
  const chrome = await source('components/site-chrome.tsx');
  const metadata = await source('lib/i18n/index.ts');
  assert.match(chrome, /src="\/taksim-mark\.png"/);
  assert.match(chrome, /alt=""/);
  assert.match(chrome, /unoptimized/);
  assert.match(chrome, /<strong>Taksim<\/strong>/);
  assert.match(metadata, /taksim-icon-v1\.svg/);
});

test('keeps the CLI free for individuals, including at work, and publishes Team pricing', async () => {
  const copy = await source(copyPath);
  assert.match(copy, /for any individual, at home or at work/);
  assert.match(copy, /price: '\$8'/);
  assert.match(copy, /\$99 per month minimum/);
  assert.match(copy, /Can I use the free version at work\?/);
  for (const path of [
    copyPath,
    'lib/i18n/tr.ts',
    'components/pages/terms.tsx',
    'components/pages/getting-started.tsx',
    'components/pages/sign-in.tsx',
    'public/llms.txt',
  ]) {
    assert.doesNotMatch(await source(path), /\bSolo\b/, path);
  }
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
  const copy = await source(copyPath);
  assert.match(
    quickstart,
    /https:\/\/github\.com\/edgeetech\/taksim-releases\/releases\/download\/v0\.2\.0\/install-release\.ps1/,
  );
  assert.match(quickstart, /Invoke-WebRequest \\`\r?\n\s+-Uri/);
  assert.match(quickstart, /install-release\.ps1 \\`\r?\n\s+-Repository/);
  assert.doesNotMatch(quickstart, /asozyurt\/taksim/);
  assert.match(quickstart, /Version 0\.2\.0/);
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
  assert.match(copy, /\['Install Taksim', '\/docs\/getting-started'\]/);
  assert.match(copy, /powershell/);
  assert.match(copy, /quickstart/);
  assert.match(copy, /claude code codex/);
});

test('keeps sign-in optional and off by default across the site', async () => {
  const copy = await source(copyPath);
  const signIn = await source('components/pages/sign-in.tsx');
  const llms = await source('public/llms.txt');
  assert.match(copy, /No Taksim account is required/i);
  assert.doesNotMatch(copy, /Coming next: Taksim account sign-in/);
  assert.match(copy, /Sign-in is optional and off by default/i);
  assert.doesNotMatch(copy, /Identity v1: account access before command startup/);
  assert.match(signIn, /Identity__Enabled=true/);
  assert.doesNotMatch(signIn, /requires a verified Taksim account/i);
  assert.match(llms, /optional and off by default/i);
});

test('states subscription traffic is observed, not rewritten', async () => {
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.match(copy, /does not rewrite the model/i);
  assert.match(copy, /Does Taksim change my model on a Claude or ChatGPT subscription\?/);
  assert.match(copy, /only on traffic billed to your own API key/i);
  assert.match(copy, /On a subscription plan, Taksim only observes/);
  assert.match(llms, /Authorization: Bearer/);
  for (const text of [copy, await source('lib/i18n/tr.ts'), llms]) {
    assert.doesNotMatch(text, /TAKSIM_ALLOW_SUBSCRIPTION_REWRITE/);
    assert.doesNotMatch(text, /power users/i);
  }
});

test('has no default hosted routing-advice service and stays local by default', async () => {
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.match(copy, /no default hosted\s+routing-advice service/i);
  assert.match(copy, /nothing leaves the machine unless you\s+explicitly opt in/i);
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
    if (row.billing === 'plan') assert.equal(row.cells.route, 'no', access);
  }
  const anthropic = clientSupport.find((row) => en.matrix.rows[row.id].access === 'Anthropic API key');
  assert.equal(anthropic?.cells.route, 'yes');
  assert.match(copy, /model rewrite only for proven model ids/);
  assert.doesNotMatch(copy, /\['Devin',/);
  assert.doesNotMatch(llms, /Devin: managed/i);
});

test('keeps the desktop docs navigation readable', async () => {
  const styles = await source('app/globals.css');
  const copy = await source(copyPath);
  assert.match(styles, /--docs-sidebar: 288px/);
  assert.match(styles, /padding: 30px 24px 48px 32px/);
  assert.match(styles, /overflow-x: hidden/);
  assert.doesNotMatch(copy, /href: '#(?:concepts|clients)'/);
});

test('positions Taksim as a sufficiency ledger, not a control plane', async () => {
  const copy = await source(copyPath);
  const llms = await source('public/llms.txt');
  assert.match(copy, /when a cheaper model would have done the job/);
  assert.match(llms, /sufficiency ledger/);
  for (const text of [copy, llms]) {
    assert.doesNotMatch(text, /control plane/i);
    assert.doesNotMatch(text, /Selection and delegation governance/);
  }
});

const publicCopy = [
  'lib/i18n/en.ts',
  'lib/i18n/tr.ts',
  'components/pages/getting-started.tsx',
  'components/pages/sign-in.tsx',
  'components/pages/terms.tsx',
  'components/pages/contact.tsx',
  'components/ledger-stream.tsx',
  'lib/client-support.ts',
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

test('states judging covers Claude Code turns only and Codex judging is not yet supported', async () => {
  const { clientSupport } = await import('../lib/client-support.ts');
  const { en } = await import('../lib/i18n/en.ts');
  const llms = await source('public/llms.txt');
  const codexRows = clientSupport.filter((row) => en.matrix.rows[row.id].client === 'Codex CLI');
  assert.equal(codexRows.length, 2);
  for (const row of codexRows) assert.equal(row.cells.judge, 'no');
  assert.match(en.matrix.rows.codexPlan.observe, /History import from CODEX_HOME sessions/);
  assert.match(llms, /Judging covers Claude Code turns only/);
});

test('labels subscription usage as quota and team exports as inspectable aliases', async () => {
  const copy = await source(copyPath);
  assert.match(copy, /API-equivalent list-price dollars, labelled as quota, not billed/);
  assert.match(copy, /One command, one weekly report/);
  assert.match(copy, /Free for any individual, at home or at work/);
  assert.match(copy, /can inspect it before sharing; exports carry repo aliases, never paths/);
});

test('points every install and release reference at v0.2.0', async () => {
  const quickstart = await source('components/pages/getting-started.tsx');
  const llms = await source('public/llms.txt');
  assert.match(quickstart, /releases\/download\/v0\.2\.0\/install-release\.ps1/);
  assert.match(llms, /Current release: v0\.2\.0/);
  assert.match(llms, /Windows only/);
  for (const path of publicCopy) {
    const text = await source(path);
    assert.doesNotMatch(text, /0\.1\.1|early preview|source\/development build/i, path);
  }
});

test('publishes discovery files for the canonical domain', async () => {
  const robots = await source('app/robots.ts');
  const config = await source('lib/i18n/config.ts');
  const sitemap = await source('app/sitemap.ts');
  assert.match(robots, /taksim\.edgee\.tech/);
  assert.match(config, /siteUrl = 'https:\/\/taksim\.edgee\.tech'/);
  assert.match(sitemap, /siteUrl/);
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
