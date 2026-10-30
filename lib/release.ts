// The release the site describes. release/manifest.json is rewritten from the latest published
// release at build time (scripts/release.mjs sync), so never hard-code a version or install command.
import manifest from '../release/manifest.json' with { type: 'json' };

export type ReleaseClient = {
  id: string;
  name: string;
  aliases?: string[];
  observe: boolean;
  judge: boolean;
  route: string;
};

export const release = {
  version: manifest.version,
  tag: manifest.tag,
  installCommand: manifest.install.oneLine,
  pinnedInstallCommand: manifest.install.pinned,
  unsignedInstall: manifest.install.oneLine.includes('-AllowUnsigned'),
  supportsMac: manifest.platforms.includes('osx-arm64'),
  macInstallCommand: `(installer="$(mktemp)" && trap 'rm -f "$installer"' EXIT && curl -fsSL https://github.com/edgeetech/taksim-releases/releases/latest/download/install.sh -o "$installer" && bash "$installer")`,
  commands: manifest.commands as string[],
  clients: manifest.clients as ReleaseClient[],
};

const monthNames = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
} as const;

// The day the synced release was published (UTC), as `2026-10-29`. The compatibility table is checked against
// that release, so its date comes from here and not from a hand-written string.
export const releaseDate = manifest.publishedAt.slice(0, 10);

export function releaseDateLabel(locale: 'en' | 'tr') {
  const [year, month, day] = releaseDate.split('-').map(Number);
  return `${day} ${monthNames[locale][month - 1]} ${year}`;
}
