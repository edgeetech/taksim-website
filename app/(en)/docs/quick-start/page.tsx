import type { Metadata } from 'next';
import { QuickStartPage } from '@/components/pages/quick-start';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata(
  'en',
  '/docs/quick-start/',
  'quickStart',
);

export default function QuickStartRoute() {
  return <QuickStartPage locale="en" />;
}
