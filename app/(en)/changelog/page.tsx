import type { Metadata } from 'next';
import { ChangelogPage } from '@/components/pages/changelog';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/changelog/', 'changelog');

export default function ChangelogRoute() {
  return <ChangelogPage locale="en" />;
}
