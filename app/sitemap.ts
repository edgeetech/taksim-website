import type { MetadataRoute } from 'next';
const routes = [
  '',
  '/pricing',
  '/docs',
  '/docs/getting-started',
  '/docs/sign-in',
  '/privacy',
  '/terms',
  '/contact',
];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://taksim.edgee.tech${route}`,
    lastModified: new Date('2026-09-13'),
    changeFrequency: route.startsWith('/docs') ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/docs' ? 0.9 : 0.7,
  }));
}
