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

export const entitlements = {
  pro: ['routing.auto', 'budget.enforce', 'digest.delivery', 'report.summaryHtml'],
  team: ['report.team', 'budget.team'],
} as const;

export const freeFeatures = [
  'free.history',
  'free.dashboard',
  'free.insights',
  'free.judge',
  'free.memory',
  'free.mode',
  'free.budgetWarnings',
  'free.privacy',
] as const;

export type EntitlementId = (typeof entitlements.pro)[number] | (typeof entitlements.team)[number];
export type FreeFeatureId = (typeof freeFeatures)[number];
export type FeatureId = EntitlementId | FreeFeatureId;
