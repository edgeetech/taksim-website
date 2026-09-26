'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { Dictionary } from '@/lib/i18n';

export function DocsSearch({ t }: { t: Dictionary['docsSearch'] }) {
  const [query, setQuery] = useState('');
  const entries = t.entries;
  const matches = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return entries;
    return entries.filter(({ title, copy, keywords }) =>
      `${title} ${copy} ${keywords}`.toLocaleLowerCase().includes(normalized),
    );
  }, [query, entries]);

  return (
    <>
      <div className="docs-search-shell" id="search">
        <label className="docs-search">
          {t.label}
          <input
            type="search"
            placeholder={t.placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
      </div>
      <div className="docs-result-list" aria-live="polite">
        {matches.map(({ title, copy, href }) => (
          <Link className="docs-card" href={href} key={title}>
            <span>
              <strong>{title}</strong>
              <small>{copy}</small>
            </span>
            <span>
              <ArrowRight size={15} />
            </span>
          </Link>
        ))}
        {matches.length === 0 && <p className="docs-empty">{t.empty}</p>}
      </div>
    </>
  );
}
