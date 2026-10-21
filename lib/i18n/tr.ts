// Turkish copy. Mirrors en.ts key-for-key; commands, prices and product names stay as in English.
import type { Dictionary } from './en';

export const tr: Dictionary = {
  meta: {
    siteTitle: 'Taksim — En üst düzey zekâ, yalnızca iş gerektirdiğinde',
    titleTemplate: '%s — Taksim',
    description:
      'Taksim, AI kodlama ajanları için yerel bir kontrol düzlemidir (control plane). Defteri her turda hangi modelin çalıştığını, maliyetini ve daha ucuz bir modelin işi ne zaman görebileceğini kaydeder. Bireysel geliştiriciler için ücretsiz.',
    pages: {
      pricing: {
        title: 'Fiyatlandırma',
        description:
          'Taksim CLI, evde ya da işte, her bireysel geliştirici için ücretsizdir. Team: aktif geliştirici başına aylık $8, en az $99.',
      },
      docs: {
        title: 'Dokümantasyon',
        description:
          'Taksim teknik dokümantasyonu: fiyatlandırılmış oturumlar, judge değerlendirmesi, subscription ve API key kullanımı, istemciler ve gizlilik.',
      },
      privacy: {
        title: 'Gizlilik',
        description:
          'Taksim, mühendislik metadata’sını işlerken ham mühendislik içeriğini kanonik telemetride tutmaktan nasıl kaçınır.',
      },
      terms: {
        title: 'Koşullar',
        description:
          'Ücretsiz geliştirici kullanımı, Team kullanımı, üçüncü taraf sağlayıcılar, doğrulama ve ekonomik sınırları açıklayan önizleme koşulları.',
      },
      quickStart: {
        title: 'Kolay kurulum',
        description:
          'Taksim’i Windows’a üç adımda kurun: tek satır PowerShell, taksim setup, taksim dashboard. Sorun giderme, güncelleme ve kaldırma.',
      },
      gettingStarted: {
        title: 'Kurulum rehberi',
        description:
          'Eksiksiz Taksim kurulum rehberi: ön koşullar, doğrulanmış tek satırlık kurulum, kontroller, yönetilen oturumlar ve geçmiş içe aktarma.',
      },
      nextSteps: {
        title: 'Sonraki adımlar',
        description:
          'Kurulumdan sonra: yerel dashboard, judge değerlendirmesi, bütçeler, haftalık digest, Slack ve webhook uyarıları ve ekip toplu görünümü.',
      },
      howItWorks: {
        title: 'Nasıl çalışır',
        description:
          'Taksim kurulumdan ilk kanıta nasıl gider: oturumları içe aktarıp fiyatlandırır, tamamlanan turları değerlendirir, yalnızca iki judge’ın uzlaşmasını sayar ve raporlar. Neler saklanır, neler asla saklanmaz.',
      },
      clients: {
        title: 'İstemciler',
        description:
          'Taksim her kodlama istemcisiyle ne yapar: Claude Code, Codex, GitHub Copilot, Devin, OpenCode, Kilo Code, Pi ve diğerleri için gözlem, değerlendirme, gateway ve model yönlendirme.',
      },
      benchmark: {
        title: 'Pilot benchmark',
        description:
          'Taksim iç pilotunun yöntemi ve sınırları: görev seti, üç kol, gizli kabul kontrolleri, maliyet temeli ve yönlendirmenin sonuçlardan nasıl öğrendiği.',
      },
      contact: {
        title: 'Taksim ile görüşün — Team değerlendirmesi',
        description:
          'EdgeeTech’e AI mühendislik kullanımınızı anlatın ve Taksim Team’in size uygun olup olmadığını birlikte değerlendirelim.',
      },
    },
  },

  chrome: {
    skipToContent: 'İçeriğe geç',
    brandHome: 'Taksim ana sayfa',
    brandTagline: 'EdgeeTech tarafından',
    primaryNav: 'Ana gezinme',
    mobileNav: 'Mobil gezinme',
    openNav: 'Gezinmeyi aç',
    nav: {
      how: 'Nasıl çalışır',
      clients: 'İstemciler',
      pricing: 'Fiyatlandırma',
      docs: 'Dokümanlar',
      benchmark: 'Pilot benchmark',
    },
    talkToUs: 'Bize ulaşın',
    install: 'Taksim’i ücretsiz edinin',
    footer: {
      tagline: 'AI kodlama ajanları için yerel öncelikli bir kontrol düzlemi.',
      productNav: 'Taksim alt bilgi',
      legalNav: 'Yasal alt bilgi',
      legal: 'Yasal',
      privacy: 'Gizlilik',
      terms: 'Koşullar',
      company: 'EdgeeTech Ltd.',
    },
    language: {
      label: 'Dil',
    },
    untranslated: 'Bu sayfa şimdilik İngilizce.',
    trust: {
      eyebrow: 'Güven ve Uyumluluk',
      title: 'Ciddi mühendislik ekiplerinin beklediği kontrolleri kuruyoruz.',
      soc2: 'SOC 2 — Süreç devam ediyor',
      iso: 'ISO 27001 — Süreç devam ediyor',
      underway: 'Sertifikasyon süreci devam ediyor.',
    },
  },

  notFound: {
    title: 'Bu sayfa burada değil.',
    body: 'Adres değişmiş olabilir. Ürün tanıtımına ya da teknik dokümantasyona göz atabilirsiniz.',
    home: 'Ana sayfaya dön',
    docs: 'Dokümanları okuyun',
  },

  home: {
    hero: {
      title: 'En üst düzey zekâ, yalnızca iş gerektirdiğinde.',
      lede: 'Taksim, kodlama ajanlarınız için yerel bir kontrol düzlemidir. Her oturumu fiyatlandırır; hangi işin en üst modele ihtiyaç duyduğunu ve daha ucuz bir modelin işi ne zaman görebileceğini gösterir.',
      trust: 'Kendi makinenizde çalışır. Taksim hesabı gerekmez. EdgeeTech prompt’larınızı veya kodunuzu almaz.',
      seeHow: 'Nasıl çalıştığını görün',
      installLabel: 'Windows’a tek satır PowerShell ile kurun',
      installGuide: '3 adımda kolay kurulum',
    },
    valuesLabel: 'Taksim ne yapar',
    valueProps: [
      {
        title: 'Her oturum, fiyatıyla.',
        body: 'Model, repo ve göreve göre, cache dahil. API key’de faturalanan dolar; subscription’da faturalanmayan, liste fiyatıyla kota.',
      },
      {
        title: 'Daha ucuz model yeterli miydi?',
        body: 'Bir LLM judge tamamlanan turları değerlendirir. Yalnızca biri güçlü iki judge’ın uzlaştığı kararlar sayılır.',
      },
      {
        title: 'Tasarımı gereği gizli.',
        body: 'Yalnızca metadata saklayan yerel bir binary: prompt, yanıt, kod, dosya yolu ya da kimlik bilgisi yok.',
      },
    ],
    pilot: {
      tag: 'İç pilot',
      eyebrow: '{tasks} kodlama görevi · {totalRuns} koşu · kendi Claude Team aboneliğimiz',
      title: '{costSavingPct} daha düşük maliyet. Daha çok kabul edilen görev.',
      lede: 'Aynı kodlama görevlerini üç şekilde koştuk: hep Opus, hep Sonnet ve seçimi Taksim’e bırakarak. Her koşuyu gizli otomatik kontroller notladı.',
      bigCaption: 'hep Opus’a göre daha düşük maliyet',
      vs: 'vs',
      kpiAccepted: 'Taksim yönlendirmesiyle kabul',
      kpiAcceptedSub: 'Hep Opus: {n}',
      kpiPerAccepted: 'Kabul edilen görev başına maliyet',
      coldStart: 'Soğuk başlangıç: geçmiş yok, geri bildirim yok. Taksim düzelttiğiniz görevlerden öğrenir.',
      chart: {
        title: 'Üç kol, her biri {runsPerArm} koşu',
        subtitle:
          'Kabul = kapsam, teslim, regresyon ve davranış kontrollerinin hepsi geçti',
        arms: {
          opus: 'Hep Opus',
          sonnet: 'Hep Sonnet',
          taksim: 'Taksim yönlendirmesi',
        },
        taksimModel: 'Opus’tan başlar, Taksim seçer',
        cost: 'Maliyet',
        accepted: 'Kabul',
        acceptedOf: '{total} koşunun {n} tanesi kabul edildi',
        perAccepted: 'kabul edilen görev başına',
      },
      mix: {
        title: 'Taksim neyi seçti',
        body: '{runsPerArm} koşunun {servedSonnet}’sında Sonnet. Opus yalnızca {servedOpus} koşuda kaldı; ikisi de en zor dokümantasyon ve izin görevindeydi, ikisi de kabul edildi.',
        label:
          'Taksim koşuları: {total} koşudan {sonnet} tanesi Sonnet, {opus} tanesi Opus.',
      },
      learn: {
        tag: 'Sonuçlardan öğrenir',
        title: 'Bir kez reddedildi, unutulmadı.',
        body: 'Taksim tahmine göre değil, gerçekte ne olduğuna göre yönlendirir. Mevcut sürümde zaten var.',
        steps: [
          {
            title: 'Önce ucuzu dene',
            body: 'Görev uygunsa önce daha ucuz model denenir. En fazla bir kademe: Opus’tan Sonnet’e.',
          },
          {
            title: 'Reddi yakala',
            body: 'Taksim bunu kaydeder. Hatırlamanız gereken bir komut yok.',
          },
          {
            title: 'Güçlü modeli koru',
            body: 'Aynı görev yeniden geldiğinde, ya da yeterli kanıtı olan bir repo veya görev sınıfında, güçlü model kalır.',
          },
          {
            title: 'Tart, sonra unut',
            body: 'Üç kabul bir redden ağır basar. 14 günden eski kanıt düşer. Görevden yalnızca anahtarlı bir hash saklanır; prompt ya da yanıt metni asla.',
          },
        ],
        signalsLabel: 'Ret sinyalleri',
        signals: ['CI', 'Evaluator', 'Oturum içi judge'],
        reply: '“Hayır, yanlış olmuş”',
        replySoon: 'Bir sonraki sürümde',
        replyNew: 'Yeni',
        loopBack: 'Her sonuç bir sonraki seçimi besler.',
      },
      case: {
        tag: 'Testlerimizden',
        title: 'Bir tekilleştirme görevi',
        fails: 'Sonnet 7 koşunun 7’sinde başarısız',
        after: 'Tek bir retten sonra',
        reason: 'Taksim görevi Opus’ta tutar: `OUTCOME_LEARNED_KEEP_START`.',
        verified:
          '2026-10-15’te canlı doğrulandı: resume sırasında yapılan düzeltme otomatik olarak kaydedildi ve aynı görevin sonraki koşusu Opus’ta kaldı.',
      },
      warm: {
        tag: 'Sıcak tekrar koşusu',
        title: 'Düzeltilen görevler: {correctedColdRejected} hata → {correctedWarmRejected}',
        cold: 'Soğuk başlangıç',
        warm: 'Düzeltmelerden sonra',
        acceptedOf: '{total} koşudan {n} kabul',
        srSummary:
          'Düzeltilen {correctedTasks} görevde soğuk başlangıçta {total} koşudan {cold} tanesi, düzeltmelerden sonra {total} koşudan {warm} tanesi kabul edildi.',
        overall:
          'Genel sonuç yine {warmAccepted}/{warmRuns}: Sonnet daha önce geçen üç başka görevde tökezledi. Taksim bunları da bir sonraki düzeltmeden öğrenir.',
        cost: 'Sıcak koşuların {warmRuns}’inin {warmServedOpus}’inde Opus kullanıldı. Maliyet {warmCost} (soğukta {taksimCost}); hep Opus’a göre yine {warmSavingPct} daha düşük.',
      },
      footnote:
        'İç pilot; bağımsız bir benchmark değildir. 2026-10-15’te iki yarıda koşuldu: ilki o günün daha önceki Taksim sürümüyle, ikincisi mevcut sürümle; tek bir Claude Team aboneliğinde Claude Code CLI. Her yarı soğuk başladı, önceden kaydedilmiş hiçbir sonuç geçmişi yoktu. 5 kategoride {tasks} görev (sınırlı özellik, hata onarımı, yapılandırma geçişi, refactor, araştırma ve dokümantasyon), kolaydan zora; 3 kol × {repetitions} tekrar = {totalRuns} koşu. 30 görevlik havuzdan bir görev, test düzeneğinden kaynaklandığı için dışarıda bırakıldı. Sonuçlar yalnızca bu pilot için geçerlidir. Maliyetler Anthropic liste fiyatlarıyla API eşdeğeridir; subscription’da bunlar fatura değil, plan kotasıdır. Taksim yalnızca Claude modelleri arasında geçiş yapar.',
      note: 'İç pilot; bağımsız bir benchmark değildir. Maliyetler API eşdeğeri liste fiyatlarıdır; Taksim yalnızca Claude modelleri arasında geçiş yapar.',
      notMeasured: 'ölçülmedi',
      undefinedPerAccepted: 'tanımsız (kabul edilen koşu yok)',
      methodLink: 'Yöntem, görev seti ve sınırlar',
    },
    how: {
      title: 'Üç adımda nasıl çalışır.',
      body: 'Kodlama ajanlarınızı bugün nasıl kullanıyorsanız öyle kullanmaya devam edin. Taksim, onların zaten diske yazdıklarıyla çalışır.',
      steps: [
        {
          title: 'Kurun ve içe aktarın',
          body: 'Tek satır, Taksim’i yalnızca sizin kullanıcınız için kurar. Setup kodlama ajanlarınızı bulur; zaten tuttukları geçmişi içe aktarır ve fiyatlandırır.',
          detail: 'taksim setup',
        },
        {
          title: 'Değerlendirin',
          body: 'Bir LLM judge tamamlanan turları değerlendirir. Bir karar yalnızca iki judge uzlaştığında ve en az biri güçlü olduğunda sayılır.',
          detail: 'taksim judge enable --in-session',
        },
        {
          title: 'Kanıtı görün',
          body: 'Yerel bir dashboard ve haftalık rapor: harcama, kota, model dağılımı ve daha ucuz bir modelin ne kadar tasarruf ettirebileceği. Taksim modelinizi asla sessizce değiştirmez.',
          detail: 'taksim dashboard',
        },
      ],
      more: 'Adım adım tüm akış',
    },
    modes: {
      title: 'Subscription, API key, özel: farklı ekonomiler.',
      body: 'Taksim bu üçünü ayrı tutar; çünkü neyin optimize edilebileceği, işi kimin faturaladığına ve istek üzerinde ne kadar yetkiniz olduğuna bağlıdır.',
      currentLabel: 'Mevcut sürüm',
      items: [
        {
          name: 'Subscription planları',
          economics: 'Claude ve ChatGPT planları: dahil kullanım ve kota pencereleri. API eşdeğeri liste fiyatı olarak, faturalanan dolar değil kota olarak etiketlenip gösterilir.',
          current: 'Yerel geçmiş ve hook’lar üzerinden; kota okumaları ve değerlendirmeyle gözlemlenir. Pro, Max veya Team girişiyle Claude Code için yalnızca Claude modelleri arasında geçiş isteğe bağlı açılabilir (`taksim routing subscription on`); aksi halde istekler istemcinizden doğrudan sağlayıcıya gider ve Taksim modeli, eforu veya context’i değiştirmez.',
        },
        {
          name: 'Kendi API key’iniz',
          economics: 'Anthropic ve OpenAI API key’leri: token başına faturalanan dolar.',
          current: 'Yukarıdakilerin tümü; ayrıca taksim claude veya taksim codex ile başlattığınız oturumlarda isteğe bağlı yerel gateway, consensus kararlarından yönlendirme önerileri ve taksim claude oturumları için modelinize geri dönen, isteğe bağlı otomatik yönlendirme.',
        },
        {
          name: 'Özel ve yerel modeller',
          economics: 'Kendi donanımınız veya ayrılmış kapasite: token başına fiyat değil, işlem gücü ve kapasite.',
          current: 'Mevcut sürümde bir yönlendirme hedefi değil. Yerel bir Ollama modeli judge olarak kullanılabilir; OpenCode, Kilo Code, Pi ve Cline oturumları hangi sağlayıcıyı kullanırlarsa kullansınlar gözlemlenir.',
        },
      ],
      futureTitle: 'Ne değişebilir, ne değişmez',
      futureBody: 'Subscription yönlendirmesi isteğe bağlıdır, varsayılan olarak kapalıdır ve yalnızca kendi claude.ai girişinizdeki Claude Code ile sınırlıdır. Taksim yalnızca base URL’yi ayarlar, girişinizi okumadan, kopyalamadan ve loglamadan değiştirmeden iletir ve yalnızca Claude modelleri arasında geçiş yapar; üçüncü taraf modellere asla. EdgeeTech, Anthropic koşullarını Claude modelleri arasında seçime izin veren ve üçüncü taraf modelleri yasaklayan şekilde okur; bu, Anthropic onayı değildir. Anthropic’in Claude Code için Legal and compliance sayfası, Claude.ai kimlik bilgilerine üçüncü taraf aracılığını kısıtlıyor; bu yüzden açıp açmamaya siz karar verirsiniz. ChatGPT planındaki Codex yalnızca gözlemlenir; çünkü OpenAI proxy yolunun plan, kota ve workspace denetimlerini koruduğu gösterilmedi. Sağlayıcı hakları ve workspace politikası belirleyici olmaya devam eder.',
      summary: [
        'Faturalanan dolar değil, kota olarak gösterilir. Varsayılan olarak gözlemlenir; yalnızca-Claude yönlendirmesi isteğe bağlıdır.',
        'Token başına faturalanır. Taksim üzerinden başlattığınız oturumlarda isteğe bağlı yerel gateway ve yönlendirme.',
        'Mevcut sürümde bir yönlendirme hedefi değil. Yerel bir Ollama modeli judge olabilir.',
      ],
      more: 'Faturalama modları ayrıntılı',
    },
    clients: {
      title: 'Taksim her istemciyle ne yapar',
      body: 'Taksim her sağlayıcının koşulları dahilinde çalışır. Claude subscription’ındaki Claude Code, yalnızca-Claude yönlendirmesini siz açmadıkça yalnızca gözlemlenir; ChatGPT planındaki Codex her zaman yalnızca gözlemlenir. Diğer canlı yönlendirme, kendi API key’inize faturalanan trafikle sınırlıdır.',
      listLabel: 'Desteklenen kodlama istemcileri',
      more: 'Tüm istemci tablosunu görün',
    },
    privacy: {
      title: 'İşinizin şeklini saklar, kelimelerini asla.',
      points: [
        'Saklananlar: istemci, model, token, maliyet ve judge kararları.',
        'Asla saklanmayanlar: prompt’lar, yanıtlar, kaynak kod, kimlik bilgileri ve yerel dosya yolları.',
        'Kendi key’inizle çalışan uzak bir judge, yalnızca siz izin verdikten sonra kısaltılmış alıntılar alır. Ollama ile değerlendirme makinenizde kalır.',
      ],
      link: 'Gizlilik modelini okuyun',
      more: 'Neler saklanır, ayrıntılı',
    },
    pricingTitle: 'Geliştiricilere ücretsiz. Ekiplere ücretli.',
    pricingMore: 'Planları karşılaştırın',
    faqTitle: 'Sorular',
    faqMore: 'Diğer sorular',
    faq: [
      {
        q: 'Taksim, Claude veya ChatGPT subscription’ımda modelimi değiştirir mi?',
        a: 'Varsayılan olarak hayır. Claude Pro, Max veya Team girişinde `taksim routing subscription on` ile isteğe bağlı açabilirsiniz; bu durumda `taksim claude` yalnızca Claude modelleri arasında, kuruluşunuzun izin verdiği modeller içinde geçiş yapar ve --model ile /model seçimlerinizi başlangıç modelinden uzak tutar. Kimlik bilgisi girişiniz olarak kalır, kullanım subscription’da kalır. Ayar kapalıyken ve ChatGPT planındaki Codex için her zaman Taksim yalnızca gözlemler. Taksim’in Opus’a çıkardığı istekler plan kotasını daha hızlı tüketir. Claude masaüstü uygulaması (Code sekmesi) gözlemlenir, yönlendirilmez: uygulama her oturum için kendi API uç noktasını belirler. `taksim desktop on`, terminalden başlatılan düz `claude` CLI oturumlarını yönlendirir.',
      },
      {
        q: 'Ücretsiz sürümü işte kullanabilir miyim?',
        a: 'Evet. CLI her birey için ücretsizdir. Şirketlerin ödeme yaptığı şey Team özellikleridir.',
      },
      {
        q: 'Makinemden dışarı bir şey çıkıyor mu?',
        a: 'Uzakta çalışan bir judge (kendi API key’iniz veya Jev) seçmediğiniz ya da bir ekip export’u paylaşmadığınız sürece hayır. Uzak judge’lar yalnızca değerlendirdikleri turların kısaltılmış alıntılarını alır. Export’lar yalnızca metadata içerir.',
      },
      {
        q: '“Tasarruf edilebilirdi” rakamı garantili mi?',
        a: 'Hayır. Bu bir tahmindir: iki judge’ın daha ucuz bir seviyenin yeterli olduğunda uzlaştığı turları sayar ve her rapor örneklem büyüklüğünü gösterir.',
      },
    ],
    cta: {
      title: 'Geçen haftanızın gerçekte neye ihtiyaç duyduğunu öğrenin.',
      body: 'taksim setup, istemcilerinizin zaten tuttuğu geçmişi içe aktarır ve ilk raporunuzu tek komutla yazar.',
      docs: 'Dokümanları okuyun',
    },
  },

  howItWorks: {
    eyebrow: 'Nasıl çalışır',
    title: 'Transkriptten karara, adım adım.',
    lede: 'Taksim’in yaptığı her şey, kodlama ajanlarınızın zaten tuttuğu geçmişten, sizin makinenizde çalışır. Bu sayfa ilk kanıtı, judge’ı, haftalık raporu ve Taksim’in neyi sakladığını anlatır.',
    firstValue: {
      title: 'Kurulumdan ilk kanıta.',
      body: 'Ücretsiz Developer planı, kodlama ajanlarınızın zaten tuttuğu geçmişten başlar; böylece ilk raporunuz daha önce yaptığınız işi kapsar.',
      steps: [
        {
          title: 'Kurun',
          body: 'Windows’ta tek satır PowerShell ya da macOS’ta tek bir Terminal komutu; yalnızca sizin kullanıcınız için, yönetici yetkisi olmadan kurulur. Windows kurulum betiği yayımlanmış checksum’ları kontrol eder.',
          detail: '',
        },
        {
          title: 'Setup’ı çalıştırın',
          body: 'Setup bu makinedeki kodlama ajanlarını bulur ve her birinin subscription mı yoksa API key mi kullandığını gösterir.',
          detail: 'taksim setup',
        },
        {
          title: 'Mevcut oturumları içe aktarın',
          body: 'Setup, bu ajanların zaten tuttuğu geçmişi içe aktarır ve fiyatlandırır. İstediğiniz zaman yeniden içe aktarabilirsiniz.',
          detail: 'taksim history import',
        },
        {
          title: 'Dashboard’u açın',
          body: 'Yalnızca sizin makinenizde çalışan, salt okunur bir dashboard.',
          detail: 'taksim dashboard',
        },
        {
          title: 'Harcamayı, kotayı, model dağılımını ve kanıtı görün',
          body: 'Haftalık rapor harcamayı ve model dağılımını, cache verimliliğini, judge kapsamını ve henüz fiyatlandırılmamış olanları gösterir. Subscription planında taksim insights quota, 5 saatlik ve haftalık limitlerinizi ekler.',
          detail: 'taksim report weekly',
        },
        {
          title: 'Kalite kanıtı toplamaya başlayın',
          body: 'Oturum içi değerlendirmeyi açın, ardından ikinci bir judge ekleyin: yerel bir Ollama modeli ya da kendi Anthropic API key’iniz; geçmişiniz üzerinde taksim judge run ile çalışır. Tek başına bir karar tek judge olarak kalır ve asla sayılmaz; yalnızca biri güçlü olan iki judge’ın uzlaşması sayılır.',
          detail: 'taksim judge enable --in-session',
        },
      ],
    },
    problem: {
      title: 'Her tur varsayılan olarak en büyük modelle çalışır.',
      body: 'Kodlama ajanları, en üst seviyeyi her şey için açık bırakmayı kolaylaştırır: bir değişkeni yeniden adlandırmak, bir log okumak, bir test yazmak. Fatura tek bir rakam olarak gelir; hangi turun gerçekten o kadar büyük bir modele ihtiyaç duyduğunu anlamanın yolu yoktur.',
      body2: 'Taksim bu rakamı yeniden turlara ayırır ve her biri için daha azının yetip yetmeyeceğini sorar.',
    },
    week: {
      title: 'Gerçek bir hafta',
      subtitle: 'Kurucunun kendi haftası, API eşdeğeri liste fiyatları',
      spend: 'Harcama',
      topShare: 'Opus veya Fable üzerindeki output token’ları',
      allSonnet: 'Her tur Sonnet ile çalışsaydı',
      srSummary: 'Output token’ları: %70 Opus ve Fable, %30 Sonnet ve daha küçük modeller.',
      tierTop: 'Opus ve Fable',
      tierMid: 'Sonnet ve daha küçükleri',
      caveat:
        'Her zaman Sonnet satırı bir öneri değil, bir karşı olgusal (counterfactual) senaryodur. Bu turların bir kısmı gerçekten en üst seviyeye ihtiyaç duydu; hangileri olduğunu bulmak judge’ın işidir.',
    },
    how: {
      title: 'Transkriptten karara.',
      body: 'Kodlama istemcilerinizi bugün nasıl kullanıyorsanız öyle kullanmaya devam edin. Taksim, onların zaten diske yazdıklarıyla çalışır.',
    },
    steps: [
      {
        title: 'İçe aktar',
        body: 'Taksim; Claude Code, Claude masaüstü uygulaması, Codex, GitHub Copilot, Devin, OpenCode, Kilo Code, Pi ve Agent Workstation’ın yerel geçmişini ve hook’larını okur. Her tur bir defter satırına dönüşür: model, token, cache, liste fiyatı maliyeti.',
        detail: 'taksim setup',
      },
      {
        title: 'Değerlendir',
        body: 'Bir LLM judge, tamamlanmış bir turu inceler ve araştırılabilecek daha ucuz bir seviye önerir. Uzlaşma bir tahmindir; daha ucuz modelin aynı sonucu üreteceğinin kanıtı değildir. Oturumunuzun içindeki Claude’u veya Codex’i, yerel bir Ollama modelini ya da kendi API key’inizle çalışan uzak bir judge’ı kullanabilirsiniz.',
        detail: 'taksim judge enable --in-session',
      },
      {
        title: 'Uzlaş',
        body: 'Bir karar yalnızca iki judge uzlaştığında ve en az biri güçlü bir judge olduğunda sayılır. Yalnızca zayıf judge’ların uzlaşması ve anlaşmazlıklar gösterilir ama asla sayılmaz; böylece tek bir hoşgörülü judge rakamı şişiremez.',
        detail: 'taksim judge status',
      },
      {
        title: 'Raporla',
        body: 'Yerel bir dashboard ve haftalık rapor: harcama, model dağılımı, cache verimliliği, judge kapsamı ve bir shadow policy’nin neleri değiştireceği. Shadow policy karşı olgusaldır. Taksim modelinizi asla sessizce değiştirmez.',
        detail: 'taksim dashboard',
      },
    ],
    report: {
      title: 'Tek komut, tek haftalık rapor.',
      body: 'Yerelde incelemek için taksim dashboard, tek başına çalışan bir HTML dosyası için taksim report weekly --html, ne kadar tasarruf edebileceğinizin tek sayfalık özeti için taksim digest komutunu çalıştırın. Raporun yapısı aşağıda, örnek rakamlarla.',
      docLabel: 'Örnek haftalık rapor',
      heading: 'Haftalık rapor',
      range: 'Son 7 gün, tüm istemciler',
      sample: 'Örnek rakamlar',
      spend: 'Harcama',
      spendSub: 'API eşdeğeri liste fiyatı, turların %97’si fiyatlandırıldı',
      judge: 'Judge',
      consensus: 'Consensus',
      weakConsensus: 'Zayıf consensus',
      disputed: 'Anlaşmazlık',
      singleJudge: 'Tek judge',
      judgeSub: 'Yalnızca consensus kararları sayılır.',
      shadow: 'Shadow policy',
      turns: 'tur',
      shadowSub: 'bir seviye aşağıda çalışabilirdi. Hiçbir şey değiştirilmedi.',
      nextActions: 'Sonraki adımlar',
      unpriced: 'Turların %3’ü fiyatlandırılmadı',
      reviewShadow: 'Shadow policy’nin neleri değiştireceğini inceleyin',
    },
    privacy: {
      title: 'İşinizin şeklini saklar, kelimelerini asla.',
      body: 'Taksim yerel bir binary’dir. Defter sizin makinenizde durur; ekip raporları ise her geliştiricinin paylaşmadan önce inceleyebildiği export’lardan üretilir.',
      link: 'Gizlilik modelini okuyun',
      storedTitle: 'Defterde saklananlar',
      stored: [
        'Tur başına istemci, model ve efor',
        'Token sayıları, cache kullanımı ve liste fiyatı maliyeti',
        'Judge kararları: seviye, güven, işaretler',
      ],
      neverTitle: 'Asla saklanmayanlar',
      never: ['Prompt’lar ve model yanıtları', 'Kaynak kod ve diff’ler', 'Kimlik bilgileri ve yerel dosya yolları'],
      judgingTitle: 'Değerlendirme nerede yapılır',
      judges: [
        {
          name: 'Oturumunuzdaki Claude',
          body: 'Zaten içinde bulunduğu oturumun turlarını değerlendirir. İsteğe bağlıdır, reddedilebilir.',
        },
        {
          name: 'Anthropic API key’iniz veya TypeSafe Jev',
          body: 'Yalnızca kendi key’inizle açıkça izin verdikten sonra kısaltılmış alıntılar alır.',
        },
        { name: 'Ollama', body: 'Yerel Ollama sunucusuyla değerlendirme içeriği makinenizde kalır.' },
      ],
      subscriptionTitle: 'Claude subscription’ında yönlendirme isteğe bağlıdır',
      subscriptionBody:
        'Varsayılan olarak Taksim, Claude ve ChatGPT planlarında yerel geçmişi ve hook’ları okur, modeli değiştirmez. `taksim routing subscription on` ile açarsanız, Pro, Max veya Team girişindeki `taksim claude` yerel gateway üzerinden geçer. Yalnızca base URL ayarlanır; kimlik bilgisi girişiniz olarak kalır, Taksim onu asla okumaz, kopyalamaz veya loglamaz ve kullanım subscription’da kalır. Taksim yalnızca Claude modelleri arasında geçiş yapar ve yalnızca Taksim üzerinden başlattığınız oturumlarda. ChatGPT planındaki Codex yalnızca gözlemlenir.',
      desktopTitle: 'Claude masaüstü uygulaması gözlemlenir, yönlendirilmez',
      desktopBody:
        'Claude masaüstü uygulamasının Code sekmesi gözlemlenir (maliyet raporları, oturum içi judge), yönlendirilmez. Uygulama her oturum için kendi API uç noktasını belirlediğinden yönlendirme henüz mümkün değil; bu oturumlar doğrudan Anthropic’e gider. `taksim desktop on`, o profilde terminalden başlatılan düz `claude` CLI oturumlarını yönlendirir; `taksim desktop off` kapatır, `taksim desktop status` durumu gösterir. Varsayılan olarak kapalıdır ve yalnızca Windows’ta test edilmiştir. Her Windows oturumunda tek bir gateway çalışır. Gateway kullanılamıyorsa oturumlar doğrudan Anthropic’e gider. Yalnızca Claude modelleri kullanılır; kuruluşunuzun `availableModels` ayarı, --model ve /model dikkate alınır. Girişiniz değiştirilmeden iletilir, okunmaz ve saklanmaz.',
    },
    faqTitle: 'Diğer sorular',
    faq: [
      {
        q: 'Fiyatlandırma ne kadar eksiksiz?',
        a: 'Taksim kaydedilen kullanımı, Claude Opus 5.5 ve Fable 5.1 dahil, yayımlanmış liste fiyatlarıyla fiyatlandırır. Liste fiyatı olmayan modeller hariç tutulur, asla ücretsiz sayılmaz ve her rapor fiyatlandırma kapsamını gösterir.',
      },
      {
        q: 'Hangi platformlar destekleniyor?',
        a: 'Windows x64 ve macOS 14 veya üzeri. Apple Silicon’da kurulum ve kaldırma kullanıcı tarafından denendi; Intel paketi çapraz derlenmiş önizleme durumunda. Platform ayrıntıları için kolay kurulum rehberine bakın.',
      },
      {
        q: 'Taksim hangi turları değerlendirebilir?',
        a: 'Claude Code, Codex, OpenCode, Kilo Code, Pi ve Devin Desktop turlarını. OpenCode, Kilo Code ve Pi turları, Claude seviyesindeki modellerle çalıştıklarında değerlendirilir. GitHub Copilot, Devin CLI ve Agent Workstation oturumları içe aktarılır ve fiyatlandırılır, ancak henüz değerlendirilmez.',
      },
    ],
  },

  benchmark: {
    eyebrow: 'Pilot benchmark',
    title: 'Pilotu nasıl koştuk.',
    lede: 'Ana sayfadaki pilot sonuçlarının arkasındaki yöntem, kontroller ve sınırlar.',
    summaryLabel: 'Kısaca.',
    sections: [
      {
        title: 'Görev seti',
        body: '5 kategoride {tasks} kodlama görevi: sınırlı özellik, hata onarımı, yapılandırma geçişi, refactor ve araştırma ile dokümantasyon; kolaydan zora. Havuzda 30 görev vardı; biri (`ho-ref-split-package`), başarısızlıkları modelden değil test düzeneğinden kaynaklandığı için dışarıda bırakıldı.',
      },
      {
        title: 'Üç kol',
        body: 'Her görev üç şekilde koşuldu: hep Opus (`claude-opus-5-5`), hep Sonnet (`claude-sonnet-5-5`) ve Opus’tan başlayıp seçimi Taksim’e bırakan Taksim yönlendirmesi. Her kol her görevi iki kez koştu: 3 kol × {repetitions} tekrar = {totalRuns} koşu, kol başına {runsPerArm}.',
      },
      {
        title: 'Kabul kontrolleri',
        body: 'Her koşuyu gizli otomatik kontroller notladı. Bir koşu yalnızca kapsam, teslim, regresyon ve davranış kontrollerinin hepsi geçtiğinde kabul edilir.',
      },
      {
        title: 'Maliyet temeli',
        body: 'Maliyetler Anthropic liste fiyatlarıyla API eşdeğeridir. Koşular bir Claude Team aboneliğinde yapıldı; yani fatura değil, plan kotası tükettiler. Kabul edilen görev başına maliyet, bir kolun toplam maliyetinin kabul edilen koşu sayısına bölümüdür.',
      },
      {
        title: 'Ortam: soğuk başlangıç',
        body: '2026-10-15’te iki yarıda koşuldu: ilki o günün daha önceki Taksim sürümüyle, ikincisi mevcut sürümle. Her yarı, önceden sonuç geçmişi olmayan yeni bir `TAKSIM_HOME` içinde çalıştı; yani Taksim’in öğrenebileceği bir şey yoktu. Tek bir Claude Team aboneliğinde Claude Code CLI.',
      },
      {
        title: 'Sonuçlar',
        body: 'Hep Opus: {runsPerArm} koşunun {opusAccepted}’si kabul, toplam {opusCost}, kabul edilen görev başına {opusPerAccepted}. Hep Sonnet: {runsPerArm}’de {sonnetAccepted}, {sonnetCost}, {sonnetPerAccepted}. Taksim yönlendirmesi: {runsPerArm}’de {taksimAccepted}, {taksimCost}, {taksimPerAccepted}. Taksim {servedSonnet} koşuda Sonnet’i seçti, {servedOpus} koşuda Opus’u korudu; ikisi de en zor dokümantasyon ve izin görevindeydi, ikisi de kabul edildi.',
      },
      {
        title: 'Başarısız koşular',
        body: 'Taksim yönlendirmesi {taksimRejected} koşuda başarısız oldu: tekilleştirme görevinde iki kez (hep Opus bu görevde bir kez, hep Sonnet iki kez başarısız oldu), feature-flags ve cron görevlerinde birer kez.',
      },
      {
        title: 'Sıcak tekrar koşusu: kurulum',
        body: 'Soğuk koşulardan sonra, yönlendirilen her koşunun gizli kontrol sonucu Taksim’e bir CI sonucu olarak bildirildi (`taksim routing outcome record --source ci`); gerçek kullanımda CI’ın yaptığı gibi. Bu, {correctedTasks} görevde {taksimRejected} ret verdi: feature-flags 1, cron 1, tekilleştirme 2. Ardından yalnızca yönlendirme kolu {tasks} görevin hepsini iki kez, {warmRuns} koşu, aynı Taksim dizinlerinde, artık bu geçmişle yeniden koştu.',
      },
      {
        title: 'Sıcak tekrar koşusu: sonuçlar',
        body: 'Düzeltilen {correctedTasks} görevde Taksim her seferinde Opus’u korudu (`OUTCOME_LEARNED_KEEP_START`, kapsam `TASK`) ve {correctedRuns} koşunun hepsi geçti: bu görevlerdeki reddedilen koşular soğukta {correctedColdRejected} iken sıcakta {correctedWarmRejected} oldu. Genelde yönlendirme kolu {warmRuns} koşudan {warmAccepted} kabulde kaldı; çünkü Sonnet, soğukta geçen {warmMissTasks} başka görevde {warmMisses} koşuyu kaçırdı (resolver 2, shipping-registry 1, rename-kwarg 1). Bu, Sonnet’in koşudan koşuya değişkenliğidir ve bu hatalar da sırası gelince öğrenilir. Opus sıcak koşuların {warmRuns}’inin {warmServedOpus}’inde kullanıldı (soğukta {servedOpus}). Maliyet {warmCost} oldu (soğukta {taksimCost}); hep Opus’un {opusCost} maliyetine göre yine {warmSavingPct} daha düşük; kabul edilen görev başına {warmPerAccepted}.',
      },
      {
        title: 'Öğrenme neyi yapar, neyi yapmaz',
        body: 'Öğrenme, düzeltilen bir görevi güçlü modelde tutar. O modelin daha sık başarılı olmasını sağlamaz: düzeltilen bir görev için tavan, güçlü modelin kendi kabul düzeyidir ve genel fark kendiliğinden kapanmaz. Sıcak tekrar koşusu aynı iç pilotun parçasıdır; bağımsız bir benchmark değildir.',
      },
      {
        title: 'Sınırlar',
        body: 'İç pilot; bağımsız bir benchmark değildir. Sonuçlar yalnızca bu pilot için geçerlidir. Taksim yalnızca Claude modelleri arasında geçiş yapar; üçüncü taraf modellere asla.',
      },
    ],
    learn: {
      title: 'Yönlendirme sonuçlardan nasıl öğrenir',
      body: 'Ana sayfadaki öğrenme döngüsü, daha ayrıntılı.',
      items: [
        'En fazla bir kademe: görev uygunsa ilk gerçek istek Opus’tan Sonnet’e iner; değilse başlangıç modeli kalır.',
        'Retler komut gerekmeden kaydedilir: başarısız bir CI koşusu, bir evaluator, oturum içi judge kararı ya da “Hayır, yanlış olmuş” gibi bir düzeltme yanıtı (Türkçe veya İngilizce). Bir reddi `taksim routing outcome record --session <id> --result rejected` ile kendiniz de bildirebilirsiniz.',
        'Bir retten sonra Taksim, aynı görev yeniden başladığında başlangıç modelini korur; yeterli kanıt olduğunda bir repo veya görev sınıfı için de.',
        'Üç kabul bir redden ağır basar. 14 günden eski kanıt düşer.',
        'Yalnızca anahtarlı bir görev parmak izi saklanır; prompt ya da yanıt metni asla. `taksim routing outcome list` kaydedilenleri gösterir, `taksim memory forget` siler.',
        'Öğrenme yalnızca Taksim’in yönlendirdiği yerde geçerlidir: kendi API key’inizdeki `taksim claude` oturumları ya da `taksim routing subscription on` ile açtıktan sonra Claude subscription’ı.',
      ],
    },
    data: {
      title: 'Rakamların dayandığı veri',
      body: 'Ana sayfadaki ve bu sayfadaki her rakam, sayfaya elle yazılmış değil, pilot sonuçlarının tek bir kısaltılmış (redacted) anlık görüntüsünden hesaplanır.',
      snapshot: 'Anlık görüntü',
      dates: 'Koşu tarihi',
      catalog: 'Katalog',
      accounting: 'Muhasebe',
      effort: 'Çaba düzeyi',
      sources: 'Kaynak raporlar (SHA-256)',
      modelsTitle: 'Modeller',
      notAcceptedTitle: 'Kabul edilmeyen koşular',
      runsTitle: 'Her koşu',
      runsBody: 'Kabul edilmeyenler dahil tüm koşular listelenir. Kaydedilmemiş bir maliyet $0 değil, ölçülmedi olarak gösterilir.',
      accepted: 'kabul',
      notAccepted: 'kabul edilmedi',
      cols: { phase: 'Aşama', task: 'Görev', arm: 'Kol', status: 'Durum', result: 'Sonuç', served: 'Sunulan', turns: 'Tur', cost: 'Maliyet' },
      phases: { cold: 'Soğuk', warm: 'Sıcak' },
      arms: { baseline: 'Hep Opus', fixed: 'Hep Sonnet', routed: 'Taksim yönlendirmesi' },
      routedModel: 'Taksim seçer',
    },
    back: 'Sonuçlara dön',
  },

  ledger: {
    recording: 'kaydediliyor',
    paused: 'duraklatıldı',
    spend: 'Bu haftaki harcama, liste fiyatı',
    counterfactual: 'Her zaman Sonnet senaryosu',
    overSized: 'Gereğinden büyük, ekranda',
    caption: 'Kaydedilmiş AI kodlama turlarından temsili bir akış',
    time: 'Saat',
    client: 'İstemci',
    model: 'Model',
    cost: 'Maliyet',
    verdict: 'Karar',
    verdicts: {
      sonnetEnough: 'Sonnet yeterliydi',
      haikuEnough: 'Haiku yeterliydi',
      opusEnough: 'Opus yeterliydi',
      rightSize: 'Doğru boyut',
      neededTop: 'En üst seviye gerekliydi',
      neededOpus: 'Opus gerekliydi',
      disagree: 'Judge’lar anlaşamadı',
    },
    note: 'Temsili akış. Toplamlar, kurucunun kendi haftasının API eşdeğeri liste fiyatlarına göre modellenmiştir.',
  },

  plans: {
    developer: {
      name: 'Developer',
      price: 'Ücretsiz',
      sub: 'Evde ya da işte, her birey için ücretsiz.',
      value: 'Kurun ve kullanın. Hesap ya da kart gerekmez.',
      features: [
        'Zaten sahip olduğunuz geçmişle çalışır: Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code, Pi ve Agent Workstation',
        'Yerel dashboard, haftalık rapor, digest ve status line',
        'Model, repo ve istemciye göre harcama, cache verimliliği ve subscription kota pencereleri',
        'İki judge consensus’u ve seçtiğiniz judge ile (oturum içi Claude veya Codex, Ollama, kendi API key’iniz) tur tur değerlendirme',
        'Yerelde tutulan karar hafızası ve doğrulama kanıtı',
        'Kendi API key’inize faturalanan trafik için isteğe bağlı canlı yönlendirme',
        'Tasarımı gereği gizli: defterde prompt, yanıt veya kod yok',
      ],
      cta: 'Taksim’i ücretsiz edinin',
    },
    team: {
      name: 'Team',
      price: '$8',
      per: 'aktif geliştirici başına, aylık',
      sub: 'Aylık en az $99. Yıllık faturalandırmada %20 indirim.',
      features: [
        'Geliştirici export’larından ekip toplu görünümü; barındırılan bir servis gerekmez',
        'Ekip lideri için haftalık tasarruf özeti',
        'İç maliyet dağıtımı veya müşteriye yeniden faturalandırma için repo ve göreve göre maliyet',
        'Geliştirici, repo ve ekip bazında bütçe uyarıları (bilgilendirme amaçlı; hiçbir şey engellenmez)',
        'Her geliştirici kendi export’unu oluşturur ve paylaşmadan önce inceleyebilir; export’lar dosya yollarını değil, repo takma adlarını içerir',
      ],
      cta: 'Ekip pilotu başlatın',
    },
  },

  pricing: {
    title: 'Geliştiricilere ücretsiz. Ekiplere ücretli.',
    lede: 'Developer planı, evde ya da işte, her birey için ücretsizdir: CLI’ı kurun ve kullanın, hesap gerekmez. Şirketler ekip toplu görünümü için ödeme yapar.',
    modesTitle: 'Taksim’in maliyeti nasıl saydığı, işin nasıl faturalandığına bağlıdır',
    faqTitle: 'Fiyatlandırma soruları',
    faq: [
      {
        q: 'Ücretsiz sürümü işte kullanabilir miyim?',
        a: 'Evet. CLI her birey için ücretsizdir. Şirketlerin ödeme yaptığı şey Team özellikleridir.',
      },
      {
        q: 'Taksim, Claude veya ChatGPT subscription’ımda modelimi değiştirir mi?',
        a: 'Varsayılan olarak hayır. Claude Pro, Max veya Team girişinde `taksim routing subscription on` ile isteğe bağlı açabilirsiniz; bu durumda `taksim claude` yalnızca Claude modelleri arasında, kuruluşunuzun izin verdiği modeller içinde geçiş yapar ve --model ile /model seçimlerinizi başlangıç modelinden uzak tutar. Kimlik bilgisi girişiniz olarak kalır, kullanım subscription’da kalır. Ayar kapalıyken ve ChatGPT planındaki Codex için her zaman Taksim yalnızca gözlemler. Taksim’in Opus’a çıkardığı istekler plan kotasını daha hızlı tüketir. Claude masaüstü uygulaması (Code sekmesi) gözlemlenir, yönlendirilmez: uygulama her oturum için kendi API uç noktasını belirler. `taksim desktop on`, terminalden başlatılan düz `claude` CLI oturumlarını yönlendirir.',
      },
      {
        q: '“Tasarruf edilebilirdi” rakamı garantili mi?',
        a: 'Hayır. Bu bir tahmindir: iki judge’ın daha ucuz bir seviyenin yeterli olduğunda uzlaştığı turları sayar ve her rapor örneklem büyüklüğünü gösterir.',
      },
      {
        q: 'Makinemden dışarı bir şey çıkıyor mu?',
        a: 'Uzakta çalışan bir judge (kendi API key’iniz veya Jev) seçmediğiniz ya da bir ekip export’u paylaşmadığınız sürece hayır. Export’lar yalnızca metadata içerir.',
      },
    ],
  },

  matrix: {
    caption: 'Taksim her kodlama istemcisi için neler yapabilir',
    regionLabel: 'İstemci destek tablosu, yatay kaydırılabilir',
    client: 'İstemci',
    states: {
      yes: 'Destekleniyor',
      no: 'Desteklenmiyor',
      unverified: 'Doğrulanmadı',
      optIn: 'İsteğe bağlı',
    },
    capabilities: {
      observe: {
        label: 'Gözlem',
        description:
          'Her oturumu yerel geçmiş, hook’lar veya istemcinin kendi oturum deposu üzerinden modele göre fiyatlandırır.',
      },
      judge: {
        label: 'Judge ve kanıt',
        description:
          'Bir LLM judge, daha ucuz bir model seviyesinin yeterli olup olmayacağını değerlendirir; consensus kararları yerel defterde kanıt olarak kalır.',
      },
      gateway: {
        label: 'Gateway',
        description:
          'İstekler Taksim’in 127.0.0.1 üzerindeki yerel gateway’inden geçer. API key trafiği için ve isteğe bağlı açarsanız Claude subscription trafiği için, Taksim üzerinden başlattığınız oturumlarda.',
      },
      context: {
        label: 'Context optimizasyonu',
        description:
          'Maliyeti düşürmek için istek context’ini değiştirmek veya kısaltmak. Mevcut sürümde hiçbir istemci için yok; cache guard yalnızca raporlar.',
      },
      route: {
        label: 'Model yönlendirme',
        description:
          'İsteğe bağlı canlı model seçimi; Taksim üzerinden başlattığınız oturumlarda: kendi API key’inizde ya da isteğe bağlı açtıktan sonra Claude Pro, Max veya Team girişinde. Subscription yönlendirmesi yalnızca Claude modelleri arasında geçiş yapar.',
      },
    },
    rows: {
      claudeCodePlan: {
        client: 'Claude Code',
        access: 'Free, Pro, Max, Team veya Enterprise planı',
        observe: 'Geçmiş içe aktarma, hook’lar ve status line.',
        judge: '',
        gateway: 'İsteğe bağlı (`taksim routing subscription on`), Pro, Max veya Team girişinde; varsayılan kapalı, aksi halde yerel olarak başlatılır.',
        context: '',
        route: 'İsteğe bağlı, yalnızca Claude modelleri; kimlik bilgisi girişiniz olarak kalır.',
      },
      claudeDesktop: {
        client: 'Claude masaüstü uygulaması',
        access: 'Claude planı',
        observe: 'Kullanıcı düzeyindeki bir hook ile yerel transkriptler.',
        judge: '',
        gateway: 'Code sekmesi henüz yönlendirilmiyor, yalnızca gözlemleniyor: uygulama her oturum için kendi API uç noktasını belirler. `taksim desktop on` terminaldeki düz `claude` oturumlarını yönlendirir.',
        context: '',
        route: 'Code sekmesi için henüz yok.',
      },
      claudeCodeApi: {
        client: 'Claude Code',
        access: 'Anthropic API key',
        observe: '',
        judge: '',
        gateway: 'İsteğe bağlı; taksim claude ile başlattığınız oturumlarda.',
        context: '',
        route: 'İsteğe bağlı; yerel gateway üzerinden, taksim claude ile başlattığınız oturumlarda.',
      },
      codexPlan: {
        client: 'Codex CLI',
        access: 'ChatGPT planı',
        observe: 'CODEX_HOME oturumlarından geçmiş içe aktarma.',
        judge: 'Geçmiş değerlendirmesi ve oturum içi Stop hook.',
        gateway: 'Mevcut sürüm: ChatGPT girişi yerel kalır.',
        context: '',
        route: 'Mevcut sürümde sunulmuyor.',
      },
      codexApi: {
        client: 'Codex CLI',
        access: 'OpenAI API key',
        observe: 'Geçmiş içe aktarma ve yerel gateway.',
        judge: '',
        gateway: 'İsteğe bağlı; taksim codex ile başlattığınız oturumlarda.',
        context: '',
        route: 'İsteğe bağlı; yerel gateway üzerinden, taksim codex ile başlattığınız oturumlarda.',
      },
      copilotPlan: {
        client: 'GitHub Copilot',
        access: 'Copilot planı',
        observe: 'Yerel Copilot CLI oturum deposundan kullanım içe aktarma.',
        judge: 'Henüz değil.',
        gateway: '',
        context: '',
        route: 'İstek anında yönlendirme yok. taksim copilot yalnızca başlangıç modelini seçer.',
      },
      devinCli: {
        client: 'Devin CLI',
        access: 'Devin planı',
        observe: 'Yerel Devin oturum deposundan geçmiş içe aktarma.',
        judge: 'Henüz değil.',
        gateway: '',
        context: '',
        route: 'İstek anında yönlendirme yok.',
      },
      devinDesktop: {
        client: 'Devin Desktop',
        access: 'Eski adıyla Windsurf, Devin planı',
        observe: 'Yerel ACP olay günlüğünden geçmiş içe aktarma.',
        judge: '',
        gateway: '',
        context: '',
        route: 'Yönlendirilmez. Proxy yok, model değişikliği yok.',
      },
      openCodeKilo: {
        client: 'OpenCode ve Kilo Code',
        access: 'Kendi sağlayıcı ayarlarınız',
        observe: 'Yerel oturum veritabanlarından geçmiş içe aktarma.',
        judge: 'Claude seviyesindeki modellerle çalışan turlar.',
        gateway: '',
        context: '',
        route: 'Sunulmuyor.',
      },
      pi: {
        client: 'Pi ve Oh My Pi',
        access: 'Kendi sağlayıcı ayarlarınız',
        observe: 'Yerel oturum dosyalarından geçmiş içe aktarma.',
        judge: 'Claude seviyesindeki modellerle çalışan turlar.',
        gateway: '',
        context: '',
        route: 'Sunulmuyor.',
      },
      agentWorkstation: {
        client: 'Agent Workstation',
        access: 'Kendi sağlayıcı ayarlarınız',
        observe: 'Yerel kullanım defterinden kullanım içe aktarma.',
        judge: 'Henüz değil.',
        gateway: '',
        context: '',
        route: 'Sunulmuyor.',
      },
      gemini: {
        client: 'Gemini CLI',
        access: 'Google oturumu veya kendi API anahtarınız',
        observe: 'Yerel JSON ve JSONL sohbet geçmişi; bilinmeyen fiyatlar bilinmeyen olarak kalır.',
        judge: 'Model seviyesi tanınan, kaydedilmiş metin turları.',
        gateway: '',
        context: '',
        route: 'Sunulmuyor; Google oturum trafiği istemcide kalır.',
      },
      cline: {
        client: 'Cline',
        access: 'Kendi sağlayıcı ayarlarınız',
        observe: 'SDK v1 ve eski görev geçmişi. İstemcinin bildirdiği tutar liste fiyatı tahmininden ayrı tutulur.',
        judge: 'Model seviyesi tanınan, yerel kaydedilmiş turlar.',
        gateway: '',
        context: '',
        route: 'Sunulmuyor; eklenti ayarları değiştirilmez.',
      },
      qwen: {
        client: 'Qwen Code',
        access: 'İstemci oturumu veya kendi sağlayıcı ayarlarınız',
        observe: 'Yerel JSONL sohbet geçmişi; bilinmeyen fiyatlar bilinmeyen olarak kalır.',
        judge: 'Model seviyesi tanınan, kaydedilmiş metin turları.',
        gateway: '',
        context: '',
        route: 'Sunulmuyor; oturum trafiği istemcide kalır.',
      },
    },
    footnote:
      'Bu tablo mevcut sürümü anlatır. Claude subscription yönlendirmesi, varsayılan olarak kapalı, isteğe bağlı bir ayardır: Taksim yalnızca base URL’yi ayarlar, girişinizi okumadan, kopyalamadan ve loglamadan değiştirmeden iletir ve yalnızca Claude modelleri arasında geçiş yapar. EdgeeTech, Anthropic koşullarını Claude modelleri arasında seçime izin veren şekilde okur; bu, Anthropic onayı değildir. Anthropic’in Legal and compliance sayfası, Claude.ai kimlik bilgilerine üçüncü taraf aracılığını kısıtlıyor (Free, Pro ve Max’i anıyor; Team ve Enterprise açıkça ele alınmıyor); bu yüzden açıp açmamaya siz karar verirsiniz. OpenAI’ın ChatGPT girişi için sunduğu proxy yolunun plan ve workspace denetimlerini koruduğu Taksim tarafından doğrulanmadı; bu yüzden Codex planları yalnızca gözlemlenir.',
    sources: 'Kaynaklar:',
    and: 've',
    sourceLabels: {
      claudeLegal: 'Claude Code legal and compliance',
      codexAuth: 'Codex authentication',
    },
  },

  docsNav: {
    label: 'Dokümantasyon gezinmesi',
    home: 'Dokümantasyon',
    search: 'Dokümanlarda ara',
    groups: [
      {
        title: 'Giriş',
        links: [
          ['Taksim’e hoş geldiniz', '/docs'],
          ['Taksim nasıl çalışır', '/docs#how-taksim-works'],
          ['Adım adım', '/how-it-works'],
          ['Pilot benchmark', '/benchmark'],
        ],
      },
      {
        title: 'Hızlı başlangıç',
        links: [
          ['Kolay kurulum', '/docs/quick-start'],
          ['Ayrıntılı kurulum rehberi', '/docs/getting-started'],
          ['Sonraki adımlar', '/docs/next-steps'],
        ],
      },
      {
        title: 'Taksim’i kullanın',
        links: [
          ['Dashboard', '/docs/next-steps#dashboard'],
          ['Judge değerlendirmesi', '/docs/next-steps#judging'],
          ['Bütçeler, digest ve uyarılar', '/docs/next-steps#budgets'],
          ['Cache guard', '/docs/next-steps#cache'],
          ['Kota ve anomaliler', '/docs/next-steps#insights'],
          ['Kendi API key’inizle yönlendirme', '/docs/next-steps#routing'],
          ['Ekip toplu görünümü', '/docs/next-steps#team'],
          ['Güncelleme ve kaldırma', '/docs/quick-start#update'],
        ],
      },
      {
        title: 'Temel kavramlar',
        links: [
          ['Judge ve consensus', '/docs#judging'],
          ['Subscription ve API key', '/docs#subscriptions-and-api-keys'],
          ['Yerel gateway', '/docs#connector'],
          ['Doğrulama', '/docs#verification'],
          ['Gizlilik modeli', '/privacy'],
        ],
      },
      {
        title: 'İstemciler',
        links: [
          ['Tüm istemci tablosu', '/clients'],
          ['Claude Code', '/docs#client-compatibility'],
          ['Codex', '/docs#client-compatibility'],
          ['GitHub Copilot', '/docs#client-compatibility'],
          ['Devin ve Devin Desktop', '/docs#client-compatibility'],
          ['OpenCode, Kilo Code ve Pi', '/docs#client-compatibility'],
        ],
      },
    ],
  },

  docsSearch: {
    label: 'Dokümanlarda ara',
    placeholder: 'Kavram, istemci veya komut arayın…',
    empty: 'Eşleşen doküman bulunamadı.',
    entries: [
      {
        title: 'Subscription ve API key',
        copy: 'Taksim’in Claude ve ChatGPT subscription’larını nasıl ele aldığı, isteğe bağlı yalnızca-Claude yönlendirme ayarı ve API key yönlendirmesinin nasıl farklılaştığı.',
        href: '#subscriptions-and-api-keys',
        keywords: 'subscription max pro team api key rewrite observe quota baseline report routing subscription abonelik kota gözlem isteğe bağlı',
      },
      {
        title: 'Kolay kurulum',
        copy: 'Üç adım: tek satır PowerShell, taksim setup, taksim dashboard. Sorun giderme, güncelleme ve kaldırma.',
        href: '/docs/quick-start',
        keywords:
          'quickstart easy install one line irm iex setup dashboard smartscreen unblock execution policy path doctor update uninstall kolay kurulum tek satır güncelleme kaldırma',
      },
      {
        title: 'Ayrıntılı kurulum rehberi',
        copy: 'Doğrulanmış Windows sürümünü kurun, kontrol edin ve Claude Code veya Codex’i başlatın.',
        href: '/docs/getting-started',
        keywords:
          'quickstart install setup cli start latest release windows powershell checksum claude code codex doctor troubleshooting history import kurulum hızlı başlangıç sorun giderme',
      },
      {
        title: 'Sonraki adımlar',
        copy: 'Dashboard, judge değerlendirmesi, bütçeler, haftalık digest, Slack ve webhook uyarıları ve ekip toplu görünümü.',
        href: '/docs/next-steps',
        keywords: 'dashboard judge budget digest slack webhook notify alerts team export summary bütçe uyarı ekip',
      },
      {
        title: 'Taksim nasıl çalışır',
        copy: 'Yerel defteri, judge değerlendirmesini, consensus’u ve shadow policy’yi anlayın.',
        href: '#how-taksim-works',
        keywords: 'ledger judge consensus shadow policy verdict tier defter karar seviye',
      },
      {
        title: 'İstemci uyumluluğu',
        copy: 'Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code, Pi ve Agent Workstation için destek sınırlarını tam olarak görün.',
        href: '#client-compatibility',
        keywords: 'history managed live observation import geçmiş uyumluluk istemci',
      },
      {
        title: 'Yerel gateway',
        copy: 'API key trafiği için isteğe bağlı, fail-open yönlendirme yolunu anlayın.',
        href: '#connector',
        keywords: 'gateway local fail open resilience native fallback yerel',
      },
      {
        title: 'Gizlilik modeli',
        copy: 'Geçici işlemeyi ve kanonik telemetriyi anlayın.',
        href: '/privacy',
        keywords: 'data security content storage gizlilik veri güvenlik',
      },
    ],
  },

  docs: {
    eyebrow: 'Giriş',
    title: 'Taksim’e hoş geldiniz',
    lede: 'AI kodlama ajanları için yerel öncelikli bir kontrol düzlemi. Yeterlilik defteri hangi modelin çalıştığını, maliyetini ve daha ucuz bir modelin yeterli olup olmayacağını kaydeder.',
    accountTitle: 'Hesap yok, Taksim sunucusu yok',
    accountBody:
      'Taksim’i kurun ve hesap ya da giriş olmadan kullanın. Taksim’in kendi sunucusu yoktur: defter, raporlar ve dashboard sizin makinenizde kalır. [Kolay kurulumla](/docs/quick-start) başlayın.',
    how: {
      title: 'Taksim nasıl çalışır',
      body: 'Taksim, kodlama istemcilerinizin zaten yazdığı yerel geçmişi ve hook’ları okur, her oturumu modele göre fiyatlandırır ve yerel bir deftere kaydeder. Yalnızca metadata saklar: prompt, yanıt, kod, dosya yolu ya da kimlik bilgisi saklamaz.',
      calloutTitle: 'Önce gözlem',
      calloutBody:
        'Varsayılan olarak Taksim kaydeder ve değerlendirir. Hangi modelin çalışacağını değiştirmez. Canlı yönlendirme isteğe bağlıdır ve yalnızca kendi API key’inize faturalanan trafikle sınırlıdır.',
    },
    judging: {
      title: 'Judge ve consensus',
      items: [
        {
          term: 'Judge',
          body: 'Bir LLM judge, tamamlanmış bir turu inceler ve yeterli olabilecek model seviyesini tahmin eder: oturum içi Claude veya Codex, Anthropic API key’iniz, kendi key’inizle TypeSafe Jev ya da yerel bir Ollama modeli. Bu, daha ucuz modelin aynı sonucu üreteceğini kanıtlamaz. Claude Code, Codex, OpenCode, Kilo Code, Pi ve Devin Desktop turları değerlendirilebilir; Copilot ve Devin CLI turları fiyatlandırılır ancak henüz değerlendirilmez.',
        },
        {
          term: 'Consensus',
          body: 'Bir karar yalnızca iki judge uzlaştığında ve en az biri güçlü bir judge olduğunda sayılır. Yalnızca zayıf judge’ların uzlaşması ve anlaşmazlıklar raporlanır ama asla sayılmaz.',
        },
        {
          term: 'Shadow policy',
          body: 'Taksim, consensus kararlarından yönlendirme varsayılanları önerebilir ve bunların neleri değiştireceğini raporlayabilir. Shadow policy karşı olgusal kalır; modelinizi asla değiştirmez.',
        },
        {
          term: 'Yönlendirme önerileri',
          body: 'API key trafiği için `routing recommend`, consensus kararlarını her repo, görev sınıfı ve istemci için önerilen bir varsayılan seviyeye dönüştürür. İsteğe bağlı `routing auto`, bunu `taksim claude` oturumlarındaki yeni context’lere uygular ve sorun işaretlerinde modelinize geri döner. Claude subscription’ında yönlendirme ayrı bir opt-in’dir (`taksim routing subscription on`); Codex planları yönlendirilmez.',
        },
      ],
    },
    gateway: {
      title: 'Yerel gateway, tasarımı gereği fail-open',
      body: 'API key trafiği için isteğe bağlı canlı yönlendirme, 127.0.0.1 üzerindeki yerel bir gateway’i kullanır. Gateway yalnızca kendi makinenizden gelen loopback isteklerini yanıtlar ve siteler arası (cross-site) tarayıcı isteklerini reddeder; web sayfaları ona erişemez. Telemetri, kalıcı kayıt ve uzak öneriler, sağlıklı bir sağlayıcı isteğini asla bekletemez.',
      calloutTitle: 'Yerel iş akışı her zaman kullanılabilir',
      calloutBody:
        'Yönetilen yol güvenli şekilde başlatılamazsa Taksim, geliştiriciyi engellemek yerine istemcinin yerel çağrısını korur. Ham prompt, yanıt ve kaynak içerik varsayılan olarak kalıcı saklanmaz. Güncelleme ve fiyat kontrolleri ağı kullanır; isteğe bağlı uzak judge’lar değerlendirme içeriğini, yapılandırılmış bildirim veya dışa aktarma hedefleri seçilen verileri alır. Kodlama istemciniz kendi sağlayıcısına bağlanmaya devam eder.',
    },
    subscriptions: {
      title: 'Subscription’lar: varsayılan gözlem, Claude yönlendirmesi isteğe bağlı',
      body: 'Varsayılan olarak, Claude Code bir Claude subscription’ı ile kimlik doğrulaması yapmışsa Taksim modeli yeniden yazmaz: `taksim claude`, Claude Code’u yerel olarak başlatır ve yerel transkriptler ile hook’lar üzerinden gözlemler. `taksim routing subscription on` ile açarsanız (varsayılan kapalı), claude.ai girişindeki (Pro, Max veya Team) `taksim claude` yerel gateway üzerinden geçer. Yalnızca `ANTHROPIC_BASE_URL` ayarlanır; giriş kimlik bilgisi olarak kalır, gateway `Authorization` başlığını değiştirmeden iletir ve onu asla okumaz, kopyalamaz veya loglamaz; kullanım faturalanmadan, kota olarak subscription’da kalır. Taksim yalnızca Claude modelleri arasında, kuruluşunuzun `availableModels` listesi içinde geçiş yapar; --model ve /model seçimlerinizi başlangıç modelinden uzak tutar ve sorun olursa özgün isteğinizi değiştirmeden iletir (fail-open). ChatGPT planındaki Codex yerel oturum geçmişi üzerinden gözlemlenmeye devam eder.',
      body2:
        'Subscription kullanımı, faturalanan değil kota olarak etiketlenmiş API eşdeğeri liste fiyatı olarak gösterilir. Yönlendirme açıkken bir oturumun ilk gerçek isteği göreve uygunluğa göre seçilir: görev uygunsa Opus varsayılanı bir kademe aşağı inebilir ve hata kanıtı görülürse yükselir; cache’i sıcak oturumlar sabit kalır. Kullanım plan kotası olarak raporlanır ve Taksim’in Opus’a çıkardığı istekler plan kotasını daha hızlı tüketir. Baseline raporu (`taksim report baseline`) ve tamamlanan turlar için judge kararları her iki durumda da kullanılabilir.',
      body3:
        'Neden isteğe bağlı ve yalnızca-Claude: Taksim bir subscription turunu asla üçüncü taraf bir modele yönlendirmez ve gateway girişinizi asla okumaz, kopyalamaz veya loglamaz. EdgeeTech, Anthropic koşullarını Claude modelleri arasında seçime izin veren ve üçüncü taraf modelleri yasaklayan şekilde okur; bu, Anthropic onayı değildir. Anthropic’in Claude Code için Legal and compliance sayfası, Claude.ai kimlik bilgilerine üçüncü taraf aracılığını kısıtlıyor (Free, Pro ve Max’i anıyor; Team ve Enterprise açıkça ele alınmıyor); `routing.subscription` bu yüzden varsayılan olarak kapalıdır ve açıp açmamaya siz karar verirsiniz. OpenAI, ChatGPT girişi için bir proxy yolu belgeliyor; ancak Taksim bu yolda plan, kota ve workspace denetimlerinin korunduğunu doğrulamadı, bu yüzden Codex planları yalnızca gözlemlenir. Sağlayıcı hakları ve workspace politikası belirleyici olmaya devam eder.',
      body4:
        'Claude masaüstü uygulamasının (Code sekmesi) oturumları henüz yönlendirilmez, yalnızca gözlemlenir: uygulama her oturum için kendi API uç noktasını belirlediğinden bu oturumlar doğrudan Anthropic’e gider. `taksim desktop on`, o profilde terminalden başlatılan düz `claude` CLI oturumlarını yönlendirir; `taksim desktop off` kapatır ve varsayılan olarak kapalıdır. `routing.subscription` üzerine kuruludur; aynı yalnızca-Claude izin listesi, `availableModels`, --model ve /model kuralları geçerlidir ve giriş değiştirilmeden iletilir, okunmaz ve saklanmaz. Her Windows oturumunda tek bir gateway çalışır. Gateway kullanılamıyorsa oturumlar doğrudan Anthropic’e gider (fail-open). Windows’ta test edildi; bu özellik için macOS test edilmedi.',
    },
    verification: {
      title: 'Doğrulama kanıta bağlıdır',
      body: 'Doğrulanmış bir sonuç, yapılandırılmış ve mevcut mühendislik kanıtlarının ilgili kuralları karşıladığı anlamına gelir. Kodun doğru, güvenli veya eksiksiz olduğunun garantisi değildir.',
    },
    compat: {
      title: 'İstemci uyumluluğu',
      updated: 'Son doğrulama · 26 Eylül 2026',
      caption: 'İstemci uyumluluğu',
      headers: ['İstemci', 'Geçmiş', 'Canlı yönlendirme', 'Değerlendirme', 'Sınır'],
      rows: [
        [
          'Claude Code',
          'Mevcut',
          'Yalnızca API key, isteğe bağlı',
          'Mevcut',
          'Subscription trafiği gözlemlenir; yalnızca-Claude yönlendirme isteğe bağlıdır',
        ],
        [
          'Codex',
          'Mevcut',
          'Yalnızca API key, isteğe bağlı',
          'Mevcut',
          'API key’lerde Responses gateway; model yeniden yazımı yalnızca doğrulanmış model id’leri için; ChatGPT girişi gözlemlenir, yeniden yazılmaz',
        ],
        [
          'GitHub Copilot',
          'Mevcut',
          'Mevcut değil',
          'Henüz değil',
          'Yerel Copilot CLI oturum deposundan kullanım içe aktarma; yalnızca başlangıç modeli seçimi',
        ],
        ['Devin CLI', 'Mevcut', 'Mevcut değil', 'Henüz değil', 'Yalnızca geçmiş içe aktarma'],
        [
          'Devin Desktop',
          'Mevcut',
          'Mevcut değil',
          'Mevcut',
          'Eski adıyla Windsurf; yerel olay günlüğünden gözlemlenir, asla yönlendirilmez',
        ],
        [
          'OpenCode, Kilo Code',
          'Mevcut',
          'Mevcut değil',
          'Claude seviyesi modeller',
          'Yerel oturum veritabanlarından geçmiş içe aktarma',
        ],
        ['Pi, Oh My Pi', 'Mevcut', 'Mevcut değil', 'Claude seviyesi modeller', 'Yerel oturum dosyalarından geçmiş içe aktarma'],
        [
          'Agent Workstation',
          'Mevcut',
          'Mevcut değil',
          'Henüz değil',
          'Yerel kullanım defterinden kullanım içe aktarma; onaylar zayıf kalite kanıtı olarak saklanır',
        ],
      ],
    },
    next: 'Sonraki',
    nextLink: 'Kolay kurulum',
    toc: {
      label: 'Bu sayfada',
      how: 'Taksim nasıl çalışır',
      judging: 'Judge ve consensus',
      gateway: 'Yerel gateway',
      subscriptions: 'Subscription ve API key',
      verification: 'Doğrulama',
      compat: 'İstemci uyumluluğu',
    },
  },

  quickStart: {
    eyebrow: 'Hızlı başlangıç',
    title: 'Kolay kurulum',
    lede: 'Üç adımda ücretsiz Developer planı: kurun, setup’ı çalıştırın ve yerel dashboard’u açın. Hesap veya yönetici yetkisi gerekmez. Windows x64 ve macOS paketleri mevcuttur; aşağıdaki platform notlarını okuyun.',
    install: {
      title: '1. Kurun',
      body: '**PowerShell**’i açın (Başlat’a basın, PowerShell yazın, Enter’a basın), bu satırı yapıştırın ve Enter’a basın:',
      after:
        'En son Taksim sürümünü indirir, yayımlanmış checksum’larla doğrular, yalnızca kendi kullanıcınız için kurar ve `taksim` komutunu PATH’inize ekler. Bittiğinde 2. adımı sizin için başlatır.',
      copy: 'Kopyala',
      copied: 'Kopyalandı',
    },
    setup: {
      title: '2. Setup’ı çalıştırın',
      body: 'Setup kendiliğinden başlamadıysa yeni bir terminal (Windows’ta PowerShell) açın ve şunu çalıştırın:',
      seeTitle: 'Ne göreceksiniz',
      see: [
        '**Bulunan istemciler**: bu makinedeki kodlama ajanları; örneğin Claude Code, Codex, GitHub Copilot, OpenCode, Kilo Code ve Pi.',
        '**Kimlik bilgisi modu**: subscription ile giriş yapılmış istemciler varsayılan olarak gözlemlenir. Taksim transkriptlerini ve hook’larını okur; subscription trafiği yalnızca Claude yönlendirmesini isteğe bağlı açarsanız Taksim’den geçer.',
        '**İçe aktarma ve fiyatlandırma**: bu istemcilerin zaten tuttuğu geçmiş içe aktarılır ve liste fiyatlarıyla fiyatlandırılır.',
        '**Tek bir soru**: Claude masaüstü Stop hook’u (`Install it? [Y/n]`). Claude’un kendi tamamlanan turlarını değerlendirmesini sağlar. Kabul etmek için Enter’a basın, atlamak için `n` yazın.',
        '**İlk raporunuz** ve deneyebileceğiniz sonraki komutlar. Setup’ı istediğiniz zaman yeniden çalıştırabilirsiniz.',
      ],
    },
    dashboard: {
      title: '3. Dashboard’u açın',
      body: 'Setup bittiğinde dashboard’u açar. Daha sonra yeniden açmak için:',
      after:
        'Dashboard yalnızca sizin makinenizde (127.0.0.1) ve salt okunur çalışır: repo, model ve istemciye göre harcama, iki judge’ın uzlaştığı yerlerde daha ucuz bir modelin ne kadar tasarruf ettirebileceği, judge kapsamı ve cache verimliliği. Durdurmak için terminalde Ctrl+C’ye basın.',
    },
    doneTitle: 'Hepsi bu kadar',
    doneBody:
      'Kodlama ajanlarınızı her zamanki gibi kullanmaya devam edin; Taksim onların zaten diske yazdıklarını okur. Judge değerlendirmesi, bütçeler, Slack uyarıları ve ekip raporları için [sonraki adımlara](/docs/next-steps), tüm ayrıntılar için [ayrıntılı kurulum rehberine](/docs/getting-started) bakın.',
    troubleshooting: {
      title: 'Bir sorun çıkarsa',
      items: [
        {
          q: 'Windows SmartScreen veya antivirüs `taksim.exe` dosyasını engelliyor',
          a: 'Taksim binary’si henüz kod imzalı değil, bu yüzden Windows tanınmayan bir uygulama uyarısı gösterebilir. SmartScreen çıkarsa **Ek bilgi**’yi, ardından **Yine de çalıştır**’ı seçin. Windows dosyanın başka bir bilgisayardan geldiğini söylüyorsa kurulu kopyanın engelini kaldırın ve yeniden deneyin: `Unblock-File "$env:LOCALAPPDATA\\Taksim\\current\\taksim.exe"`',
        },
        {
          q: 'PowerShell betik çalıştırmanın devre dışı olduğunu söylüyor',
          a: 'Yalnızca bu PowerShell penceresi için `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` çalıştırın, ardından kurulum satırını yeniden yapıştırın. Makine genelindeki ayarı değiştirmeyin.',
        },
        {
          q: 'PowerShell `taksim` komutunu bulamıyor',
          a: 'Güncellenen PATH’in yüklenmesi için PowerShell’i kapatıp yeni bir pencere açın, ardından `taksim version` çalıştırın. Hâlâ bulunamıyorsa kurulum satırını yeniden çalıştırın; iki kez çalıştırmak güvenlidir.',
        },
        {
          q: 'Başka bir şey yolunda gitmiyor',
          a: '`taksim doctor` çalıştırın. Kurulumu, istemcilerinizi, kimlik bilgisi modunu ve kapsamı kontrol eder ve neyin düzeltilmesi gerektiğini söyler. Sorun devam ederse bu çıktıyı [destek ekibine](mailto:info@edgee.tech?subject=Taksim%20support) gönderin.',
        },
      ],
    },
    update: {
      title: 'Güncelleme',
      body: 'Yeni bir sürüm çıktığında `taksim doctor` size söyler. Kontrol etmek ve ardından kurmak için:',
      after: 'Güncelleme verilerinizi ve ayarlarınızı korur. Kurulum satırını yeniden çalıştırmak da aynı işi yapar.',
    },
    uninstall: {
      title: 'Kaldırma',
      body: 'Nelerin kaldırılacağını inceleyin, ardından Taksim’i kaldırın:',
      steps: [
        'Önce değişiklikleri önizleyin: `taksim uninstall --dry-run`.',
        'Taksim’i kaldırmak için `taksim uninstall` komutunu çalıştırın. Yerel defteriniz ve raporlarınız korunur.',
        'Yerel verileri de kalıcı olarak silmek için `taksim uninstall --purge-data` komutunu çalıştırın. Bu işlem geri alınamaz.',
      ],
    },
    toc: {
      label: 'Bu sayfada',
      install: 'Kurulum',
      setup: 'Setup',
      dashboard: 'Dashboard',
      troubleshooting: 'Sorun giderme',
      update: 'Güncelleme',
      uninstall: 'Kaldırma',
    },
  },

  gettingStarted: {
    eyebrow: 'Hızlı başlangıç',
    title: 'Kurulum rehberi',
    lede: 'Taksim’i Windows veya macOS’a kurun, çalıştığını doğrulayın ve ilk oturumunuzu başlatın. Önce Windows adımları, ardından macOS bölümü gelir. Kısa sürüm için [kolay kurulumu](/docs/quick-start) kullanın.',
    noAccountTitle: 'Taksim hesabı gerekmez',
    noAccountBody:
      'Taksim’i kurun ve doğrudan çalıştırın. Taksim girişi ve Taksim sunucusu yoktur; her şey sizin makinenizde çalışır.',
    plan: {
      title: '1. Planınızı doğrulayın',
      body: 'Taksim CLI, evde ya da işte, her bireysel geliştirici için ücretsizdir. Ekip toplu görünümü gibi Team özellikleri ücretlidir.',
      selfTitle: 'Kendim için kuruyorum',
      selfSub: 'Ücretsiz CLI ile devam edin',
      teamTitle: 'Ekibim için kuruyorum',
      teamSub: 'Team hakkında bizimle görüşün',
    },
    prerequisites: {
      title: '2. Ön koşulları kontrol edin',
      body: 'Windows PowerShell 5.1 veya PowerShell 7 bulunan bir Windows x64 bilgisayar gerekir. Yönetici yetkisi veya .NET SDK gerekmez. Taksim hesabı gerekmez. Taksim zaten kullandığınız kodlama istemcileriyle, örneğin [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) veya [Codex](https://developers.openai.com/codex/cli/) ile çalışır; en az birini kurup oturum açın.',
    },
    install: {
      title: '3. Tek satırla kurun',
      body: 'PowerShell’i açın ve aşağıdaki komutu çalıştırın. En son sürümü HTTPS üzerinden indirir, Connector arşivini ve kurulum betiğini yayımlanmış `SHA256SUMS.txt` ile doğrular (bir şey eşleşmezse durur), `%LOCALAPPDATA%\\Taksim` altına kurar, kullanıcı PATH’inize ekler ve ardından `taksim setup` çalıştırır.',
      pinnedTitle: 'Belirli bir sürümü kurun veya setup’ı atlayın',
      pinnedBody: 'Belirli bir sürümü, ardından setup çalıştırmadan kurmak için:',
      note: 'Taksim, sürümlü binary’lerini `%LOCALAPPDATA%\\Taksim` altında, ayrı kullanıcı verilerini ise `%USERPROFILE%\\.taksim` altında tutar. Güncellenmiş bir sürümü kurmak bu kullanıcı verisi dizinini değiştirmez.',
    },
    verify: {
      title: '4. Kurulumu doğrulayın',
      body: 'Taksim PATH’inizde olacak şekilde yeni bir terminal (Windows’ta PowerShell) açın ve şunu çalıştırın:',
      after:
        'Üç komutun da başarıyla tamamlanması gerekir. `doctor` yerel ortamı kontrol eder ve güncelleme olduğunda söyler; `install status` kurulu sürümü ve yolunu gösterir.',
    },
    setup: {
      title: '5. Setup’ı çalıştırın ve dashboard’u açın',
      body: 'Kurulum aracı setup’ı sizin için çalıştırır. İstediğiniz zaman yeniden çalıştırabilirsiniz; tekrarlamak güvenlidir. İstemcilerinizi ve kimlik bilgisi modlarını bulur, geçmişlerini içe aktarıp fiyatlandırır, oturum içi judge değerlendirmesini açar ve ilk raporunuzu yazar. Ardından yerel dashboard’u açın:',
    },
    session: {
      title: '6. İsteğe bağlı: yönetilen bir oturum başlatın',
      body: '`claude`, `codex` ve diğer istemcilerinizi eskisi gibi çalıştırmaya devam edebilirsiniz; Taksim geçmişlerini okur. Taksim’in Claude Code veya Codex’i kendi hook’ları ve status line’ı ile (isteğe bağlı yönlendirmeyle) başlatmasını istiyorsanız aşağıdakilerden birini çalıştırın. Yerel istemciye yönelik argümanlar komutun ardından gelebilir.',
      expectTitle: 'Ne beklemelisiniz',
      expectBody:
        'Claude veya ChatGPT subscription’ında Taksim istemciyi yerel olarak başlatır ve gözlemler; Claude Code subscription trafiği yalnızca `taksim routing subscription on` ile açarsanız Taksim’den geçer. API key ile Taksim önce yerel gateway’ini `127.0.0.1` üzerinde hazırlar; yönetilen yol kullanılamazsa istemci kendi yerel davranışına döner. Defter yerelde kalır. Güncelleme ve fiyat kontrolleri ağı kullanır; isteğe bağlı uzak judge’lar ile yapılandırılmış bildirim veya dışa aktarma hedefleri seçilen verileri alır. Kodlama istemciniz kendi sağlayıcısına bağlanmaya devam eder.',
    },
    inspect: {
      title: '7. Son oturumu inceleyin',
      body: 'Yönetilen bir görevi tamamladıktan sonra, Taksim’in son gözlemlenen istek için kaydettiği doğrulama kanıtını inceleyin:',
      after:
        'Açıklama, eksik veya tamamlanmamış kanıtı açıkça belirtir; başarılı bir sağlayıcı yanıtı tek başına kanıt olarak sunulmaz.',
    },
    history: {
      title: 'İsteğe bağlı: geçmişi yeniden içe aktarın',
      body: 'Setup bulduğu her istemciyi zaten içe aktarır. Daha sonra yeniden içe aktarmak veya setup’ın bulamadığı bir istemciyi eklemek için:',
    },
    troubleshooting: {
      title: 'Sorun giderme',
      items: [
        {
          q: 'PowerShell `taksim` komutunu bulamıyor',
          a: 'PowerShell’i kapatın, yeni bir terminal açın ve `taksim version` komutunu yeniden çalıştırın. Hâlâ bulunamıyorsa kurulum aracını yeniden çalıştırın ve ardından yerel kurulumu incelemek için `taksim doctor` kullanın.',
        },
        {
          q: 'Windows SmartScreen `taksim.exe` dosyasını engelliyor',
          a: 'Binary henüz kod imzalı değil. **Ek bilgi**’yi, ardından **Yine de çalıştır**’ı seçin ya da kurulu kopyanın engelini `Unblock-File "$env:LOCALAPPDATA\\Taksim\\current\\taksim.exe"` ile kaldırın.',
        },
        {
          q: 'Kurulum betiği engellendi',
          a: 'Genel execution-policy ayarınızı düşürmeyin. Yalnızca mevcut PowerShell oturumu için `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` çalıştırın, ardından yukarıdaki kurulum komutunu yeniden çalıştırın.',
        },
        {
          q: '`taksim doctor` bir hata bildiriyor',
          a: 'Bildirilen kontrolü okuyun, belirtilen yerel düzeltmeyi yapın ve `taksim doctor` komutunu yeniden çalıştırın. Sorun devam ederse [destek ekibine yazarken](mailto:info@edgee.tech?subject=Taksim%20support) bu çıktıyı ekleyin.',
        },
      ],
    },
    toc: {
      label: 'Bu sayfada',
      plan: 'Planınızı doğrulayın',
      prerequisites: 'Ön koşullar',
      install: 'Kurulum',
      verify: 'Kurulumu doğrulayın',
      setup: 'Setup ve dashboard',
      session: 'Yönetilen oturum',
      inspect: 'Son oturumu inceleyin',
      history: 'Geçmişi içe aktarın',
      troubleshooting: 'Sorun giderme',
    },
  },

  nextSteps: {
    eyebrow: 'Sonraki adımlar',
    title: 'Kurulumdan sonra',
    lede: 'Çoğu kişinin sonra açtığı özellikler için kısa rehberler. Her şey sizin makinenizde çalışır.',
    dashboard: {
      title: 'Dashboard',
      body: 'Tarayıcınızda yerel, salt okunur bir dashboard: Overview, Costs (repo, görev, istemci, model veya güne göre), Sessions, Judge ve Team sayfaları. **Share summary**, yalnızca repo takma adlarını içeren tek sayfalık bir yönetici özeti dışa aktarır; ikinci komut aynı özeti dosya olarak yazar.',
    },
    judging: {
      title: 'Judge: daha ucuz model yeterli miydi?',
      body: 'Setup, `taksim claude` ile başlattığınız oturumlar için oturum içi judge değerlendirmesini açar. Claude masaüstü ve düz `claude` oturumlarını ya da Codex oturumlarını da değerlendirmek için kullanıcı düzeyindeki Stop hook’larını ekleyin (Codex, hook’a bir kez `/hooks` içinde güvenmenizi ister):',
      history:
        'İçe aktardığınız geçmişi seçtiğiniz bir judge ile (yerel bir Ollama modeli veya kendi Anthropic key’iniz) değerlendirmek için, kaç turun değerlendirileceğini ve tahmini maliyeti gösteren bir deneme çalıştırmasıyla başlayın:',
      after:
        'Oturum içi judge, oturumun sonunda sorar ve reddedebilirsiniz. `judge status` kapsamı ve uzlaşmayı gösterir. “Tasarruf edilebilirdi” rakamına yalnızca, biri güçlü olmak üzere iki judge’ın uzlaştığı kararlar sayılır.',
    },
    budgets: {
      title: 'Bütçeler, haftalık digest ve Slack uyarıları',
      body: 'Bütçeler sınır değil, uyarıdır: kendiniz, bir repo veya ekip için API eşdeğeri dolar cinsinden günlük ya da aylık bir tutar belirleyin; Taksim bunu status line’da gösterir ve %75, %90 ve %100’de uyarır.',
      digest: 'Digest, dosyaya yazılan tek sayfalık bir “ne kadar tasarruf edebilirdiniz” özetidir:',
      notify:
        'Digest’i ve bütçe uyarılarını Slack’te veya herhangi bir webhook’ta almak için adresi bir kez kaydedin (Windows Credential Manager’da saklanır ve yalnızca toplu değerler ile repo takma adları gönderilir), bir test gönderin, ardından digest’i paylaşın:',
    },
    cache: {
      title: 'Cache guard ve cache maliyetleri',
      body: 'Cache guard, bilgilendirme amaçlı Claude Code hook’ları ekler. Büyük bir oturum prompt cache’i sona erdikten sonra devam ettiğinde yeniden cache’lemenin token ve maliyetini söyler; context guard ise bir oturum seçtiğiniz boyutu (varsayılan: 200k token) aştığında, onu taşımanın tur başına maliyetiyle birlikte bir kez haber verir, böylece `/compact` yapabilir ya da yeni bir oturum açabilirsiniz. Hiçbir şey engellenmez ve hiçbir istek gönderilmez.',
      insights:
        'Cache maliyetleri, her yazmanın kaydettiği ömürle (5 dakika veya 1 saat), fast mode dahil fiyatlanır. Cache raporu bu dağılımı ve hangi duraklamaların gerçekten yeniden cache’lemeye mal olduğunu gösterir:',
    },
    insights: {
      title: 'Subscription kotası ve harcama anomalileri',
      quota:
        'Claude Pro veya Max planında ya da ChatGPT ile giriş yapılmış Codex’te `insights quota`, 5 saatlik ve haftalık limitlerinizin ne kadarını kullandığınızı, bunlara ne sıklıkla ulaştığınızı ve en çok hangi repo, model ve oturumların kullandığını, istemcilerin zaten bildirdiği okumalardan gösterir. Taksim subscription kimlik bilgilerini asla okumaz ve hiçbir sağlayıcı kullanım uç noktasını çağırmaz. Bir pencere %75’i geçtiğinde status line’a bir kota bölümü eklenir.',
      anomalies:
        '`insights anomalies`, son harcamayı ondan önceki 28 günle karşılaştırır ve öne çıkanları listeler: harcama sıçramaları, kontrolden çıkan oturumlar, Opus veya fast mode payındaki artış ya da subscription’dan API key faturalamasına geçiş gibi; her biri nedeni ve önerilen bir eylemle birlikte. Yeterli geçmiş birikene kadar sessiz kalır.',
    },
    routing: {
      title: 'Kendi API key’inizle yönlendirme',
      body: 'Token başına kendi Anthropic API key’inizle ödüyorsanız, `routing recommend` iki judge’ın uzlaştığı turlara dayanarak her repo, görev sınıfı ve istemci için varsayılan bir model seviyesi önerir. Örneklem büyüklüğünü, güveni ve değerlendirilen turlardaki tasarrufu gösterir. Zayıf kanıt, daha ucuz modelin yetersiz kaldığını söyleyen herhangi bir karar ya da daha önceki bir escalation mevcut modeli korur. Yalnızca öneride bulunur; siz seçmeden hiçbir şey değişmez.',
      auto:
        '`routing auto on` (varsayılan olarak kapalı), önerilen bir düşürmeyi yalnızca `taksim claude` ile başlattığınız bir oturumda yeni bir context başladığında uygular: yeni bir oturum ya da bir subagent gibi. Zaten süren bir konuşmayı asla değiştirmez; sabitlemeleriniz, bütçeleriniz ve yerel `/model` seçimleriniz yine önceliklidir.',
      escalation:
        'Düşürülmüş bir turda sorun işaretleri görüldüğünde (tool, test veya build hataları, yeniden deneme ya da düzeltme, upstream hatası), Taksim istediğiniz modele geri döner ve o aşama boyunca orada kalır. Size herhangi bir yanıt ulaşmadan başarısız olan düşürülmüş bir çağrı, sizin modelinizle bir kez yeniden denenir. `diagnostics downgrades` her düşürmeyi ve escalation’ı gösterir. Claude subscription yönlendirmesi ayrı bir isteğe bağlı ayardır (`taksim routing subscription on`); ChatGPT planları yalnızca gözlemlenir. Yönlendirme sonuçlardan da öğrenir. Aşağı geçilen bir tura “Hayır, yanlış olmuş” gibi bir düzeltmeyle cevap verirseniz (Türkçe ya da İngilizce), Taksim başlangıç modeline döner ve reddi kendisi kaydeder; `taksim routing outcome record --session <id> --result rejected` ile bildirim ya da oturum içi bir judge kararı da sayılır. Ardından Taksim aynı türden bir görev bir sonraki sefer başladığında başlangıç modelini korur. Yalnızca anahtarlı bir görev parmak izi saklanır, `taksim routing outcome list` kaydedilenleri gösterir ve `taksim memory forget` bunu temizler.',
    },
    desktop: {
      title: 'Düz claude terminal oturumlarını yönlendirme',
      body: 'Claude masaüstü uygulamasının (Code sekmesi) oturumları gözlemlenir (maliyet raporları, oturum içi judge), yönlendirilmez: uygulama her oturum için kendi API uç noktasını belirlediğinden yönlendirme henüz mümkün değil. Terminalden başlatılan düz `claude` CLI oturumlarını o profilde yönlendirmek için aşağıdaki komutu bir kez çalıştırın; isteğe bağlıdır, varsayılan olarak kapalıdır ve yalnızca Windows’ta test edilmiştir. Yalnızca Claude modelleri kullanılır, kuruluşunuzun `availableModels` ayarı içinde kalır; --model ve /model dikkate alınır. Her Windows oturumunda tek bir gateway çalışır; kullanılamıyorsa oturumlar doğrudan Anthropic’e gider. Girişiniz değiştirilmeden iletilir, okunmaz ve saklanmaz. `taksim desktop status`, masaüstü uygulamasının başlatma ortamı Taksim’i atlıyorsa uyarır. Yönlendirilen oturumlarda, yanıt istediğinizden farklı bir modelden geldiğinde tek satırlık bir bildirim model adını gösterir. `taksim desktop off` kapatır.',
    },
    team: {
      title: 'Ekip toplu görünümü',
      body: 'Her geliştirici ortak bir klasöre yalnızca metadata içeren bir export yazar ve paylaşmadan önce inceleyebilir; export’lar dosya yollarını değil, repo takma adlarını içerir. Ekip lideri bunları tek bir raporda birleştirir ya da dashboard’da açar. Ekip toplu görünümü [Team planının](/pricing) parçasıdır.',
    },
    toc: {
      label: 'Bu sayfada',
      dashboard: 'Dashboard',
      judging: 'Judge',
      budgets: 'Bütçeler ve uyarılar',
      cache: 'Cache guard',
      insights: 'Kota ve anomaliler',
      routing: 'Yönlendirme (API key)',
      desktop: 'Yönlendirme (düz claude oturumları)',
      team: 'Ekip toplu görünümü',
    },
  },

  privacy: {
    eyebrow: 'Gizlilik',
    title: 'Prompt’un farkında. Prompt’un sahibi değil.',
    lede: 'Taksim, ihtiyaç duyduğu metadata’yı ham mühendislik içeriğini kanonik telemetride tutmadan türetecek şekilde tasarlanmıştır.',
    summaryLabel: 'Sade dille özet.',
    summary:
      'Taksim, sınıflandırma türetmek için sınırlı içeriği geçici olarak inceleyebilir. Bu, prompt’ları, yanıtları, kaynak kodu veya diff’leri kanonik telemetrisinde saklamaktan farklıdır.',
    sections: [
      {
        title: 'Kanonik telemetri neleri içerebilir',
        body: 'Yapısal görev ve oturum metadata’sı, gözlemlenebildiğinde kaynak/model ilişkilendirmesi, gözlemlenebildiğinde token ve gecikme sinyalleri, doğrulama sonuçları, sınırlı kanıt sınıflandırmaları ve olayları ilişkilendirmek için gereken opak tanımlayıcılar.',
      },
      {
        title: 'Kanonik telemetri neleri saklamayacak şekilde tasarlanmıştır',
        body: 'Ham prompt’lar, model yanıtları, kaynak kod, diff’ler, kimlik bilgileri, gizli anahtarlar, ham araç yükleri (tool payload), shell komutu içerikleri veya uydurulmuş sağlayıcı kimliği.',
      },
      {
        title: 'Yerel ve geçici işleme',
        body: 'Defter makinenizde kalır. Taksim’in varsayılan barındırılmış yönlendirme önerisi servisi veya kullanım defteri yoktur. Güncelleme ve fiyat kontrolleri dış ağ hizmetlerini kullanır. Uzak bir judge (kendi key’inizle Anthropic veya TypeSafe Jev) seçerseniz, sağlayıcı değerlendirdiği turların kısaltılmış alıntılarını alır. Yapılandırılmış Slack, webhook ve dışa aktarma hedefleri seçilen rapor verilerini alır. Kodlama istemciniz kendi sağlayıcısına, o sağlayıcının koşulları altında bağımsız olarak prompt ve yanıt göndermeye devam eder. Bazı adaptörler sınıflandırma ve yapısal bilgiler için istemci verilerini veya istek içeriğini geçici olarak inceler; ham içerik varsayılan olarak kalıcı saklanmaz. Her istemcinin belgesi kendi sınırını açıklar. Belirlenemeyen sağlayıcılar veya modeller bilinmiyor olarak kalır.',
      },
      {
        title: 'Web sitesi verileri',
        body: 'Bu önizleme, üçüncü taraf bir analitik izleyici yüklemez. Değerlendirme formu e-posta uygulamanızı açar ve değerleri bir web sitesi form işleyicisine göndermez. Barındırma ve güvenlik altyapısı yine de IP adresi, kullanıcı aracısı (user agent), istenen yol ve zaman damgaları gibi standart istek bilgilerini işleyebilir.',
      },
      {
        title: 'İletişim',
        body: '[info@edgee.tech](mailto:info@edgee.tech) adresine e-posta gönderirseniz EdgeeTech, verdiğiniz bilgileri talebinize yanıt vermek ve ilgili iş kayıtlarını tutmak için kullanır.',
      },
      {
        title: 'Hizmet iyileştirme, saklama süreleri ve alt işleyiciler',
        body: 'Üretim bildirimi; kullanıma alınan ürün modunu, amaçları, hukuki dayanakları, saklama sürelerini, alt işleyicileri, uluslararası aktarımları ve kullanıcı haklarını genel lansmandan önce tam olarak belgeleyecektir. Bu bildirim güncellenmeden hiçbir üretim analitiği veya yeni form işleyicisi etkinleştirilmemelidir.',
      },
      {
        title: 'Önemli inceleme durumu',
        body: 'Bu önizleme gizlilik bildirimi, uygulanmış önizleme davranışını ve ürün mimarisini açıklar. Genel üretim lansmanından önce hukuki incelemeden geçmesi gerekir.',
      },
    ],
    effectiveLabel: 'Yürürlük tarihi:',
    effective: '8 Eylül 2026.',
  },
};
