import type { MetadataRoute } from 'next';
import { localePath, localizedRoutes, locales, siteUrl } from '@/lib/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  return localizedRoutes.flatMap((route) => {
    const path = route === '/' ? '' : route.slice(0, -1);
    const languages = Object.fromEntries(
      locales.map((l) => [l, `${siteUrl}${localePath(l, route === '/' ? '/' : path)}`]),
    );
    return locales.map((locale) => ({
      url: `${siteUrl}${locale === 'en' ? path : localePath(locale, route === '/' ? '/' : path)}`,
      lastModified: new Date('2026-09-26'),
      changeFrequency: path.startsWith('/docs') ? ('weekly' as const) : ('monthly' as const),
      priority: path === '' ? 1 : path === '/docs' ? 0.9 : 0.7,
      alternates: { languages },
    }));
  });
}
