import type { Metadata } from 'next';
import { HowItWorksPage } from '@/components/pages/how-it-works';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/how-it-works/', 'howItWorks');

export default function HowItWorksRoute() {
  return <HowItWorksPage locale="tr" />;
}
