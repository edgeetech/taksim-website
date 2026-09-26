import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/privacy';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/privacy/', 'privacy');

export default function PrivacyRoute() {
  return <PrivacyPage locale="tr" />;
}
