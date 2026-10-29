import type { Metadata } from 'next';
import { TroubleshootingPage } from '@/components/pages/troubleshooting';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/docs/troubleshooting/', 'troubleshooting');

export default function TroubleshootingRoute() {
  return <TroubleshootingPage locale="tr" />;
}
