import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

test('keeps the preview trust strip visible and qualifies both programmes', async () => {
  const chrome = await source('components/site-chrome.tsx');
  const trust = await source('components/trust-strip.tsx');
  assert.match(chrome, /<TrustStrip \/>/);
  assert.match(trust, /\.chatgpt\.site/);
  assert.match(trust, /SOC 2 — In progress/);
  assert.match(trust, /ISO 27001 — In progress/);
});

test('uses the selected Taksim brand mark alongside accessible product text', async () => {
  const chrome = await source('components/site-chrome.tsx');
  const layout = await source('app/layout.tsx');
  assert.match(chrome, /src="\/taksim-mark\.png"/);
  assert.match(chrome, /alt=""/);
  assert.match(chrome, /unoptimized/);
  assert.match(chrome, /<strong>Taksim<\/strong>/);
  assert.match(layout, /taksim-icon-v1\.svg/);
});

test('keeps the CLI free for individuals, including at work, and publishes Team pricing', async () => {
  const plans = await source('components/pricing-plans.tsx');
  const pricing = await source('app/pricing/page.tsx');
  assert.match(plans, /for any individual, at home or at work/);
  assert.match(plans, /\$8/);
  assert.match(plans, /\$99 per month minimum/);
  assert.match(pricing, /Can I use the free version at work\?/);
  for (const path of [
    'app/pricing/page.tsx',
    'components/pricing-plans.tsx',
    'app/terms/page.tsx',
    'app/docs/getting-started/page.tsx',
    'app/docs/sign-in/page.tsx',
    'public/llms.txt',
  ]) {
    assert.doesNotMatch(await source(path), /\bSolo\b/, path);
  }
});

test('keeps the Copilot managed-launch boundary explicit', async () => {
  const docs = await source('app/docs/page.tsx');
  const matrix = await source('lib/client-support.ts');
  assert.match(docs, /Usage import from the local Copilot CLI session store/);
  assert.match(docs, /<td>Not available<\/td>/);
  assert.match(matrix, /Usage import from the local Copilot CLI session store/);
  assert.doesNotMatch(matrix, /GitHub usage reports/);
});

test('keeps first-time Windows installation self-contained in the docs', async () => {
  const quickstart = await source('app/docs/getting-started/page.tsx');
  const navigation = await source('app/docs/layout.tsx');
  const search = await source('components/docs-search.tsx');
  assert.match(
    quickstart,
    /https:\/\/github\.com\/edgeetech\/taksim-releases\/releases\/download\/v0\.1\.1\/install-release\.ps1/,
  );
  assert.match(quickstart, /Invoke-WebRequest \\`\r?\n\s+-Uri/);
  assert.match(quickstart, /install-release\.ps1 \\`\r?\n\s+-Repository/);
  assert.doesNotMatch(quickstart, /asozyurt\/taksim/);
  assert.match(quickstart, /Version 0\.1\.1/);
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
  assert.match(quickstart, /Scope Process/);
  assert.doesNotMatch(quickstart, /INSTALLATION\.md/);
  assert.match(navigation, /Install Taksim/);
  assert.match(search, /powershell/);
  assert.match(search, /quickstart/);
  assert.match(search, /claude code codex/);
});

test('keeps sign-in optional and off by default across the site', async () => {
  const quickstart = await source('app/docs/getting-started/page.tsx');
  const docs = await source('app/docs/page.tsx');
  const signIn = await source('app/docs/sign-in/page.tsx');
  const llms = await source('public/llms.txt');
  assert.match(quickstart, /No Taksim account is required/i);
  assert.doesNotMatch(quickstart, /Coming next: Taksim account sign-in/);
  assert.match(docs, /Sign-in is optional and off by default/i);
  assert.doesNotMatch(docs, /Identity v1: account access before command startup/);
  assert.match(signIn, /Identity__Enabled=true/);
  assert.doesNotMatch(signIn, /requires a verified Taksim account/i);
  assert.match(llms, /optional and off by default/i);
});

test('states subscription traffic is observed, not rewritten', async () => {
  const docs = await source('app/docs/page.tsx');
  const pricing = await source('app/pricing/page.tsx');
  const home = await source('app/page.tsx');
  const llms = await source('public/llms.txt');
  assert.match(docs, /does not rewrite the model/i);
  assert.match(pricing, /Does Taksim change my model on a Claude or ChatGPT subscription\?/);
  assert.match(pricing, /only on traffic billed to your own API key/i);
  assert.match(home, /On a subscription plan, Taksim only observes/);
  assert.match(llms, /Authorization: Bearer/);
  for (const text of [docs, pricing, home, llms]) {
    assert.doesNotMatch(text, /TAKSIM_ALLOW_SUBSCRIPTION_REWRITE/);
    assert.doesNotMatch(text, /power users/i);
  }
});

test('has no default hosted routing-advice service and stays local by default', async () => {
  const privacy = await source('app/privacy/page.tsx');
  const llms = await source('public/llms.txt');
  assert.match(privacy, /no default hosted\s+routing-advice service/i);
  assert.match(privacy, /nothing leaves the machine unless you\s+explicitly opt in/i);
  assert.match(llms, /no default hosted routing-advice service/i);
});

test('keeps the client matrix in one config with subscriptions observe-only', async () => {
  const matrix = await source('lib/client-support.ts');
  const docs = await source('app/docs/page.tsx');
  const llms = await source('public/llms.txt');
  const rows = [...matrix.matchAll(/access: '([^']+)',\s*cells: \{[\s\S]*?route: \{ state: '(\w+)'/g)];
  assert.ok(rows.length >= 5);
  for (const [, access, route] of rows) {
    if (/plan/i.test(access)) assert.equal(route, 'no', access);
  }
  assert.match(matrix, /access: 'Anthropic API key'[\s\S]*?route: \{ state: 'yes'/);
  assert.match(docs, /model rewrite only for proven model ids/);
  assert.doesNotMatch(docs, /<th>Devin<\/th>/);
  assert.doesNotMatch(llms, /Devin: managed/i);
});

test('keeps the desktop docs navigation readable', async () => {
  const styles = await source('app/globals.css');
  const search = await source('components/docs-search.tsx');
  assert.match(styles, /--docs-sidebar: 288px/);
  assert.match(styles, /padding: 30px 24px 48px 32px/);
  assert.match(styles, /overflow-x: hidden/);
  assert.doesNotMatch(search, /href: '#(?:concepts|clients)'/);
});

test('positions Taksim as a sufficiency ledger, not a control plane', async () => {
  const home = await source('app/page.tsx');
  const layout = await source('app/layout.tsx');
  const llms = await source('public/llms.txt');
  assert.match(home, /when a cheaper model would have done the job/);
  assert.match(llms, /sufficiency ledger/);
  for (const text of [home, layout, llms]) {
    assert.doesNotMatch(text, /control plane/i);
    assert.doesNotMatch(text, /Selection and delegation governance/);
  }
});

const publicCopy = [
  'app/page.tsx',
  'app/pricing/page.tsx',
  'app/docs/page.tsx',
  'app/docs/getting-started/page.tsx',
  'app/docs/sign-in/page.tsx',
  'app/terms/page.tsx',
  'app/privacy/page.tsx',
  'app/contact/page.tsx',
  'components/pricing-plans.tsx',
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
  const matrix = await source('lib/client-support.ts');
  const llms = await source('public/llms.txt');
  const codexRows = [...matrix.matchAll(/client: 'Codex CLI',[\s\S]*?judge: \{\s*state: '(\w+)'/g)];
  assert.equal(codexRows.length, 2);
  for (const [, state] of codexRows) assert.equal(state, 'no');
  assert.match(matrix, /History import from CODEX_HOME sessions/);
  assert.match(llms, /Judging covers Claude Code turns only/);
});

test('labels subscription usage as quota and team exports as inspectable aliases', async () => {
  const home = await source('app/page.tsx');
  const plans = await source('components/pricing-plans.tsx');
  assert.match(home, /API-equivalent list-price dollars, labelled as quota, not billed/);
  assert.match(home, /One command, one weekly report/);
  assert.match(plans, /Free for any individual, at home or at work/);
  assert.match(plans, /can inspect it before sharing; exports carry repo aliases, never paths/);
});

test('flags the public installer as an early preview until the next release', async () => {
  const quickstart = await source('app/docs/getting-started/page.tsx');
  const llms = await source('public/llms.txt');
  assert.match(quickstart, /is an early preview; judging\s+and reports described here ship in the next release/);
  assert.match(llms, /early preview/);
  assert.match(llms, /Windows only/);
});

test('publishes discovery files for the canonical domain', async () => {
  const robots = await source('app/robots.ts');
  const sitemap = await source('app/sitemap.ts');
  assert.match(robots, /taksim\.edgee\.tech/);
  assert.match(sitemap, /taksim\.edgee\.tech/);
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
