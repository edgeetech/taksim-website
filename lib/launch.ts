// Launch switches, read from PUBLIC_* environment variables while the static site is rendered
// (server components only; nothing here reaches the browser bundle). An unset or invalid value
// switches the feature off, and a feature that is off emits nothing.
//
//   PUBLIC_PRO_CHECKOUT_URL    https URL of the Paddle checkout for Pro. Unset: "Coming soon" + waitlist.
//   PUBLIC_TEAM_CHECKOUT_URL   https URL of the Paddle checkout for Team. Unset: "Coming soon" + waitlist.
//   PUBLIC_DEMO_VIDEO_URL      https URL of a .mp4 or .webm file. Unset: no video block.
//   PUBLIC_DEMO_CAPTIONS_URL   https URL of a .vtt captions file for the video (optional).
//   PUBLIC_CF_ANALYTICS_TOKEN  Cloudflare Web Analytics site token (32 hex characters). Unset: no beacon.

type Env = Record<string, string | undefined>;

function httpsUrl(value: string | undefined, path?: RegExp): string | null {
  const raw = value?.trim();
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:' || !url.hostname) return null;
    if (path && !path.test(url.pathname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export type PaidPlan = 'pro' | 'team';

export const waitlistAddress = 'info@edgee.tech';

export function waitlistHref(plan: PaidPlan): string {
  const name = plan === 'pro' ? 'Pro' : 'Team';
  return `mailto:${waitlistAddress}?subject=${encodeURIComponent(`Taksim ${name} waitlist`)}`;
}

export function launchConfig(env: Env = process.env) {
  const token = env.PUBLIC_CF_ANALYTICS_TOKEN?.trim() ?? '';
  return {
    checkout: {
      pro: httpsUrl(env.PUBLIC_PRO_CHECKOUT_URL),
      team: httpsUrl(env.PUBLIC_TEAM_CHECKOUT_URL),
    },
    demoVideoUrl: httpsUrl(env.PUBLIC_DEMO_VIDEO_URL, /\.(?:mp4|webm)$/i),
    demoCaptionsUrl: httpsUrl(env.PUBLIC_DEMO_CAPTIONS_URL, /\.vtt$/i),
    analyticsToken: /^[0-9a-f]{32}$/i.test(token) ? token : null,
  };
}

export const launch = launchConfig();
