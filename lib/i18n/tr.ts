// Turkish copy. Mirrors en.ts key-for-key; commands, prices and product names stay as in English.
import type { Dictionary } from './en';

export const tr: Dictionary = {
  meta: {
    siteTitle: 'Taksim — AI kodlama için yeterlilik defteri (sufficiency ledger)',
    titleTemplate: '%s — Taksim',
    description:
      'Taksim, AI kodlama oturumlarınızın yerel bir defterini tutar: her turda hangi model çalıştı, maliyeti ne oldu ve daha ucuz bir model yeterli olur muydu.',
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
    },
    talkToUs: 'Bize ulaşın',
    install: 'Taksim’i kurun',
    footer: {
      tagline: 'AI kodlama için yerel öncelikli bir yeterlilik defteri.',
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
      title: 'AI kodlama harcamanızın nereye gittiğini ve daha ucuz bir modelin işi ne zaman görebileceğini görün.',
      lede: 'Taksim; Claude Code, Codex, GitHub Copilot ve diğer kodlama ajanlarının yerel geçmişini ve hook’larını okur, her oturumu fiyatlandırır ve tamamlanan turları değerlendirir: Opus gerçekten gerekli miydi, yoksa Sonnet yeterli olur muydu? Kendi makinenizde çalışır; prompt ya da kod saklamaz.',
      seeHow: 'Nasıl çalıştığını görün',
      installLabel: 'Windows’a tek satır PowerShell ile kurun',
      installGuide: '3 adımda kolay kurulum',
      footnote: 'Bireysel geliştiriciler için ücretsiz. Ekipler toplu görünüm (roll-up) için ödeme yapar.',
    },
    valuesLabel: 'Taksim ne yapar',
    valueProps: [
      {
        title: 'Her oturum, fiyatıyla.',
        body: 'Taksim, kodlama ajanlarınızın zaten diske yazdığı verileri içe aktarır ve her oturumu model, repo ve göreve göre, cache okuma ve yazmaları dahil fiyatlandırır. API key kullanımı faturalanan dolar olarak gösterilir; subscription kullanımı ise API eşdeğeri liste fiyatı olarak, faturalanan değil kota olarak etiketlenip gösterilir.',
      },
      {
        title: 'Daha ucuz model yeterli miydi?',
        body: 'Bir LLM judge, tamamlanan turları sonradan değerlendirir. “Tasarruf edilebilirdi” rakamına yalnızca, biri güçlü olmak üzere iki judge’ın uzlaştığı kararlar sayılır; böylece rakam temkinli kalır.',
      },
      {
        title: 'Tasarımı gereği gizli.',
        body: 'Taksim yerel bir binary’dir. Yalnızca metadata saklar: prompt, yanıt, kod, dosya yolu ya da kimlik bilgisi saklamaz. Ekip raporları, her geliştiricinin kendi oluşturduğu ve paylaşmadan önce inceleyebildiği export’lardan üretilir.',
      },
    ],
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
        body: 'Taksim; Claude Code, Claude masaüstü uygulaması, Codex, GitHub Copilot, Devin, OpenCode, Kilo Code ve Pi’nin yerel geçmişini ve hook’larını okur. Her tur bir defter satırına dönüşür: model, token, cache, liste fiyatı maliyeti.',
        detail: 'taksim setup',
      },
      {
        title: 'Değerlendir',
        body: 'Bir LLM judge, tamamlanmış bir tura bakar ve yeterli olacak en ucuz seviyeyi belirler. Oturumunuzun içindeki Claude’u veya Codex’i, yerel bir Ollama modelini ya da kendi API key’inizle çalışan uzak bir judge’ı kullanabilirsiniz.',
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
    clients: {
      title: 'Taksim her istemciyle ne yapar',
      body: 'Taksim her sağlayıcının koşulları dahilinde çalışır. Subscription planında Taksim yalnızca gözlemler. Canlı yönlendirme (routing), yalnızca kendi API key’inize faturalanan trafikle sınırlıdır.',
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
        { name: 'Ollama', body: 'Yerelde çalışır. Hiçbir şey makineden çıkmaz.' },
      ],
      subscriptionTitle: 'Subscription’da Taksim yalnızca gözlemler',
      subscriptionBody:
        'Claude ve ChatGPT planlarında Taksim yerel geçmişi ve hook’ları okur. İstemciniz ile subscription hesabınız arasına asla girmez ve modeli asla değiştirmez. Canlı yönlendirme yalnızca kendi API key’inize faturalanan trafik için ve yalnızca Taksim üzerinden başlattığınız oturumlarda geçerlidir.',
    },
    pricingTitle: 'Geliştiricilere ücretsiz. Ekiplere ücretli.',
    faqTitle: 'Sorular',
    faq: [
      {
        q: 'Taksim, Claude veya ChatGPT subscription’ımda modelimi değiştirir mi?',
        a: 'Hayır. Subscription trafiği yerel geçmiş ve hook’lar üzerinden gözlemlenir. Model değişikliği yalnızca kendi API key’inize faturalanan trafikte ve yalnızca taksim claude veya taksim codex ile başlattığınız oturumlarda olur.',
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
      {
        q: 'Fiyatlandırma ne kadar eksiksiz?',
        a: 'Taksim kaydedilen kullanımı, Claude Opus 5.5 ve Fable 5.1 dahil, yayımlanmış liste fiyatlarıyla fiyatlandırır. Liste fiyatı olmayan modeller hariç tutulur, asla ücretsiz sayılmaz ve her rapor fiyatlandırma kapsamını gösterir.',
      },
      {
        q: 'Hangi platformlar destekleniyor?',
        a: 'Şimdilik yalnızca Windows. Kolay kurulum üç adım sürer.',
      },
      {
        q: 'Taksim hangi turları değerlendirebilir?',
        a: 'Claude Code, Codex, OpenCode, Kilo Code, Pi ve Devin Desktop turlarını. OpenCode, Kilo Code ve Pi turları, Claude seviyesindeki modellerle çalıştıklarında değerlendirilir. GitHub Copilot ve Devin CLI oturumları içe aktarılır ve fiyatlandırılır, ancak henüz değerlendirilmez.',
      },
    ],
    cta: {
      title: 'Geçen haftanızın gerçekte neye ihtiyaç duyduğunu öğrenin.',
      body: 'taksim setup, istemcilerinizin zaten tuttuğu geçmişi içe aktarır ve ilk raporunuzu tek komutla yazar.',
      docs: 'Dokümanları okuyun',
    },
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
      features: [
        'Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code ve Pi için geçmiş içe aktarma',
        'Fiyatlandırılmış oturumlar, model dağılımı ve cache verimliliği',
        'Seçtiğiniz judge ile (oturum içi Claude veya Codex, Ollama, kendi API key’iniz) tur tur değerlendirme',
        'Yerel dashboard, haftalık rapor, digest ve status line',
        'API key trafiği için isteğe bağlı canlı yönlendirme',
      ],
      cta: 'Taksim’i kurun',
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
    lede: 'CLI, evde ya da işte, her birey için ücretsizdir. Şirketler ekip toplu görünümü için ödeme yapar.',
    faqTitle: 'Fiyatlandırma soruları',
    faq: [
      {
        q: 'Ücretsiz sürümü işte kullanabilir miyim?',
        a: 'Evet. CLI her birey için ücretsizdir. Şirketlerin ödeme yaptığı şey Team özellikleridir.',
      },
      {
        q: 'Taksim, Claude veya ChatGPT subscription’ımda modelimi değiştirir mi?',
        a: 'Hayır. Subscription trafiği yerel geçmiş ve hook’lar üzerinden gözlemlenir. Model değişikliği yalnızca kendi API key’inize faturalanan trafikte ve yalnızca taksim claude veya taksim codex ile başlattığınız oturumlarda olur.',
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
    client: 'İstemci',
    states: {
      yes: 'Destekleniyor',
      no: 'Desteklenmiyor',
      unverified: 'Doğrulanmadı',
    },
    capabilities: {
      observe: {
        label: 'Gözlem',
        description:
          'Her oturumu yerel geçmiş, hook’lar veya istemcinin kendi oturum deposu üzerinden modele göre fiyatlandırır.',
      },
      judge: {
        label: 'Judge',
        description: 'Bir LLM judge, daha ucuz bir model seviyesinin yeterli olup olmayacağını değerlendirir.',
      },
      route: {
        label: 'Yönlendirme',
        description:
          'İsteğe bağlı canlı model seçimi; yalnızca kendi API key’inize faturalanan trafikte ve yalnızca Taksim üzerinden başlattığınız oturumlarda.',
      },
    },
    rows: {
      claudeCodePlan: {
        client: 'Claude Code',
        access: 'Free, Pro, Max, Team veya Enterprise planı',
        observe: 'Geçmiş içe aktarma, hook’lar ve status line.',
        judge: '',
        route: 'Proxy yok, model değişikliği yok.',
      },
      claudeDesktop: {
        client: 'Claude masaüstü uygulaması',
        access: 'Claude planı',
        observe: 'Kullanıcı düzeyindeki bir hook ile yerel transkriptler.',
        judge: '',
        route: 'Proxy yok, model değişikliği yok.',
      },
      claudeCodeApi: {
        client: 'Claude Code',
        access: 'Anthropic API key',
        observe: '',
        judge: '',
        route: 'İsteğe bağlı; yerel gateway üzerinden, taksim claude ile başlattığınız oturumlarda.',
      },
      codexPlan: {
        client: 'Codex CLI',
        access: 'ChatGPT planı',
        observe: 'CODEX_HOME oturumlarından geçmiş içe aktarma.',
        judge: 'Geçmiş değerlendirmesi ve oturum içi Stop hook.',
        route: 'Sunulmuyor. Proxy yok, model değişikliği yok.',
      },
      codexApi: {
        client: 'Codex CLI',
        access: 'OpenAI API key',
        observe: 'Geçmiş içe aktarma ve yerel gateway.',
        judge: '',
        route: 'İsteğe bağlı; yerel gateway üzerinden, taksim codex ile başlattığınız oturumlarda.',
      },
      copilotPlan: {
        client: 'GitHub Copilot',
        access: 'Copilot planı',
        observe: 'Yerel Copilot CLI oturum deposundan kullanım içe aktarma.',
        judge: 'Henüz değil.',
        route: 'İstek anında yönlendirme yok. taksim copilot yalnızca başlangıç modelini seçer.',
      },
      devinCli: {
        client: 'Devin CLI',
        access: 'Devin planı',
        observe: 'Yerel Devin oturum deposundan geçmiş içe aktarma.',
        judge: 'Henüz değil.',
        route: 'İstek anında yönlendirme yok.',
      },
      devinDesktop: {
        client: 'Devin Desktop',
        access: 'Eski adıyla Windsurf, Devin planı',
        observe: 'Yerel ACP olay günlüğünden geçmiş içe aktarma.',
        judge: '',
        route: 'Asla yönlendirilmez. Proxy yok, model değişikliği yok.',
      },
      openCodeKilo: {
        client: 'OpenCode ve Kilo Code',
        access: 'Kendi sağlayıcı ayarlarınız',
        observe: 'Yerel oturum veritabanlarından geçmiş içe aktarma.',
        judge: 'Claude seviyesindeki modellerle çalışan turlar.',
        route: 'Sunulmuyor.',
      },
      pi: {
        client: 'Pi ve Oh My Pi',
        access: 'Kendi sağlayıcı ayarlarınız',
        observe: 'Yerel oturum dosyalarından geçmiş içe aktarma.',
        judge: 'Claude seviyesindeki modellerle çalışan turlar.',
        route: 'Sunulmuyor.',
      },
    },
    footnote:
      'Anthropic’in Claude Code koşulları, subscription kimlik bilgilerinin yalnızca Claude Code’un kendisi tarafından kullanılmasını şart koşar; bu yüzden Taksim, Claude Code ile bir subscription hesabı arasına asla girmez.',
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
        ],
      },
      {
        title: 'Hızlı başlangıç',
        links: [
          ['Kolay kurulum', '/docs/quick-start'],
          ['Ayrıntılı kurulum rehberi', '/docs/getting-started'],
          ['Sonraki adımlar', '/docs/next-steps'],
          ['Giriş yapma (isteğe bağlı)', '/docs/sign-in'],
        ],
      },
      {
        title: 'Taksim’i kullanın',
        links: [
          ['Dashboard', '/docs/next-steps#dashboard'],
          ['Judge değerlendirmesi', '/docs/next-steps#judging'],
          ['Bütçeler, digest ve uyarılar', '/docs/next-steps#budgets'],
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
        title: 'Giriş yapma (isteğe bağlı)',
        copy: 'Barındırılan özellikler için isteğe bağlı tarayıcı girişi, hatırlanan erişim ve model gösterimi.',
        href: '/docs/sign-in',
        keywords:
          'identity google github login logout device credential model optional off by default terms giriş oturum açma kimlik isteğe bağlı',
      },
      {
        title: 'Subscription ve API key',
        copy: 'Claude subscription’larının neden yeniden yazılmayıp yalnızca gözlemlendiği ve API key yönlendirmesinin nasıl farklılaştığı.',
        href: '#subscriptions-and-api-keys',
        keywords: 'subscription max pro api key rewrite observe quota baseline report abonelik kota gözlem',
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
        copy: 'Claude Code, Codex, Copilot, Devin, OpenCode, Kilo Code ve Pi için destek sınırlarını tam olarak görün.',
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
    lede: 'AI kodlama için yerel öncelikli bir yeterlilik defteri: hangi model çalıştı, maliyeti ne oldu ve daha ucuz bir model yeterli olur muydu.',
    signInTitle: 'Giriş yapmak isteğe bağlıdır ve varsayılan olarak kapalıdır',
    signInBody:
      'Taksim’i kurun ve hesap olmadan `taksim claude` veya `taksim codex` çalıştırın. Barındırılan giriş yalnızca bir operatör `Identity__Enabled=true` ayarladığında devreye girer. [İsteğe bağlı giriş rehberine](/docs/sign-in) bakın.',
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
          body: 'Bir LLM judge, tamamlanmış bir turu değerlendirir ve yeterli olacak en ucuz seviyeyi belirler: oturum içi Claude veya Codex, Anthropic API key’iniz, kendi key’inizle TypeSafe Jev ya da yerel bir Ollama modeli. Claude Code, Codex, OpenCode, Kilo Code, Pi ve Devin Desktop turları değerlendirilebilir; Copilot ve Devin CLI turları fiyatlandırılır ancak henüz değerlendirilmez.',
        },
        {
          term: 'Consensus',
          body: 'Bir karar yalnızca iki judge uzlaştığında ve en az biri güçlü bir judge olduğunda sayılır. Yalnızca zayıf judge’ların uzlaşması ve anlaşmazlıklar raporlanır ama asla sayılmaz.',
        },
        {
          term: 'Shadow policy',
          body: 'Taksim, consensus kararlarından yönlendirme varsayılanları önerebilir ve bunların neleri değiştireceğini raporlayabilir. Shadow policy karşı olgusal kalır; modelinizi asla değiştirmez.',
        },
      ],
    },
    gateway: {
      title: 'Yerel gateway, tasarımı gereği fail-open',
      body: 'API key trafiği için isteğe bağlı canlı yönlendirme, 127.0.0.1 üzerindeki yerel bir gateway’i kullanır. Telemetri, kalıcı kayıt ve uzak öneriler, sağlıklı bir sağlayıcı isteğini asla bekletemez.',
      calloutTitle: 'Yerel iş akışı her zaman kullanılabilir',
      calloutBody:
        'Yönetilen yol güvenli şekilde başlatılamazsa Taksim, geliştiriciyi engellemek yerine istemcinin yerel çağrısını korur. Ham prompt, yanıt ve kaynak içerik varsayılan olarak kalıcı saklanmaz; barındırılan özelliklere veya uzak bir judge’a açıkça izin vermediğiniz sürece hiçbir şey makineden çıkmaz.',
    },
    subscriptions: {
      title: 'Subscription’lar gözlemlenir, yeniden yazılmaz',
      body: 'Claude Code bir Claude subscription’ı (Max veya Pro, Team veya Enterprise) ile kimlik doğrulaması yapmışsa Taksim modeli yeniden yazmaz ve Claude Code ile subscription hesabı arasına asla girmez. `taksim claude`, Claude Code’u yerel olarak başlatır ve yerel transkriptler ile hook’lar üzerinden gözlemler. Model yeniden yazımı yalnızca API key trafiği için, Taksim üzerinden başlattığınız oturumlarda geçerlidir. Aynısı ChatGPT planındaki Codex için de geçerlidir; Codex yerel oturum geçmişi üzerinden gözlemlenir.',
      body2:
        'Subscription kullanımı, faturalanan değil kota olarak etiketlenmiş API eşdeğeri liste fiyatı olarak gösterilir. Subscription kullanıcıları için değer; kota görünürlüğü, bir baseline raporu (`taksim report baseline`) ve tamamlanan turlar için judge kararlarıdır, bir tasarruf vaadi değil.',
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
          'Subscription trafiği gözlemlenir, asla yeniden yazılmaz',
        ],
        [
          'Codex',
          'Mevcut',
          'Yalnızca API key, isteğe bağlı',
          'Mevcut',
          'API key’lerde Responses gateway; model yeniden yazımı yalnızca doğrulanmış model id’leri için; ChatGPT girişi gözlemlenir, asla yeniden yazılmaz',
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
    lede: 'Üç adım, yaklaşık iki dakika. Hesap ya da yönetici yetkisi gerekmez. Şimdilik Windows x64.',
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
      body: 'Setup kendiliğinden başlamadıysa yeni bir PowerShell penceresi açın ve şunu çalıştırın:',
      seeTitle: 'Ne göreceksiniz',
      see: [
        '**Bulunan istemciler**: bu makinedeki kodlama ajanları; örneğin Claude Code, Codex, GitHub Copilot, OpenCode, Kilo Code ve Pi.',
        '**Kimlik bilgisi modu**: subscription ile giriş yapılmış istemciler yalnızca gözlem (observe-only) olarak gösterilir. Taksim transkriptlerini ve hook’larını okur; hiçbir trafik Taksim’den geçmez.',
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
      body: 'Henüz bir kaldırma komutu yok. Taksim’i tamamen kaldırmak için:',
      steps: [
        'Açtıysanız Taksim’in Claude Code ve Codex’e eklediği hook’ları ve kaydedilmiş Slack veya webhook adresini kaldırın: `taksim judge disable --user-settings`, `taksim judge disable --codex-settings`, `taksim cache-guard disable` ve `taksim notify clear`.',
        'Program klasörünü (`%LOCALAPPDATA%\\Taksim`) silin ve `current` girdisini kullanıcı PATH’inizden kaldırın (Başlat, “ortam değişkenleri” yazın, Hesabınız için ortam değişkenlerini düzenleyin).',
        'Yerel defterinizi ve raporlarınızı da silmek için `%USERPROFILE%\\.taksim` klasörünü silin. Bu işlem geri alınamaz.',
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
    lede: 'Taksim’i Windows’a kurmanın tüm ayrıntıları: kurulum aracının neyi kontrol ettiği, çalıştığını nasıl doğrulayacağınız ve ilk oturumunuzu nasıl başlatacağınız. Kısa sürüm için [kolay kurulumu](/docs/quick-start) kullanın.',
    noAccountTitle: 'Taksim hesabı gerekmez',
    noAccountBody:
      'Taksim’i kurun ve doğrudan çalıştırın. Taksim girişi isteğe bağlıdır ve varsayılan olarak kapalıdır; yalnızca bir operatör barındırılan özellikleri açarsa önem taşır. [İsteğe bağlı giriş rehberine](/docs/sign-in) bakın.',
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
      body: 'Windows’un Taksim komutunu tanıyabilmesi için yeni bir PowerShell terminali açın ve şunu çalıştırın:',
      after:
        'Üç komutun da başarıyla tamamlanması gerekir. `doctor` yerel ortamı kontrol eder ve güncelleme olduğunda söyler; `install status` kurulu sürümü ve yolunu gösterir.',
    },
    setup: {
      title: '5. Setup’ı çalıştırın ve dashboard’u açın',
      body: 'Kurulum aracı setup’ı sizin için çalıştırır. İstediğiniz zaman yeniden çalıştırabilirsiniz; tekrarlamak güvenlidir. İstemcilerinizi ve kimlik bilgisi modlarını bulur, geçmişlerini içe aktarıp fiyatlandırır, oturum içi judge değerlendirmesini açar ve ilk raporunuzu yazar. Ardından yerel dashboard’u açın:',
    },
    session: {
      title: '6. İsteğe bağlı: yönetilen bir oturum başlatın',
      body: '`claude`, `codex` ve diğer istemcilerinizi eskisi gibi çalıştırmaya devam edebilirsiniz; Taksim geçmişlerini okur. Taksim’in Claude Code veya Codex’i kendi hook’ları ve status line’ı ile (API key trafiğinde isteğe bağlı yönlendirmeyle) başlatmasını istiyorsanız aşağıdakilerden birini çalıştırın. Yerel istemciye yönelik argümanlar komutun ardından gelebilir.',
      expectTitle: 'Ne beklemelisiniz',
      expectBody:
        'Claude veya ChatGPT subscription’ında Taksim istemciyi yerel olarak başlatır ve gözlemler; hiçbir trafik Taksim’den geçmez. API key ile Taksim önce yerel gateway’ini `127.0.0.1` üzerinde hazırlar; yönetilen yol kullanılamazsa istemci kendi yerel davranışına döner. Varsayılan olarak her şey yerelde çalışır; barındırılan özelliklere veya uzak bir judge’a açıkça izin vermediğiniz sürece hiçbir şey makineden çıkmaz.',
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
    team: {
      title: 'Ekip toplu görünümü',
      body: 'Her geliştirici ortak bir klasöre yalnızca metadata içeren bir export yazar ve paylaşmadan önce inceleyebilir; export’lar dosya yollarını değil, repo takma adlarını içerir. Ekip lideri bunları tek bir raporda birleştirir ya da dashboard’da açar. Ekip toplu görünümü [Team planının](/pricing) parçasıdır.',
    },
    toc: {
      label: 'Bu sayfada',
      dashboard: 'Dashboard',
      judging: 'Judge',
      budgets: 'Bütçeler ve uyarılar',
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
        body: 'Taksim varsayılan olarak yerelde çalışır. Varsayılan olarak barındırılan bir yönlendirme önerisi servisi yoktur ve barındırılan bir Taksim özelliğine açıkça izin vermediğiniz sürece hiçbir şey makineden çıkmaz. Bu, Taksim’in kendi telemetrisi ve barındırılan servisleri hakkında bir beyandır; Taksim üzerinden çalıştırdığınız yerel AI istemcisi hakkında değil. Uzak bir judge (kendi key’inizle Anthropic veya TypeSafe Jev) seçerseniz, o sağlayıcı değerlendirdiği turların kısaltılmış alıntılarını alır. Claude Code, Codex veya başka bir sağlayıcıya ait istemcide oturum açarsanız, o istemci Taksim’den bağımsız olarak prompt’ları ve yanıtları o sağlayıcının koşulları altında kendi sağlayıcısına göndermeye devam eder. Bazı adaptörler, içerikten bağımsız sınıflandırmalar ve yapısal bilgiler türetmek için yerel istemci verilerini veya istek içeriğini geçici olarak inceleyebilir. Her istemcinin ürün dokümantasyonu kendi sınırını tam olarak açıklar. Gözlemlenen sağlayıcı veya model belirlenemediğinde Taksim bunu bilinmiyor olarak kaydeder.',
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
