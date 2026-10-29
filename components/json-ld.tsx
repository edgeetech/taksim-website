import { prices } from '@/lib/plans';
import { getDictionary, localePath, siteUrl, type Locale } from '@/lib/i18n';
import { release } from '@/lib/release';

const priceOffer = (name: string, price: number, availability: string) => ({
  '@type': 'Offer',
  name,
  price,
  priceCurrency: 'USD',
  availability,
  priceSpecification: {
    '@type': 'UnitPriceSpecification',
    price,
    priceCurrency: 'USD',
    billingDuration: 1,
    unitCode: 'MON',
  },
});

/** schema.org SoftwareApplication for the home and pricing pages. Paid plans are marked pre-order: they are not on sale yet. */
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
    offers: [
      {
        '@type': 'Offer',
        name: dict.plans.developer.name,
        price: 0,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      priceOffer(dict.plans.pro.name, prices.pro, 'https://schema.org/PreOrder'),
      priceOffer(dict.plans.team.name, prices.team, 'https://schema.org/PreOrder'),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
