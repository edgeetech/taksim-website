import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/home';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/');

export default function HomeRoute() {
  return <HomePage locale="tr" />;
}
