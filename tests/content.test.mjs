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

test('states Solo eligibility by use, not seat count', async () => {
  const pricing = await source('app/pricing/page.tsx');
  assert.match(pricing, /personal use and independent side projects/i);
  assert.match(pricing, /employer, client, or\s+organisation/i);
});

test('keeps the Copilot managed-launch boundary explicit', async () => {
  const docs = await source('app/docs/page.tsx');
  assert.match(docs, /Historical visibility only/);
  assert.match(docs, /<td>Not available<\/td>/);
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
  const llms = await source('public/llms.txt');
  assert.match(docs, /does not rewrite the model/i);
  assert.match(docs, /TAKSIM_ALLOW_SUBSCRIPTION_REWRITE/);
  assert.match(pricing, /Does Taksim rewrite my model on a Claude subscription\?/);
  assert.match(pricing, /model rewrite applies only to API-key traffic/i);
  assert.match(llms, /Authorization: Bearer/);
  assert.match(llms, /TAKSIM_ALLOW_SUBSCRIPTION_REWRITE/);
});

test('has no default hosted routing-advice service and stays local by default', async () => {
  const privacy = await source('app/privacy/page.tsx');
  const llms = await source('public/llms.txt');
  assert.match(privacy, /no default hosted\s+routing-advice service/i);
  assert.match(privacy, /nothing leaves the machine unless you\s+explicitly opt in/i);
  assert.match(llms, /no default hosted routing-advice service/i);
});

test('states current managed Codex support and its native-selection boundary', async () => {
  const home = await source('app/page.tsx');
  const docs = await source('app/docs/page.tsx');
  assert.match(home, /\['Codex', 'Managed \+ history'\]/);
  assert.match(docs, /Responses gateway; native model selection in v0/);
});

test('keeps the desktop docs navigation readable', async () => {
  const styles = await source('app/globals.css');
  const search = await source('components/docs-search.tsx');
  assert.match(styles, /--docs-sidebar: 288px/);
  assert.match(styles, /padding: 30px 24px 48px 32px/);
  assert.match(styles, /overflow-x: hidden/);
  assert.doesNotMatch(search, /href: '#(?:concepts|clients)'/);
});

test('uses governance and delegation positioning, not a proprietary router claim', async () => {
  const home = await source('app/page.tsx');
  assert.match(home, /governance/i);
  assert.match(home, /delegat/i);
  assert.match(home, /provider-native/i);
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

test('lists every observe-only history-import client from one shared source, so pages cannot drift apart', async () => {
  const registry = await source('lib/history-import-clients.ts');
  const home = await source('app/page.tsx');
  const docs = await source('app/docs/page.tsx');
  const quickstart = await source('app/docs/getting-started/page.tsx');
  const llms = await source('public/llms.txt');

  const names = [...registry.matchAll(/name:\s*'([^']+)'/g)].map((m) => m[1]);
  const flags = [...registry.matchAll(/flag:\s*'([^']+)'/g)].map((m) => m[1]);

  // Verified against edgeetech/taksim docs/CLIENTS.md and
  // src/Taksim.Edge/HistoryCommands.cs: every client with a history importer
  // but no managed-launch adapter, including Agent Workstation.
  assert.deepEqual(names, [
    'AgentBoard',
    'Agent Workstation',
    'Devin Desktop',
    'Kilo Code',
    'OpenCode',
    'Pi / Oh My Pi',
  ]);
  assert.deepEqual(flags, [
    'agentboard',
    'agentworkstation',
    'devin_desktop',
    'kilo',
    'opencode',
    'pi',
  ]);

  // Every page renders the shared array instead of hardcoding its own copy.
  for (const page of [home, docs, quickstart]) {
    assert.match(page, /from '@\/lib\/history-import-clients'/);
  }

  // llms.txt is static and cannot import the module, so it is checked
  // against the same ground truth instead.
  for (const name of names) {
    assert.ok(llms.includes(name), `llms.txt is missing history-import client: ${name}`);
  }
  for (const flag of flags) {
    assert.ok(llms.includes(flag), `llms.txt is missing --client flag: ${flag}`);
  }

  // No page may claim a managed launch or routing for an import-only client.
  for (const page of [home, docs, quickstart, llms]) {
    assert.doesNotMatch(page, /taksim agentboard|taksim agentworkstation|taksim opencode|taksim kilo|taksim devin_desktop|taksim pi\b/);
  }
});
