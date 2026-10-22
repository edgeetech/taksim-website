import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/terms';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/terms/', 'terms');

export default function TermsRoute() {
  return <TermsPage locale="tr" />;
}
