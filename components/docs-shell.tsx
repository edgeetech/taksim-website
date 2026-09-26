import Link from 'next/link';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

export function DocsShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = getDictionary(locale).docsNav;
  const href = (path: string) => localePath(locale, path);
  return (
    <div className="docs-layout">
      <aside className="docs-sidebar" aria-label={t.label}>
        <Link className="docs-home-link" href={href('/docs')}>
          {t.home}
        </Link>
        <Link className="docs-search-button" href={href('/docs#search')}>
          <span>{t.search}</span>
          <kbd>/</kbd>
        </Link>
        <nav>
          {t.groups.map((group) => (
            <section key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, path]) => (
                <Link href={href(path)} key={`${label}-${path}`}>
                  {label}
                </Link>
              ))}
            </section>
          ))}
        </nav>
      </aside>
      <div className="docs-main">{children}</div>
    </div>
  );
}
