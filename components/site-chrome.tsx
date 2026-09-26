import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu } from 'lucide-react';
import { LanguageSwitcher } from '@/components/language-switcher';
import { TrustStrip } from '@/components/trust-strip';
import { getDictionary, localePath, type Locale } from '@/lib/i18n';

export function Brand({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).chrome;
  return (
    <Link className="brand" href={localePath(locale, '/')} aria-label={t.brandHome}>
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
        <small>{t.brandTagline}</small>
      </span>
    </Link>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).chrome;
  const href = (path: string) => localePath(locale, path);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Brand locale={locale} />
        <nav className="main-nav" aria-label={t.primaryNav}>
          <Link href={href('/#how-it-works')}>{t.nav.how}</Link>
          <Link href={href('/#clients')}>{t.nav.clients}</Link>
          <Link href={href('/pricing')}>{t.nav.pricing}</Link>
          <Link href={href('/docs')}>{t.nav.docs}</Link>
        </nav>
        <div className="header-actions">
          <Link className="text-action" href={href('/contact')}>
            {t.talkToUs}
          </Link>
          <Link className="button button-small" href={href('/docs/getting-started')}>
            {t.install}
          </Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label={t.openNav}>
            <Menu size={21} />
          </summary>
          <nav aria-label={t.mobileNav}>
            <Link href={href('/#how-it-works')}>{t.nav.how}</Link>
            <Link href={href('/#clients')}>{t.nav.clients}</Link>
            <Link href={href('/pricing')}>{t.nav.pricing}</Link>
            <Link href={href('/docs')}>{t.nav.docs}</Link>
            <Link href={href('/contact')}>{t.talkToUs}</Link>
            <Link href={href('/docs/getting-started')}>{t.install}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).chrome;
  const href = (path: string) => localePath(locale, path);
  return (
    <>
      <TrustStrip t={t.trust} />
      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <Brand locale={locale} />
            <p>{t.footer.tagline}</p>
          </div>
          <nav aria-label={t.footer.productNav}>
            <strong>Taksim</strong>
            <Link href={href('/pricing')}>{t.nav.pricing}</Link>
            <Link href={href('/docs')}>{t.nav.docs}</Link>
          </nav>
          <nav aria-label={t.footer.legalNav}>
            <strong>{t.footer.legal}</strong>
            <Link href={href('/privacy')}>{t.footer.privacy}</Link>
            <Link href={href('/terms')}>{t.footer.terms}</Link>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <span>
            © {new Date().getFullYear()} {t.footer.company}
          </span>
          <div className="footer-bottom-actions">
            <LanguageSwitcher locale={locale} label={t.language.label} />
            <Link href={href('/contact')}>
              {t.talkToUs} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

/** Shown on locale routes whose body is still English. */
export function UntranslatedNote({ locale }: { locale: Locale }) {
  if (locale === 'en') return null;
  return (
    <p className="shell untranslated-note" role="note">
      {getDictionary(locale).chrome.untranslated}
    </p>
  );
}
