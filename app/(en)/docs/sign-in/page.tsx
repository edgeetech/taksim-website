import type { Metadata } from 'next';
import { SignInPage } from '@/components/pages/sign-in';
import { pageMetadata } from '@/lib/i18n';

export const metadata: Metadata = pageMetadata('en', '/docs/sign-in/');

export default function SignInRoute() {
  return <SignInPage locale="en" />;
}
