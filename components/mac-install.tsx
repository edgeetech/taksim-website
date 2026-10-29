import { CopyCommand } from '@/components/copy-command';
import { release } from '@/lib/release';
import { getDictionary, type Locale } from '@/lib/i18n';

export function MacInstall({ locale }: { locale: Locale }) {
  if (!release.supportsMac) return null;
  const tr = locale === 'tr';
  const platform = getDictionary(locale).platform;
  return (
    <section id="mac-install">
      <h2>{tr ? 'macOS kurulumu' : 'Install on macOS'}</h2>
      <p className="docs-note">
        <strong>{platform.macPreview}</strong>. {platform.macPreviewNote}
      </p>
      <p>{tr
        ? 'macOS 14 veya üzeri. Terminal’i açın ve aşağıdaki komutu çalıştırın. Kurucu Apple Silicon veya Intel paketini otomatik seçer; sudo gerekmez.'
        : 'Requires macOS 14 or later. Open Terminal and run this command. The installer selects the Apple Silicon or Intel package automatically; no sudo is required.'}</p>
      <CopyCommand command={release.macInstallCommand} copy={tr ? 'Kopyala' : 'Copy'} copied={tr ? 'Kopyalandı' : 'Copied'} />
      <p>{tr
        ? 'Kurulum ~/.local/share/taksim altındadır; komut ~/.local/bin dizinine bağlanır. Bu dizin PATH’inizde değilse kurucunun gösterdiği PATH komutunu çalıştırın. Yeni kurulumlar verileri ~/Library/Application Support/EdgeeTech/Taksim altında tutar; mevcut bir ~/.taksim klasörü `taksim home migrate` ile taşınabilir. taksim.dev ile paylaşılan bir ~/.taksim için `--shared` gerekir; `cache`, `logs`, `reports`, `team`, `policy`, `routing`, `gateway` gibi genel adlı klasörler yalnızca `--include AD` ile adlandırılırsa taşınır ve `uninstall --purge-data` onlara dokunmaz. Başka bir Taksim süreci veritabanını açık tutuyorsa taşıma hiçbir şeyi taşımadan durur (çıkış kodu 3); yarım kalmış bir taşımadan sonra `taksim doctor` geride kalanı ve gereken `--include` değerini söyler.'
        : 'The application lives under ~/.local/share/taksim, with a command link in ~/.local/bin. If that directory is missing from PATH, run the PATH command printed by the installer. On macOS, new installs keep data in ~/Library/Application Support/EdgeeTech/Taksim, and an existing ~/.taksim can be moved with `taksim home migrate`. A ~/.taksim shared with taksim.dev needs `--shared`; folders with generic names such as `cache`, `logs`, `reports`, `team`, `policy`, `routing` and `gateway` move only when you name them with `--include NAME`, and `uninstall --purge-data` leaves them alone. If another Taksim process still has a database open, the migration stops with exit code 3 before anything moves; after an interrupted migration, `taksim doctor` names what was left behind and the `--include` it needs.'}</p>
      <p>{tr
        ? 'Önceki bir önizleme paketi Apple Silicon M3 üzerinde kurulup çalıştırıldı ve kaldırıldı; bu sürüm Mac donanımında henüz test edilmedi ve Intel cihaz testi de yapılmadı. Bu paketlerde Apple Developer ID ve notarization doğrulaması yoktur.'
        : 'An earlier preview build was installed, run and removed on an Apple Silicon M3. This release has not been tested on Mac hardware yet, and there has been no Intel device test. These packages do not have verified Apple Developer ID signing or notarization.'}</p>
    </section>
  );
}
