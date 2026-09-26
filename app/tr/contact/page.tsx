import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/contact';
import { UntranslatedNote } from '@/components/site-chrome';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/contact/', 'contact');

export default function ContactRoute() {
  return (
    <>
      <UntranslatedNote locale="tr" />
      <div lang="en">
        <ContactPage locale="tr" />
      </div>
    </>
  );
}
