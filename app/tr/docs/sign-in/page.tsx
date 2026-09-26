import type { Metadata } from 'next';
import { SignInPage } from '@/components/pages/sign-in';
import { UntranslatedNote } from '@/components/site-chrome';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('tr', '/docs/sign-in/');

export default function SignInRoute() {
  return (
    <>
      <UntranslatedNote locale="tr" />
      <div lang="en">
        <SignInPage locale="tr" />
      </div>
    </>
  );
}
