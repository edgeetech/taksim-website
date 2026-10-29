import type { Metadata } from 'next';
import { ComparePage } from '@/components/pages/compare';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/compare/', 'compare');

export default function CompareRoute() {
  return <ComparePage locale="en" />;
}
