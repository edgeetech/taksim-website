import { ClientMatrix } from '@/components/client-matrix';
import { getDictionary, type Locale } from '@/lib/i18n';

export function ClientsPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const t = dict.home.clients;
  return (
    <main className="home">
      <section className="band clients page-lead" aria-labelledby="clients-title">
        <div className="shell">
          <div className="section-lead">
            <p className="eyebrow">{dict.chrome.nav.clients}</p>
            <h1 id="clients-title">{t.title}</h1>
            <p className="hero-lede">{t.body}</p>
          </div>
          <ClientMatrix locale={locale} />
        </div>
      </section>
    </main>
  );
}
