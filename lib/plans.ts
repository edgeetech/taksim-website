// Which capability belonged to which plan in the product. Taksim is closed as a commercial product, so there are
// no prices or offers here any more; the ids stay because the product and data/entitlements.json use them.
// Measuring, reporting and routing are free; Pro and Team charge for enforcement, delivery and team features.
// The ids are the product's own (`LicenseFeatures.cs`, mirrored in data/entitlements.json). Entitlement
// enforcement in the product stays off until the owner sets a real public key and launches checkout, so today
// every command works without a licence.
export const entitlements = {
  pro: ['budget.enforce', 'digest.delivery', 'report.summaryHtml', 'audit.nativeRouter', 'support.priority'],
  team: ['report.team', 'budget.team', 'policy.org'],
} as const;

export type EntitlementId = (typeof entitlements.pro)[number] | (typeof entitlements.team)[number];

// The first release that contains each paid feature, or null while it is not in a published release. The
// pricing page lists a feature under "Included now" only when this is set, and under "Coming" otherwise;
// a null one is never billed for. Set it to the release version when the feature ships.
export const shippedIn: Record<EntitlementId, string | null> = {
  'budget.enforce': '0.3.17',
  'digest.delivery': '0.3.17',
  'report.summaryHtml': '0.3.17',
  'audit.nativeRouter': '0.3.18',
  'support.priority': '0.3.17',
  'report.team': '0.3.17',
  'budget.team': '0.3.17',
  'policy.org': null,
};

export const isShipped = (id: EntitlementId) => shippedIn[id] !== null;

export const freeFeatures = [
  'free.history',
  'free.dashboard',
  'free.insights',
  'free.judge',
  'free.memory',
  'free.proof',
  'free.mode',
  'free.routingAuto',
  'free.routingSubscription',
  'free.budgetWarnings',
  'free.privacy',
] as const;

// `taksim proof export` is built but not in a published release yet. While `shippedIn` is null the site says so
// wherever it names the command. Set it to the first release version that contains the command; a test fails
// if the synced release moves past the version the site was written for while this is still null.
export const proofExport = {
  shippedIn: '0.3.18' as string | null,
  writtenForRelease: '0.3.18',
} as const;

export type FreeFeatureId = (typeof freeFeatures)[number];
export type FeatureId = EntitlementId | FreeFeatureId;
