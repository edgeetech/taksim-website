import type { Metadata } from 'next';
import { PricingPage } from '@/components/pages/pricing';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/pricing/', 'pricing');

export default function PricingRoute() {
  return <PricingPage locale="tr" />;
}
