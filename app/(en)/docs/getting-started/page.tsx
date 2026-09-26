import type { Metadata } from 'next';
import { GettingStartedPage } from '@/components/pages/getting-started';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/docs/getting-started/', 'gettingStarted');

export default function GettingStartedRoute() {
  return <GettingStartedPage locale="en" />;
}
