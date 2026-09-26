import type { Metadata } from 'next';
import { NextStepsPage } from '@/components/pages/next-steps';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata(
  'tr',
  '/docs/next-steps/',
  'nextSteps',
);

export default function NextStepsRoute() {
  return <NextStepsPage locale="tr" />;
}
