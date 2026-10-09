import type { Metadata } from 'next';
import { BenchmarkMethodologyPage } from '@/components/pages/benchmark-methodology';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/benchmarks/claude-routing/', 'benchmark');

export default function BenchmarkMethodologyRoute() {
  return <BenchmarkMethodologyPage locale="en" />;
}
