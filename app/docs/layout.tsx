import Link from 'next/link';

const groups = [
  {
    title: 'Introduction',
    links: [
      ['Welcome to Taksim', '/docs'],
      ['How Taksim works', '/docs#how-taksim-works'],
    ],
  },
  {
    title: 'Quickstart',
    links: [['Install and get started', '/docs/getting-started']],
  },
  {
    title: 'Core concepts',
    links: [
      ['Governance', '/docs#governance'],
      ['Delegation', '/docs#delegation'],
      ['Connector & availability', '/docs#connector'],
      ['Verification', '/docs#verification'],
      ['Privacy model', '/privacy'],
    ],
  },
  {
    title: 'Clients',
    links: [
      ['Claude Code', '/docs#client-compatibility'],
      ['Codex', '/docs#client-compatibility'],
      ['Devin', '/docs#client-compatibility'],
      ['GitHub Copilot', '/docs#client-compatibility'],
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="docs-layout">
      <aside className="docs-sidebar" aria-label="Documentation navigation">
        <Link className="docs-home-link" href="/docs">
          Documentation
        </Link>
        <Link className="docs-search-button" href="/docs#search">
          <span>Search documentation</span>
          <kbd>/</kbd>
        </Link>
        <nav>
          {groups.map((group) => (
            <section key={group.title}>
              <h2>{group.title}</h2>
              {group.links.map(([label, href]) => (
                <Link href={href} key={`${label}-${href}`}>
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
