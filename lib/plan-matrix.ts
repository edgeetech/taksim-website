// Which plan includes which capability. One config for the pricing matrix; the labels live in the
// dictionary (pricing.matrix.rows). Free is what Taksim observes, Pro is live API-key routing and
// budgets, Team is the roll-up and chargeback. Subscription routing is not a plan feature.
export const plans = ['free', 'pro', 'team'] as const;
export type Plan = (typeof plans)[number];

export const planMatrixGroups = ['observe', 'route', 'team'] as const;
export type PlanMatrixGroup = (typeof planMatrixGroups)[number];

export const planMatrix = [
  { id: 'import', group: 'observe', free: true, pro: true, team: true },
  { id: 'dashboard', group: 'observe', free: true, pro: true, team: true },
  { id: 'judge', group: 'observe', free: true, pro: true, team: true },
  { id: 'routing', group: 'route', free: false, pro: true, team: true },
  { id: 'learning', group: 'route', free: false, pro: true, team: true },
  { id: 'budgets', group: 'route', free: false, pro: true, team: true },
  { id: 'rollup', group: 'team', free: false, pro: false, team: true },
  { id: 'chargeback', group: 'team', free: false, pro: false, team: true },
] as const satisfies readonly (Record<Plan, boolean> & { id: string; group: PlanMatrixGroup })[];

export type PlanMatrixId = (typeof planMatrix)[number]['id'];
