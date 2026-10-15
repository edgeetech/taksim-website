import type { Metadata } from 'next';
import { ClientsPage } from '@/components/pages/clients';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/clients/', 'clients');

export default function ClientsRoute() {
  return <ClientsPage locale="tr" />;
}
