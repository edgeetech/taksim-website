import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import { en } from '../lib/i18n/en.ts';
import { tr } from '../lib/i18n/tr.ts';

async function source(path) {
  return readFile(new URL(`../${path}`, import.meta.url), 'utf8');
}

function* pairs(a, b, path = '') {
  if (typeof a === 'string') {
    yield [path, a, b];
    return;
  }
  if (Array.isArray(a)) {
    assert.ok(Array.isArray(b), `${path} should be an array in tr`);
    assert.equal(b.length, a.length, `${path} should have ${a.length} items in tr`);
    for (let i = 0; i < a.length; i++) yield* pairs(a[i], b[i], `${path}[${i}]`);
    return;
  }
  assert.equal(typeof b, 'object', `${path} should be an object in tr`);
  for (const key of Object.keys(a)) {
    assert.ok(key in b, `${path}.${key} is missing in tr`);
    yield* pairs(a[key], b[key], `${path}.${key}`);
  }
  for (const key of Object.keys(b)) assert.ok(key in a, `${path}.${key} exists in tr but not in en`);
}

const all = [...pairs(en, tr)];

test('every English key has a Turkish value', () => {
  assert.ok(all.length > 300, `expected a full dictionary, got ${all.length} strings`);
  for (const [path, a, b] of all) {
    assert.equal(typeof b, 'string', `${path} should be a string in tr`);
    if (a === '') assert.equal(b, '', `${path} is intentionally empty in en`);
    else assert.notEqual(b.trim(), '', `${path} is empty in tr`);
  }
});

test('Turkish keeps commands, code, links and numbers exactly as in English', () => {
  const code = (s) => [...s.matchAll(/`([^`]+)`/g)].map((m) => m[1]).sort((x, y) => x.localeCompare(y));
  const links = (s) => [...s.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]).sort((x, y) => x.localeCompare(y));
  const commands = (s) => [...s.matchAll(/taksim [a-z][\w-]*(?: [a-z][\w-]*)*(?: --[\w-]+)*/g)].map((m) => m[0]);
  const numbers = (s) => (s.match(/\d+(?:[.,]\d+)*/g) ?? []).sort((x, y) => x.localeCompare(y));
  for (const [path, a, b] of all) {
    assert.deepEqual(code(b), code(a), `${path}: inline code must match`);
    assert.deepEqual(links(b), links(a), `${path}: link targets must match`);
    for (const command of commands(a)) assert.ok(b.includes(command.split(' ').slice(0, 2).join(' ')), `${path}: ${command}`);
    assert.deepEqual(numbers(b), numbers(a), `${path}: numbers and prices must match`);
  }
});

test('Turkish leaves established English technical terms untranslated', async () => {
  const text = await source('lib/i18n/tr.ts');
  for (const term of [
    'API key',
    'cache',
    'hook',
    'prompt',
    'token',
    'repo',
    'judge',
    'consensus',
    'shadow policy',
    'status line',
    'gateway',
    'proxy',
    'Claude Code',
    'Codex',
    'Copilot',
    'Opus',
    'Sonnet',
    'Haiku',
    'Fable',
  ]) {
    assert.ok(text.toLowerCase().includes(term.toLowerCase()), `expected "${term}" to stay in English`);
  }
});

test('the language switcher lives in the footer, not the navbar', async () => {
  const chrome = await source('components/site-chrome.tsx');
  const header = chrome.slice(chrome.indexOf('export function Header'), chrome.indexOf('export function Footer'));
  const footer = chrome.slice(chrome.indexOf('export function Footer'));
  assert.doesNotMatch(header, /LanguageSwitcher/);
  assert.match(footer, /<LanguageSwitcher locale=\{locale\} label=\{t\.language\.label\} \/>/);

  const switcher = await source('components/language-switcher.tsx');
  assert.match(switcher, /aria-label=\{label\}/);
  assert.match(switcher, /aria-current=/);
  assert.match(switcher, /hrefLang=\{l\}/);
  assert.match(switcher, /localStorage\.setItem/);
  assert.match(en.chrome.language.label, /Language/);
  assert.match(tr.chrome.language.label, /Dil/);
});

test('each locale root layout sets <html lang> and localized metadata', async () => {
  const shell = await source('components/root-shell.tsx');
  assert.match(shell, /<html lang=\{locale\}>/);
  assert.match(await source('app/(en)/layout.tsx'), /<RootShell locale="en">/);
  assert.match(await source('app/tr/layout.tsx'), /<RootShell locale="tr">/);
  assert.match(await source('app/tr/layout.tsx'), /rootMetadata\('tr'\)/);
  const i18n = await source('lib/i18n/index.ts');
  assert.match(i18n, /languages\[l\]/);
  assert.match(i18n, /'x-default'/);
});

test('defaults to English and only redirects after an explicit choice', async () => {
  const config = await source('lib/i18n/config.ts');
  assert.match(config, /defaultLocale: Locale = 'en'/);
  assert.doesNotMatch(config, /navigator\.language/);
  assert.match(config, /if\(!s\|\|s===l/);
});

test('every localized route exists in every locale', async () => {
  const { localizedRoutes } = await import('../lib/i18n/config.ts');
  for (const route of localizedRoutes) {
    for (const base of ['app/(en)', 'app/tr']) {
      const path = `${base}${route}page.tsx`;
      await access(new URL(`../${path}`, import.meta.url));
      const page = await source(path);
      assert.match(page, /pageMetadata\(/, `${path} should declare hreflang alternates`);
    }
  }
});
