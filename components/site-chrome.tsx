import Link from 'next/link';
import { ArrowRight, BadgeCheck, Menu } from 'lucide-react';

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Taksim home">
      <span className="brand-copy">
        <strong>Taksim</strong>
        <small>by EdgeeTech</small>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand />
        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
        </nav>
        <div className="header-actions">
          <Link className="text-action" href="/contact">
            Talk to us
          </Link>
          <Link className="button button-small" href="/docs/getting-started">
            Get Taksim Free
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={21} />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/contact">Talk to us</Link>
            <Link href="/docs/getting-started">Get Taksim Free</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-labelledby="trust-heading">
      <div className="shell trust-inner">
        <div>
          <p className="eyebrow" id="trust-heading">
            Trust &amp; Compliance
          </p>
          <h2>Building the controls serious engineering teams expect.</h2>
        </div>
        <div className="trust-items">
          <div className="trust-item">
            <BadgeCheck size={24} />
            <span>
              <strong>SOC 2 — In progress</strong>
              <small>Certification process underway.</small>
            </span>
          </div>
          <div className="trust-item">
            <BadgeCheck size={24} />
            <span>
              <strong>ISO 27001 — In progress</strong>
              <small>Certification process underway.</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <>
      <TrustStrip />
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <Brand />
            <p>Organisational governance for engineering intelligence.</p>
          </div>
          <nav aria-label="Taksim footer">
            <strong>Taksim</strong>
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Docs</Link>
          </nav>
          <nav aria-label="Legal footer">
            <strong>Legal</strong>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} EdgeeTech Ltd.</span>
          <Link href="/contact">
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>
      </footer>
    </>
  );
}
