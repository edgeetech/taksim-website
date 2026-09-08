import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

test('keeps the preview trust strip visible and qualifies both programmes', async () => {
  const chrome = await source('components/site-chrome.tsx');
  assert.match(chrome, /<TrustStrip \/>/);
  assert.match(chrome, /SOC 2 — In progress/);
  assert.match(chrome, /ISO 27001 — In progress/);
});

test('states Solo eligibility by use, not seat count', async () => {
  const pricing = await source('app/pricing/page.tsx');
  assert.match(pricing, /personal use and independent side projects/i);
  assert.match(pricing, /employer, client, or\s+organisation/i);
});

test('keeps the Copilot managed-launch boundary explicit', async () => {
  const docs = await source('app/docs/page.tsx');
  const quickstart = await source('app/docs/getting-started/page.tsx');
  assert.match(docs, /Historical visibility only/);
  assert.match(quickstart, /managed launch is not currently supported/i);
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
