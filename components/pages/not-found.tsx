import Link from 'next/link';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <main>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">404</p>
          <h1>{t.title}</h1>
          <p>{t.body}</p>
          <div className="button-row">
            <Link className="button" href={localePath(locale, '/')}>
              {t.home}
            </Link>
            <Link className="button button-secondary" href={localePath(locale, '/docs')}>
              {t.docs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
