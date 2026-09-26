import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/contact';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/contact/', 'contact');

export default function ContactRoute() {
  return <ContactPage locale="en" />;
}
