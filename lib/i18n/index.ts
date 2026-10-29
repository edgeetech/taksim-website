import type { Metadata } from 'next';
import { copyTokens, fillKnown, report } from '../benchmark/report.ts';
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

const ogLocale: Record<Locale, string> = { en: 'en_US', tr: 'tr_TR' };

// Open Graph and Twitter cards. A page that sets openGraph replaces the layout's whole object, so every
// page builds the complete set, including the 1200x630 image.
function social(locale: Locale, title: string, description: string, route?: (typeof localizedRoutes)[number]): Metadata {
  const dict = getDictionary(locale);
  const alt = fillKnown(dict.meta.ogAlt, copyTokens(report, locale, dict.home.pilot));
  const images = [{ url: '/og.png', width: 1200, height: 630, alt }];
  return {
    openGraph: {
      type: 'website',
      siteName: 'Taksim',
      locale: ogLocale[locale],
      title,
      description,
      images,
      ...(route ? { url: `${siteUrl}${localePath(locale, route)}` } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, images: [{ url: '/og.png', alt }] },
  };
}

export function pageMetadata(
  locale: Locale,
  route: (typeof localizedRoutes)[number],
  page?: PageKey,
): Metadata {
  const dict = getDictionary(locale);
  const meta = page ? dict.meta.pages[page] : undefined;
  const title = meta ? dict.meta.titleTemplate.replace('%s', meta.title) : dict.meta.siteTitle;
  return {
    ...(meta ? { title: meta.title, description: meta.description } : {}),
    alternates: alternates(locale, route),
    ...social(locale, title, meta?.description ?? dict.meta.description, route),
  };
}

export function rootMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: meta.siteTitle, template: meta.titleTemplate },
    description: meta.description,
    ...social(locale, meta.siteTitle, meta.description),
    icons: {
      icon: [{ url: '/taksim-icon-v1.svg', type: 'image/svg+xml' }],
      shortcut: '/taksim-icon-v1.svg',
    },
  };
}
