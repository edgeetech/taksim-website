import { release } from '@/lib/release';
import type { Locale } from '@/lib/i18n';

export function InstallTrust({ locale }: { locale: Locale }) {
  if (!release.unsignedInstall) return null;
  return <p className="docs-note">{locale === 'tr'
    ? 'Bu Windows sürümü kod imzalı değildir. Yukarıdaki komut, -AllowUnsigned ile buna açıkça izin verir; yalnızca yayıncıya güveniyorsanız çalıştırın. Checksum indirme bütünlüğünü doğrular, yayıncı kimliğini değil. Kurumunuzun güvenlik politikasını devre dışı bırakmayın.'
    : 'This Windows release is unsigned. The command explicitly opts in with -AllowUnsigned; run it only if you trust the publisher. Checksums verify download integrity, not publisher identity. Do not disable your organization’s security policy.'}</p>;
}
