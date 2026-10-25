import assert from 'node:assert/strict';
import test from 'node:test';
import vm from 'node:vm';
import { themePreferenceScript, themeStorageKey } from '../lib/theme.ts';

function initialTheme(storage) {
  const document = { documentElement: { dataset: {} } };
  vm.runInNewContext(themePreferenceScript, {
    document,
    localStorage: storage,
  });
  return document.documentElement.dataset.theme;
}

test('restores an explicit theme before rendering and defaults to light', () => {
  for (const [stored, expected] of [
    [null, 'light'],
    ['light', 'light'],
    ['dark', 'dark'],
    ['unexpected', 'light'],
  ]) {
    assert.equal(
      initialTheme({
        getItem(key) {
          assert.equal(key, themeStorageKey);
          return stored;
        },
      }),
      expected,
    );
  }
});

test('renders the default theme when storage access is denied', () => {
  assert.equal(
    initialTheme({
      getItem() {
        throw new Error('Storage blocked');
      },
    }),
    'light',
  );
});
