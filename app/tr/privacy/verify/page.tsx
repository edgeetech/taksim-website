import type { Metadata } from 'next';
import { VerifyPage } from '@/components/pages/verify';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/privacy/verify/', 'verify');

export default function VerifyRoute() {
  return <VerifyPage locale="tr" />;
}
