import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu } from 'lucide-react';
import { TrustStrip } from '@/components/trust-strip';

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Taksim home">
      <Image
        className="brand-mark"
        src="/taksim-mark.png"
        alt=""
        aria-hidden="true"
        width={30}
        height={30}
        priority
        unoptimized
      />
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
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#clients">Clients</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/docs">Docs</Link>
        </nav>
        <div className="header-actions">
          <Link className="text-action" href="/contact">
            Talk to us
          </Link>
          <Link className="button button-small" href="/docs/getting-started">
            Install Taksim
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <Menu size={21} />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#clients">Clients</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/contact">Talk to us</Link>
            <Link href="/docs/getting-started">Install Taksim</Link>
          </nav>
        </details>
      </div>
    </header>
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
            <p>A local-first sufficiency ledger for AI coding.</p>
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
