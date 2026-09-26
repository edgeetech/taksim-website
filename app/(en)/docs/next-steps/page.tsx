import type { Metadata } from 'next';
import { NextStepsPage } from '@/components/pages/next-steps';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata(
  'en',
  '/docs/next-steps/',
  'nextSteps',
);

export default function NextStepsRoute() {
  return <NextStepsPage locale="en" />;
}
