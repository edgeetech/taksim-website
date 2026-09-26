import type { Metadata } from 'next';
import { TermsPage } from '@/components/pages/terms';
import { UntranslatedNote } from '@/components/site-chrome';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/terms/', 'terms');

export default function TermsRoute() {
  return (
    <>
      <UntranslatedNote locale="tr" />
      <div lang="en">
        <TermsPage />
      </div>
    </>
  );
}
