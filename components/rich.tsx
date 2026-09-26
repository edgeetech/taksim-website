import Link from 'next/link';
import type { ReactNode } from 'react';
import { localePath, type Locale } from '@/lib/i18n';

const token = /`([^`]+)`|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders dictionary strings with `code`, **bold** and [label](href) markup. */
export function Rich({ text, locale }: { text: string; locale: Locale }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(token)) {
    const index = match.index ?? 0;
    if (index > last) out.push(text.slice(last, index));
    const [, code, bold, label, href] = match;
    if (code) out.push(<code key={index}>{code}</code>);
    else if (bold) out.push(<strong key={index}>{bold}</strong>);
    else if (href.startsWith('/'))
      out.push(
        <Link href={localePath(locale, href)} key={index}>
          {label}
        </Link>,
      );
    else if (href.startsWith('mailto:'))
      out.push(
        <a href={href} key={index}>
          {label}
        </a>,
      );
    else
      out.push(
        <a href={href} key={index} rel="noreferrer" target="_blank">
          {label}
        </a>,
      );
    last = index + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
