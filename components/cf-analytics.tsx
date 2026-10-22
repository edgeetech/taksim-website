import { launch } from '@/lib/launch';

// Cloudflare Web Analytics beacon. Cookieless; it counts page views only. Rendered only when
// PUBLIC_CF_ANALYTICS_TOKEN is set at build time, so a build without it ships no third-party script.
// The privacy notice must say so before the variable is set in production (see AGENTS.md).
export function CloudflareAnalytics() {
  const token = launch.analyticsToken;
  if (!token) return null;
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
