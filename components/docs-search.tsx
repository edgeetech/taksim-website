'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Braces, Shield, Terminal } from 'lucide-react';
import { useMemo, useState } from 'react';

const entries = [
  {
    title: 'Quickstart',
    copy: 'Install Taksim and run your first observed session.',
    href: '/docs/getting-started',
    icon: Terminal,
    keywords: 'install setup cli start',
  },
  {
    title: 'How Taksim works',
    copy: 'Understand organisational governance, selection, delegation, and evidence.',
    href: '#concepts',
    icon: BookOpen,
    keywords: 'policy verification authority auto runtime',
  },
  {
    title: 'Client compatibility',
    copy: 'See exact support boundaries for Claude Code, Codex, Devin, and Copilot.',
    href: '#clients',
    icon: Braces,
    keywords: 'history managed live observation import',
  },
  {
    title: 'Privacy model',
    copy: 'Understand transient processing and canonical telemetry.',
    href: '/privacy',
    icon: Shield,
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
      <div className="shell docs-search-shell">
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
      <div className="shell docs-card-grid" aria-live="polite">
        {matches.map(({ title, copy, href, icon: Icon }) => (
          <Link className="docs-card" href={href} key={title}>
            <Icon size={22} />
            <h2>{title}</h2>
            <p>{copy}</p>
            <span>
              Open <ArrowRight size={15} />
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
