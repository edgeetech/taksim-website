// Locale config with no dictionary imports, safe for client components.

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, { short: string; name: string }> = {
  en: { short: 'EN', name: 'English' },
  tr: { short: 'TR', name: 'Türkçe' },
};

export const siteUrl = 'https://taksim.edgee.tech';

// Every route that exists in every locale. Used for the switcher, hreflang and the stored-preference redirect.
export const localizedRoutes = [
  '/',
  '/pricing/',
  '/docs/',
  '/docs/getting-started/',
  '/docs/sign-in/',
  '/privacy/',
  '/terms/',
  '/contact/',
] as const;

/** Prefix an internal path with the locale. Leaves external links, mailto and in-page anchors untouched. */
export function localePath(locale: Locale, path: string): string {
  if (!path.startsWith('/')) return path;
  if (locale === defaultLocale) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
}

/** Strip a locale prefix from a pathname, returning the locale and the English path. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  for (const locale of locales) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return { locale, path: pathname.slice(locale.length + 1) || '/' };
    }
  }
  return { locale: defaultLocale, path: pathname || '/' };
}

export const localeStorageKey = 'taksim-locale';

/**
 * Inline script: if the visitor chose a language with the footer switcher on an earlier visit,
 * move them to the same page in that language before first paint. No stored choice means no redirect.
 */
export const localePreferenceScript = `(function(){try{var s=localStorage.getItem(${JSON.stringify(localeStorageKey)});var l=document.documentElement.lang;var L=${JSON.stringify(locales)};var d=${JSON.stringify(defaultLocale)};if(!s||s===l||L.indexOf(s)<0)return;var p=location.pathname;if(l!==d)p=p.slice(l.length+1)||'/';if(p.charAt(p.length-1)!=='/')p+='/';if(${JSON.stringify(localizedRoutes)}.indexOf(p)<0)return;location.replace((s===d?p:'/'+s+p)+location.search+location.hash);}catch(e){}})();`;
