// Single source for plan prices and which capability belongs to which plan. en.ts and tr.ts import it, so
// both languages show the same numbers and the same feature split. Entitlement ids use the dotted names the
// Taksim product uses for licensed features; `free.*` ids are never gated.
export const prices = {
  pro: 12,
  team: 18,
  teamMinDevelopers: 5,
  teamMinMonthly: 90,
} as const;

export const foundingOffer = {
  customers: 20,
  discountPercent: 50,
  months: 12,
} as const;

// CEO decision 2026-10-29: everything that saves money or shows evidence is free; Pro and Team charge for
// automation, enforcement and team features. Entitlement enforcement in the product stays off until the owner
// sets a real public key and launches checkout, so today every command works without a licence.
export const entitlements = {
  pro: ['budget.enforce', 'digest.delivery', 'report.summaryHtml', 'audit.native', 'support.priority'],
  team: ['report.team', 'budget.team', 'policy.org'],
} as const;

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
  shippedIn: null as string | null,
  writtenForRelease: '0.3.17',
} as const;

export type EntitlementId = (typeof entitlements.pro)[number] | (typeof entitlements.team)[number];
export type FreeFeatureId = (typeof freeFeatures)[number];
export type FeatureId = EntitlementId | FreeFeatureId;
