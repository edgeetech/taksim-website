import type { Metadata } from 'next';
import { RootShell } from '@/components/root-shell';
import { rootMetadata } from '@/lib/i18n';
import '../globals.css';

export const metadata: Metadata = rootMetadata('tr');

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootShell locale="tr">{children}</RootShell>;
}
