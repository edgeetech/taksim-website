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
  commands: manifest.commands as string[],
  clients: manifest.clients as ReleaseClient[],
};
