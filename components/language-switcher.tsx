'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { localeNames, localeStorageKey, localePath, localizedRoutes, locales, splitLocale, type Locale } from '@/lib/i18n/config';



function counterpartPath(pathname: string): string {
  const { path } = splitLocale(pathname);
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  return (localizedRoutes as readonly string[]).includes(withSlash) ? withSlash : '/';
}

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const path = counterpartPath(usePathname() ?? '/');
  return (
    <nav className="lang-switch" aria-label={label}>
      {locales.map((l, index) => (
        <Fragment key={l}>
          {index > 0 ? <span aria-hidden="true">·</span> : null}
          <a
            href={localePath(l, path)}
            hrefLang={l}
            lang={l}
            aria-label={localeNames[l].name}
            aria-current={l === locale ? 'true' : undefined}
            onClick={() => {
              try {
                window.localStorage.setItem(localeStorageKey, l);
              } catch {
                // Storage can be unavailable (private mode); the link still works.
              }
            }}
          >
            {localeNames[l].short}
          </a>
        </Fragment>
      ))}
    </nav>
  );
}
