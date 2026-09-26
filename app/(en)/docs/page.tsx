import type { Metadata } from 'next';
import { DocsHomePage } from '@/components/pages/docs-home';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/docs/', 'docs');

export default function DocsHomeRoute() {
  return <DocsHomePage locale="en" />;
}
