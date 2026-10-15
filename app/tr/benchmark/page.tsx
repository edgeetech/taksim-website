import type { Metadata } from 'next';
import { BenchmarkPage } from '@/components/pages/benchmark';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/benchmark/', 'benchmark');

export default function BenchmarkRoute() {
  return <BenchmarkPage locale="tr" />;
}
