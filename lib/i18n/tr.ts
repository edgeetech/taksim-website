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
      lede: 'Taksim; Claude Code, Codex ve GitHub Copilot’un yerel geçmişini ve hook’larını okur, her oturumu fiyatlandırır ve tamamlanan Claude Code turlarını değerlendirir: Opus gerçekten gerekli miydi, yoksa Sonnet yeterli olur muydu? Kendi makinenizde çalışır; prompt ya da kod saklamaz.',
      seeHow: 'Nasıl çalıştığını görün',
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
        body: 'Taksim; Claude Code, Claude masaüstü uygulaması ve Codex’in yerel geçmişini ve hook’larını okur, GitHub Copilot kullanımını da yerel oturum deposundan içe aktarır. Her tur bir defter satırına dönüşür: model, token, cache, liste fiyatı maliyeti.',
        detail: 'taksim setup',
      },
      {
        title: 'Değerlendir',
        body: 'Bir LLM judge, tamamlanmış bir Claude Code turuna bakar ve yeterli olacak en ucuz seviyeyi belirler. Oturumunuzun içindeki Claude’u, yerel bir Ollama modelini ya da kendi API key’inizle çalışan uzak bir judge’ı kullanabilirsiniz.',
        detail: 'taksim judge enable --in-session',
      },
      {
        title: 'Uzlaş',
        body: 'Bir karar yalnızca iki judge uzlaştığında ve en az biri güçlü bir judge olduğunda sayılır. Yalnızca zayıf judge’ların uzlaşması ve anlaşmazlıklar gösterilir ama asla sayılmaz; böylece tek bir hoşgörülü judge rakamı şişiremez.',
        detail: 'taksim judge status',
      },
      {
        title: 'Raporla',
        body: 'Tek komut, tek haftalık rapor: harcama, model dağılımı, cache verimliliği, judge kapsamı ve bir shadow policy’nin neleri değiştireceği. Shadow policy karşı olgusaldır. Taksim modelinizi asla sessizce değiştirmez.',
        detail: 'taksim report weekly --html',
      },
    ],
    report: {
      title: 'Tek komut, tek haftalık rapor.',
      body: 'Tek başına çalışan bir HTML dosyası için taksim report weekly --html, ne kadar tasarruf edebileceğinizin tek sayfalık özeti için taksim digest komutunu çalıştırın. Raporun yapısı aşağıda, örnek rakamlarla.',
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
        a: 'Şimdilik yalnızca Windows. Kurulum rehberi tüm kurulumu anlatır.',
      },
      {
        q: 'Taksim, Codex veya Copilot turlarını değerlendirebilir mi?',
        a: 'Henüz değil. Codex ve Copilot oturumları içe aktarılır ve fiyatlandırılır, ancak değerlendirme yalnızca Claude Code turlarını kapsar.',
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
        'Claude Code, Codex ve Copilot için geçmiş içe aktarma',
        'Fiyatlandırılmış oturumlar, model dağılımı ve cache verimliliği',
        'Claude Code oturumlarının, seçtiğiniz judge ile (oturum içi Claude, Ollama, kendi API key’iniz) tur tur değerlendirilmesi',
        'Haftalık rapor, digest ve status line',
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
          'Her oturumu yerel geçmiş, hook’lar veya Copilot CLI oturum deposu üzerinden modele göre fiyatlandırır.',
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
        judge: 'Henüz değil. Değerlendirme yalnızca Claude Code turlarını kapsar.',
        route: 'Sunulmuyor. Proxy yok, model değişikliği yok.',
      },
      codexApi: {
        client: 'Codex CLI',
        access: 'OpenAI API key',
        observe: 'Geçmiş içe aktarma ve yerel gateway.',
        judge:
          'Henüz değil. Bu turları yalnızca deneysel Jev judge değerlendirir ve tek bir zayıf judge asla tasarrufa sayılmaz.',
        route: 'İsteğe bağlı; yerel gateway üzerinden, taksim codex ile başlattığınız oturumlarda.',
      },
      copilotPlan: {
        client: 'GitHub Copilot',
        access: 'Copilot planı',
        observe: 'Yerel Copilot CLI oturum deposundan kullanım içe aktarma.',
        judge: '',
        route: 'İstek anında yönlendirme yok. taksim copilot yalnızca başlangıç modelini seçer.',
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
          ['Taksim’i kurun', '/docs/getting-started'],
          ['Giriş yapma (isteğe bağlı)', '/docs/sign-in'],
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
        title: 'Taksim’i kurun',
        copy: 'Doğrulanmış Windows sürümünü kurun, kontrol edin ve Claude Code veya Codex’i başlatın.',
        href: '/docs/getting-started',
        keywords:
          'quickstart install setup cli start release v0.2.0 windows powershell checksum claude code codex doctor troubleshooting kurulum hızlı başlangıç sorun giderme',
      },
      {
        title: 'Taksim nasıl çalışır',
        copy: 'Yerel defteri, judge değerlendirmesini, consensus’u ve shadow policy’yi anlayın.',
        href: '#how-taksim-works',
        keywords: 'ledger judge consensus shadow policy verdict tier defter karar seviye',
      },
      {
        title: 'İstemci uyumluluğu',
        copy: 'Claude Code, Codex ve Copilot için destek sınırlarını tam olarak görün.',
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
          body: 'Bir LLM judge, tamamlanmış bir Claude Code turunu değerlendirir ve yeterli olacak en ucuz seviyeyi belirler: oturum içi Claude, Anthropic API key’iniz, kendi key’inizle TypeSafe Jev ya da yerel bir Ollama modeli. Codex ve Copilot turları fiyatlandırılır ancak henüz değerlendirilmez.',
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
        'Subscription kullanımı, faturalanan değil kota olarak etiketlenmiş API eşdeğeri liste fiyatı olarak gösterilir. Subscription kullanıcıları için değer; kota görünürlüğü, bir baseline raporu (`taksim report baseline`) ve tamamlanan Claude Code turları için judge kararlarıdır, bir tasarruf vaadi değil.',
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
          'Henüz değil',
          'API key’lerde Responses gateway; model yeniden yazımı yalnızca doğrulanmış model id’leri için; ChatGPT girişi gözlemlenir, asla yeniden yazılmaz',
        ],
        [
          'GitHub Copilot',
          'Mevcut',
          'Mevcut değil',
          'Henüz değil',
          'Yerel Copilot CLI oturum deposundan kullanım içe aktarma; yalnızca başlangıç modeli seçimi',
        ],
      ],
    },
    next: 'Sonraki',
    nextLink: 'Taksim’i kurun',
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

  gettingStarted: {
    eyebrow: 'Hızlı başlangıç',
    title: 'Taksim’i kurun',
    lede: 'Taksim’i Windows’a kurun, yerel kurulumu kontrol edin ve dokümantasyondan ayrılmadan ilk yönetilen Claude Code veya Codex oturumunuzu başlatın.',
    noAccountTitle: 'Taksim hesabı gerekmez',
    noAccountBody:
      'Kurun ve doğrudan `taksim claude` veya `taksim codex` çalıştırın. Taksim girişi isteğe bağlıdır ve varsayılan olarak kapalıdır; yalnızca bir operatör barındırılan özellikleri açarsa önem taşır. [İsteğe bağlı giriş rehberine](/docs/sign-in) bakın.',
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
      body: 'Bir Windows bilgisayar, PowerShell ve oturum açılmış bir kodlama istemcisi gerekir. Taksim hesabı gerekmez. [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview) veya [Codex](https://developers.openai.com/codex/cli/) istemcilerinden birini kurup oturum açın. Yalnızca birine ihtiyacınız var; hangisi olduğunu bu rehberin ilerleyen adımlarında seçeceksiniz.',
    },
    install: {
      title: '3. İndirin ve kurun',
      body: 'Geçici kurulum dosyasını tutmaktan rahatsız olmayacağınız bir klasörde PowerShell’i açın ve aşağıdaki iki komutu çalıştırın. Kurulum aracı seçilen sürümü HTTPS üzerinden indirir, yayımlanmış SHA-256 checksum’ını kontrol eder, binary’yi doğrular ve ancak bundan sonra yerel kurulumu o sürüme geçirir.',
      note: 'Taksim, sürümlü binary’lerini `%LOCALAPPDATA%\\Taksim` altında, ayrı kullanıcı verilerini ise `%USERPROFILE%\\.taksim` altında tutar. Güncellenmiş bir sürümü kurmak bu kullanıcı verisi dizinini değiştirmez.',
    },
    verify: {
      title: '4. Kurulumu doğrulayın',
      body: 'Windows’un Taksim komutunu tanıyabilmesi için yeni bir PowerShell terminali açın ve şunu çalıştırın:',
      after:
        'Üç komutun da başarıyla tamamlanması gerekir. `doctor` yerel ortamı kontrol eder; `install status` kurulu sürümü ve yolunu gösterir.',
    },
    session: {
      title: '5. İlk oturumunuzu başlatın',
      body: 'Kurduğunuz kodlama istemcisi için tek bir komut çalıştırın. İki komutu birden çalıştırmayın. Yerel istemcinize yönelik argümanları seçtiğiniz komutun ardından ekleyebilirsiniz.',
      expectTitle: 'Ne beklemelisiniz',
      expectBody:
        'Taksim yerel Connector’ını `127.0.0.1` üzerinde hazırlar, ardından seçtiğiniz yerel istemciyi açar. Yerel Taksim yolu kullanılamıyorsa istemci fail-open davranarak kendi yerel davranışına döner. Varsayılan olarak her şey yerelde çalışır; barındırılan özelliklere veya uzak bir judge’a açıkça izin vermediğiniz sürece hiçbir şey makineden çıkmaz.',
    },
    inspect: {
      title: '6. Son oturumu inceleyin',
      body: 'Yönetilen bir görevi tamamladıktan sonra, Taksim’in son gözlemlenen istek için kaydettiği doğrulama kanıtını inceleyin:',
      after:
        'Açıklama, eksik veya tamamlanmamış kanıtı açıkça belirtir; başarılı bir sağlayıcı yanıtı tek başına kanıt olarak sunulmaz.',
    },
    history: {
      title: 'İsteğe bağlı: mevcut geçmişi içe aktarın',
      body: 'İlk yönetilen oturumunuz için geçmiş içe aktarma gerekmez. Desteklenen istemcilerden birini zaten kullanıyorsanız, hazır olduğunuzda yerel geçmişini içe aktarın:',
    },
    troubleshooting: {
      title: 'Sorun giderme',
      items: [
        {
          q: 'PowerShell `taksim` komutunu bulamıyor',
          a: 'PowerShell’i kapatın, yeni bir terminal açın ve `taksim version` komutunu yeniden çalıştırın. Hâlâ bulunamıyorsa kurulum aracını yeniden çalıştırın ve ardından yerel kurulumu incelemek için `taksim doctor` kullanın.',
        },
        {
          q: 'Claude Code veya Codex bulunamıyor',
          a: 'Seçtiğiniz istemciyi yukarıdaki resmi rehberiyle kurun, o istemcide oturum açın, yeni bir PowerShell terminali açın ve ilgili `taksim claude` veya `taksim codex` komutunu yeniden çalıştırın.',
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
      install: 'İndirin ve kurun',
      verify: 'Kurulumu doğrulayın',
      session: 'Oturum başlatın',
      inspect: 'Son oturumu inceleyin',
      history: 'Geçmişi içe aktarın',
      troubleshooting: 'Sorun giderme',
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
