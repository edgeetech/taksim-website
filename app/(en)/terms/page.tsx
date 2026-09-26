import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/terms';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/terms/', 'terms');

export default function TermsRoute() {
  return <TermsPage />;
}
