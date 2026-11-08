import Link from 'next/link';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

/** The site-wide notice shown on every page under the header. */
export function ClosingBanner({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).closing;
  return (
    <aside className="closing-banner" aria-label={t.bannerLabel} data-closing-banner>
      <p className="shell">
        {t.banner}{' '}
        <a href={t.postHref}>
          {t.bannerLink} <span aria-hidden="true">→</span>
        </a>
      </p>
    </aside>
  );
}

/** The full closing note: the home hero and the former pricing page. */
export function ClosingNote({ locale, headingLevel = 1 }: { locale: Locale; headingLevel?: 1 | 2 }) {
  const t = getDictionary(locale).closing;
  const Heading = headingLevel === 1 ? 'h1' : 'h2';
  return (
    <section className="closing-note" aria-labelledby="closing-title" data-closing-note>
      <div className="shell narrow">
        <p className="eyebrow">{t.eyebrow}</p>
        <Heading id="closing-title">{t.title}</Heading>
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="closing-signature">{t.signature}</p>
        <p>
          <a className="text-link" href={t.postHref}>
            {t.postLabel} →
          </a>
        </p>
        <h2>{t.staysTitle}</h2>
        <ul className="closing-stays">
          {t.stays.map((item) => (
            <li key={item.route}>
              <Link className="text-link" href={localePath(locale, item.route)}>
                {item.label}
              </Link>
              <span> {item.body}</span>
            </li>
          ))}
        </ul>
        <p className="closing-releases">{t.releases}</p>
      </div>
    </section>
  );
}
