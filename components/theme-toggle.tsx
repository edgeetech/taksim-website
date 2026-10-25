'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';
import { themeStorageKey } from '@/lib/theme';

const themeChangeEvent = 'taksim:theme-change';
const getSnapshot = () => document.documentElement.dataset.theme === 'dark';
const getServerSnapshot = () => false;

function subscribe(onChange: () => void) {
  const sync = (event: StorageEvent) => {
    if (event.key !== themeStorageKey && event.key !== null) return;
    document.documentElement.dataset.theme =
      event.newValue === 'dark' ? 'dark' : 'light';
    onChange();
  };
  window.addEventListener('storage', sync);
  window.addEventListener(themeChangeEvent, onChange);
  return () => {
    window.removeEventListener('storage', sync);
    window.removeEventListener(themeChangeEvent, onChange);
  };
}

export function ThemeToggle({ label }: { label: string }) {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = () => {
    const next = getSnapshot() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {}
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <button
      className="theme-toggle"
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={label}
      title={label}
      onClick={toggle}
    >
      <Moon className="theme-moon" size={19} aria-hidden="true" />
      <Sun className="theme-sun" size={19} aria-hidden="true" />
    </button>
  );
}
