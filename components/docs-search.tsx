'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';

const entries = [
  {
    title: 'Quickstart',
    copy: 'Install Taksim and run your first observed session.',
    href: '/docs/getting-started',
    keywords: 'install setup cli start',
  },
  {
    title: 'How Taksim works',
    copy: 'Understand organisational governance, selection, delegation, and evidence.',
    href: '#concepts',
    keywords: 'policy verification authority auto runtime',
  },
  {
    title: 'Client compatibility',
    copy: 'See exact support boundaries for Claude Code, Codex, Devin, and Copilot.',
    href: '#clients',
    keywords: 'history managed live observation import',
  },
  {
    title: 'Privacy model',
    copy: 'Understand transient processing and canonical telemetry.',
    href: '/privacy',
    keywords: 'data security content storage',
  },
];

export function DocsSearch() {
  const [query, setQuery] = useState('');
  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return entries;
    return entries.filter(({ title, copy, keywords }) =>
      `${title} ${copy} ${keywords}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <>
      <div className="docs-search-shell" id="search">
        <label className="docs-search">
          Search documentation
          <input
            type="search"
            placeholder="Search concepts, clients, or commands…"
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
        {matches.length === 0 && (
          <p className="docs-empty">No matching documentation yet.</p>
        )}
      </div>
    </>
  );
}
