'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { Dictionary } from '@/lib/i18n';

<<<<<<< HEAD
export function DocsSearch({ t }: { t: Dictionary['docsSearch'] }) {
=======
const entries = [
  {
    title: 'Sign in (optional)',
    copy: 'Opt-in browser login for hosted features, Solo terms, remembered access and model displays.',
    href: '/docs/sign-in',
    keywords: 'identity google github login logout device credential model optional off by default terms',
  },
  {
    title: 'Subscriptions & API keys',
    copy: 'Why Claude subscriptions are observed, not rewritten, and how API-key routing differs.',
    href: '#subscriptions-and-api-keys',
    keywords: 'subscription max pro api key rewrite observe quota baseline report',
  },
  {
    title: 'Install Taksim',
    copy: 'Install the verified Windows release, verify it, and start Claude Code or Codex.',
    href: '/docs/getting-started',
    keywords:
      'quickstart install setup cli start release v0.1.0 windows powershell checksum claude code codex doctor troubleshooting',
  },
  {
    title: 'How Taksim works',
    copy: 'Understand organisational governance, selection, delegation, and evidence.',
    href: '#how-taksim-works',
    keywords: 'policy verification authority auto runtime',
  },
  {
    title: 'Client compatibility',
    copy: 'See exact support boundaries for Claude Code, Codex, Devin, and Copilot.',
    href: '#client-compatibility',
    keywords: 'history managed live observation import',
  },
  {
    title: 'History import only',
    copy: 'AgentBoard, Agent Workstation, Devin Desktop, Kilo Code, OpenCode, and Pi / Oh My Pi: history import, no managed launch.',
    href: '#history-import-only',
    keywords:
      'agentboard agent workstation devin desktop windsurf kilo code opencode pi oh my pi observe only no managed launch',
  },
  {
    title: 'Connector & availability',
    copy: 'Understand the local, fail-open managed path.',
    href: '#connector',
    keywords: 'gateway local fail open resilience native fallback',
  },
  {
    title: 'Privacy model',
    copy: 'Understand transient processing and canonical telemetry.',
    href: '/privacy',
    keywords: 'data security content storage',
  },
];

export function DocsSearch() {
>>>>>>> origin/main
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
