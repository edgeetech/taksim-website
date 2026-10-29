import type { Metadata } from 'next';
import { SecurityPage } from '@/components/pages/security';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/security/', 'security');

export default function SecurityRoute() {
  return <SecurityPage locale="en" />;
}
