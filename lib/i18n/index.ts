import type { Metadata } from 'next';
import { en, type Dictionary } from './en';
import { tr } from './tr';
import { localePath, locales, siteUrl, type Locale, type localizedRoutes } from './config';

export * from './config';

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function alternates(locale: Locale, route: (typeof localizedRoutes)[number]): Metadata['alternates'] {
  const languages: Record<string, string> = { 'x-default': `${siteUrl}${route}` };
  for (const l of locales) languages[l] = `${siteUrl}${localePath(l, route)}`;
  return { canonical: `${siteUrl}${localePath(locale, route)}`, languages };
}

type PageKey = keyof Dictionary['meta']['pages'];

export function pageMetadata(
  locale: Locale,
  route: (typeof localizedRoutes)[number],
  page?: PageKey,
): Metadata {
  const meta = page ? getDictionary(locale).meta.pages[page] : undefined;
  return {
    ...(meta ? { title: meta.title, description: meta.description } : {}),
    alternates: alternates(locale, route),
  };
}

export function rootMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.siteTitle, template: meta.titleTemplate },
    description: meta.description,
    icons: {
      icon: [{ url: '/taksim-icon-v1.svg', type: 'image/svg+xml' }],
      shortcut: '/taksim-icon-v1.svg',
    },
  };
}
