import type { Metadata } from 'next';
import { ProofPage } from '@/components/pages/proof';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/proof/', 'proof');

export default function ProofRoute() {
  return <ProofPage locale="en" />;
}
