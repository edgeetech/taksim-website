import { CopyCommand } from '@/components/copy-command';
import { release } from '@/lib/release';
import type { Locale } from '@/lib/i18n';

export function MacInstall({ locale }: { locale: Locale }) {
  if (!release.supportsMac) return null;
  const tr = locale === 'tr';
  return (
    <section id="mac-install">
      <h2>{tr ? 'macOS kurulumu' : 'Install on macOS'}</h2>
      <p>{tr
        ? 'macOS 14 veya üzeri. Terminal’i açın ve aşağıdaki komutu çalıştırın. Kurucu Apple Silicon veya Intel paketini otomatik seçer; sudo gerekmez.'
        : 'Requires macOS 14 or later. Open Terminal and run this command. The installer selects the Apple Silicon or Intel package automatically; no sudo is required.'}</p>
      <CopyCommand command={release.macInstallCommand} copy={tr ? 'Kopyala' : 'Copy'} copied={tr ? 'Kopyalandı' : 'Copied'} />
      <p>{tr
        ? 'Kurulum ~/.local/share/taksim altındadır; komut ~/.local/bin dizinine bağlanır. Bu dizin PATH’inizde değilse kurucunun gösterdiği PATH komutunu çalıştırın. Yerel defter ~/.taksim altında tutulur.'
        : 'The application lives under ~/.local/share/taksim, with a command link in ~/.local/bin. If that directory is missing from PATH, run the PATH command printed by the installer. The local ledger stays under ~/.taksim.'}</p>
      <p>{tr
        ? 'Önceki önizleme paketiyle Apple Silicon M3 üzerinde kurulum, çalıştırma ve kaldırma kullanıcı tarafından denendi. Bu sürüm için yerel Mac CI doğrulaması ve Intel cihaz testi henüz tamamlanmadı. Bu paketlerde Apple Developer ID ve notarization doğrulaması yoktur.'
        : 'Installation, execution and removal were user-tested on Apple Silicon M3 using an earlier preview build. Native Mac CI validation of this release and an Intel device test remain outstanding. These packages do not have verified Apple Developer ID signing or notarization.'}</p>
    </section>
  );
}
