import { getDictionary, localePath, siteUrl, type Locale } from '@/lib/i18n';
import { release } from '@/lib/release';

/** schema.org SoftwareApplication for the home page. No offers: Taksim is closed as a commercial product. */
export function SoftwareApplicationJsonLd({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Taksim',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Windows, macOS',
    softwareVersion: release.version,
    inLanguage: locale,
    url: `${siteUrl}${localePath(locale, '/')}`,
    description: dict.meta.description,
    publisher: { '@type': 'Organization', name: dict.chrome.footer.company },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
