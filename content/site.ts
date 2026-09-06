import type { L10n } from '@/lib/i18n';

/** English is the source of truth; Turkish is the mirror. */
const l = (en: string, tr: string): L10n => ({ en, tr });

/* ------------------------------------------------------------------ profile */

export const profile = {
  name: 'Muhammet Kaya',
  initials: 'MK',
  role: l('Software and Application Specialist', 'Yazılım ve Uygulama Uzmanı'),
  headline: l(
    'I build the systems companies actually run on.',
    'Şirketlerin gerçekten üzerinde çalıştığı sistemleri kuruyorum.'
  ),
  subtext: l(
    'ERP, MES and workflow platforms, end to end. .NET and MSSQL behind, Angular and React in front.',
    'ERP, MES ve iş akışı platformları, uçtan uca. Arkada .NET ve MSSQL, önde Angular ve React.'
  ),
  location: l('Çayırova, Kocaeli, Türkiye', 'Çayırova, Kocaeli, Türkiye'),
  specs: [
    { k: l('Role', 'Rol'), v: l('Software and Application Specialist', 'Yazılım ve Uygulama Uzmanı') },
    { k: l('Now', 'Şu an'), v: l('Sango Otomotiv, Gebze', 'Sango Otomotiv, Gebze') },
    { k: l('Based', 'Konum'), v: l('Çayırova, Kocaeli', 'Çayırova, Kocaeli') },
    { k: l('Field', 'Alan'), v: l('ERP, MES, workflow engines', 'ERP, MES, iş akışı motorları') },
  ],
  email: 'mkaya349@hotmail.com',
  github: 'https://github.com/kaya2m',
  linkedin: 'https://www.linkedin.com/in/muhammet-kaya-ln',
};

/* --------------------------------------------------------------------- nav */

export const navItems = [
  { id: 'about', label: l('About', 'Hakkımda') },
  { id: 'work', label: l('Work', 'Projeler') },
  { id: 'experience', label: l('Experience', 'Deneyim') },
  { id: 'stack', label: l('Stack', 'Teknolojiler') },
  { id: 'contact', label: l('Contact', 'İletişim') },
];

/* -------------------------------------------------------------------- copy */

export const ui = {
  skipToContent: l('Skip to content', 'İçeriğe atla'),
  menuOpen: l('Open menu', 'Menüyü aç'),
  menuClose: l('Close menu', 'Menüyü kapat'),
  languageLabel: l('Change language', 'Dili değiştir'),

  heroCtaWork: l('View Work', 'Projeleri Gör'),
  heroCtaContact: l('Get in Touch', 'İletişime Geç'),
  portraitAlt: l('Portrait of Muhammet Kaya', 'Muhammet Kaya portresi'),

  aboutTitle: l('About', 'Hakkımda'),
  workTitle: l('Selected Work', 'Seçili Projeler'),
  experienceTitle: l('Experience', 'Deneyim'),
  stackTitle: l('Stack', 'Teknolojiler'),

  filterAll: l('All', 'Tümü'),
  filterLabel: l('Filter projects by type', 'Projeleri türe göre filtrele'),
  visitSite: l('Visit site', 'Siteye git'),

  layerClient: l('Client', 'İstemci'),
  layerService: l('Service', 'Servis'),
  layerData: l('Data', 'Veri'),
  projectListLabel: l('Choose a project', 'Bir proje seçin'),

  statusLive: l('Live', 'Yayında'),
  statusInternal: l('Internal', 'Kurumsal'),
  statusBuilding: l('In progress', 'Geliştiriliyor'),


  careerTitle: l('Four years, six teams', 'Dört yıl, altı ekip'),
  careerNote: l('Hover a bar to read the role.', 'Rolü okumak için bir çubuğun üzerine gelin.'),
  careerTable: l('Read as a table', 'Tablo olarak oku'),
  colRole: l('Role', 'Rol'),
  colCompany: l('Company', 'Şirket'),
  colPeriod: l('Period', 'Dönem'),
  colDomain: l('Domain', 'Alan'),

  presentLabel: l('Present', 'Devam ediyor'),
  highlightsLabel: l('Highlights', 'Öne çıkanlar'),

  contactTitle: l('Let us build something', 'Birlikte bir şey inşa edelim'),
  contactBody: l(
    'Have a process that still runs on spreadsheets, or a product that needs an engineer who can take it from schema to screen? Write to me. I read everything.',
    'Hâlâ Excel üzerinden yürüyen bir süreciniz ya da şemadan ekrana taşıyacak bir mühendis arayan bir ürününüz mü var? Yazın, hepsini okuyorum.'
  ),
  copyEmail: l('Copy email address', 'E-posta adresini kopyala'),
  copied: l('Copied', 'Kopyalandı'),
  builtWith: l('Built with Next.js and TypeScript.', 'Next.js ve TypeScript ile geliştirildi.'),
  rights: l('All rights reserved.', 'Tüm hakları saklıdır.'),
};

/* -------------------------------------------------------------------- stats */

export const stats = [
  { value: '3.5', suffix: l('yrs', 'yıl'), label: l('Shipping software', 'Yazılım geliştiriyorum') },
  { value: '6', suffix: '', label: l('Companies and industries', 'Şirket ve sektör') },
  { value: '12', suffix: '+', label: l('Departments digitalised', 'Dijitalleşen departman') },
  { value: '7', suffix: '', label: l('Platforms in production', 'Üretimdeki platform') },
];

/* -------------------------------------------------------------------- about */

export const about = {
  paragraphs: [
    l(
      'I am Muhammet, a software engineer and a graduate of Bursa Uludağ University. For the last three and a half years I have been doing one thing over and over, in different industries: walking into a company where the real work lives in spreadsheets, paper forms and somebody’s head, and walking out with a system that runs it.',
      'Ben Muhammet, Bursa Uludağ Üniversitesi mezunu bir yazılım mühendisiyim. Son üç buçuk yıldır farklı sektörlerde aynı işi yapıyorum: gerçek işin Excel dosyalarında, kâğıt formlarda ve birinin aklında yürüdüğü bir şirkete giriyorum, o işi çalıştıran bir sistem bırakarak çıkıyorum.'
    ),
    l(
      'In practice that has meant ERP customisation on a packaging line, SAP integrated production tracking and OEE on a laminate factory floor, a CRM welded to a CAD/CAM product, and today an entire back office portal at Sango: HR, training, IT, DMS, QDMS, e-archive accounting, purchasing, supplier and customer portals and project management, on .NET, MSSQL and Angular with a configurable workflow engine underneath.',
      'Pratikte bu; bir ambalaj hattında ERP özelleştirmesi, laminat fabrikasında SAP entegre üretim takibi ve OEE, bir CAD/CAM ürününe entegre CRM ve bugün Sango’da komple bir back-office portalı demek. İK, eğitim, IT, DMS, QDMS, e-arşiv muhasebe, satınalma, tedarikçi ve müşteri portalları, proje yönetimi; .NET, MSSQL ve Angular üzerinde, altında konfigüre edilebilir bir workflow engine ile.'
    ),
    l(
      'Outside work I build products: an outdoor social network, a travel route planner, a digital menu SaaS and a low-code studio. Same instinct, different audience. Take something people do by hand and make the software disappear behind it.',
      'İşin dışında ürünler geliştiriyorum: bir outdoor sosyal ağ, seyahat rotası planlayıcı, dijital menü SaaS’ı ve bir low-code stüdyo. Aynı içgüdü, farklı kitle. İnsanların elle yaptığı bir işi alıp yazılımı arkasında görünmez hâle getirmek.'
    ),
  ],
  facts: [
    { k: l('Focus', 'Odak'), v: l('ERP, MES and workflow engines', 'ERP, MES ve iş akışı motorları') },
    { k: l('Backend', 'Backend'), v: '.NET, ASP.NET Core, MSSQL' },
    { k: l('Frontend', 'Frontend'), v: 'Angular, React, Next.js' },
    { k: l('Integrations', 'Entegrasyonlar'), v: l('SAP, PLC and mobile clients', 'SAP, PLC ve mobil istemciler') },
    { k: l('Education', 'Eğitim'), v: l('Bursa Uludağ University', 'Bursa Uludağ Üniversitesi') },
    { k: l('Languages', 'Diller'), v: l('Turkish (native), English', 'Türkçe (ana dil), İngilizce') },
  ],
};

/* ------------------------------------------------------------------ projects */

export type ProjectCategory = 'product' | 'platform' | 'enterprise';
export type ProjectStatus = 'live' | 'internal' | 'building';

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  featured?: boolean;
  tagline: L10n;
  description: L10n;
  role: L10n;
  stack: string[];
  logo?: string;
  href?: string;
  extra?: { label: L10n; href: string };
};

export const projectCategories: { id: ProjectCategory; label: L10n }[] = [
  { id: 'product', label: l('Products', 'Ürünler') },
  { id: 'platform', label: l('Platforms', 'Platformlar') },
  { id: 'enterprise', label: l('Enterprise', 'Kurumsal') },
];

export const projects: Project[] = [
  {
    slug: 'sipatra',
    logo: '/logos/sipatra.png',
    name: 'Sipatra',
    category: 'product',
    status: 'building',
    year: '2026',
    featured: true,
    tagline: l(
      'The outdoor social network for hiking, cycling, paragliding and camping.',
      'Doğa yürüyüşü, bisiklet, yamaç paraşütü ve kamp için outdoor sosyal ağ.'
    ),
    description: l(
      'One recorder for every sport: pace and climb on foot, speed and cadence on the bike, altitude and glide in the air. The track is written to the phone first and uploaded later, so a dead zone never costs a recording. Privacy Zones are cut out on the server before anyone sees a route, and over a hundred thousand camps, water points and viewpoints across Europe sit on the same map as the trails between them.',
      'Her spor için tek bir kayıt motoru: yürüyüşte tempo ve tırmanış, bisikletde hız ve kadans, havada irtifa ve süzülme. Kayıt önce telefona yazılır, sonra yüklenir; böylece çekmeyen bir bölge asla bir aktiviteyi kaybettirmez. Privacy Zone’lar rotayı kimse görmeden sunucuda kesilir; Avrupa genelinde yüz binden fazla kamp alanı, su noktası ve manzara noktası, aralarındaki patikalarla aynı haritada durur.'
    ),
    role: l('Backend and platform engineering', 'Backend ve platform mühendisliği'),
    stack: ['Flutter', 'Dart', '.NET', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Docker', 'CQRS'],
    href: 'https://sipatra.com/',
  },
  {
    slug: 'sti-portal',
    name: 'STI Portal',
    category: 'enterprise',
    status: 'internal',
    year: '2026',
    featured: true,
    tagline: l(
      'A back office platform that moved a whole company off paper.',
      'Bir şirketin tamamını kâğıttan çıkaran back-office platformu.'
    ),
    description: l(
      'Built from scratch at Sango on .NET, MSSQL and Angular. HR, training, IT, DMS, QDMS, e-archive accounting, purchasing, project management and the supplier and customer portals all live in one system. API, web and mobile advance in parallel, and the workflow engine underneath lets approval flows be configured instead of coded.',
      'Sango’da .NET, MSSQL ve Angular ile sıfırdan geliştirildi. İK, eğitim, IT, DMS, QDMS, e-arşiv muhasebe, satınalma, proje yönetimi ile tedarikçi ve müşteri portalları tek bir sistemde yaşıyor. API, web ve mobil paralel ilerliyor; alttaki workflow engine sayesinde onay akışları kodlanmak yerine konfigüre ediliyor.'
    ),
    role: l('Architecture and full-stack development', 'Mimari ve full-stack geliştirme'),
    stack: ['.NET', 'ASP.NET Core', 'MSSQL', 'T-SQL', 'Angular', 'TypeScript', 'Workflow Engine'],
  },
  {
    slug: 'oge-ui',
    logo: '/logos/oge.png',
    name: 'OGE UI',
    category: 'platform',
    status: 'live',
    year: '2026',
    featured: true,
    tagline: l(
      'A signal-based, zoneless UI component suite for Angular and React.',
      'Angular ve React için signal tabanlı, zoneless UI bileşen kütüphanesi.'
    ),
    description: l(
      'The components enterprise screens actually need, built the way Angular works now: signals instead of zone change detection, and virtualisation so a grid stays responsive at row counts that break most suites. Data Grid, Tree List, Pivot Grid, Select Box, inputs and buttons, shipped open-core under MIT with a commercial pivot.',
      'Kurumsal ekranların gerçekten ihtiyaç duyduğu bileşenler, Angular’ın bugünkü çalışma biçimine göre kuruldu: zone tabanlı change detection yerine signal’lar ve çoğu kütüphaneyi kilitleyen satır sayılarında bile grid’i akıcı tutan sanallaştırma. Data Grid, Tree List, Pivot Grid, Select Box, input ve butonlar; MIT lisansıyla open-core, pivot tarafı ticari.'
    ),
    role: l('Library design and development', 'Kütüphane tasarımı ve geliştirmesi'),
    stack: ['Angular', 'React', 'TypeScript', 'Signals', 'Virtualisation', 'Monorepo'],
    href: 'https://ogeui.com/',
    extra: { label: l('Source', 'Kaynak kod'), href: 'https://github.com/oge-ui/oge-ui' },
  },
  {
    slug: 'creo-studio',
    logo: '/logos/creo.png',
    name: 'Creo Studio',
    category: 'platform',
    status: 'live',
    year: '2025',
    tagline: l(
      'Design an application in Studio, run it in Runtime.',
      "Uygulamayı Studio'da tasarla, Runtime'da çalıştır."
    ),
    description: l(
      'A low-code and no-code system development studio. A business configures its own data models, forms and workflows in Studio; Runtime renders and executes them without a release. Built so that a process change does not have to become a sprint.',
      'Low-code ve no-code bir sistem geliştirme stüdyosu. İşletme kendi veri modellerini, formlarını ve iş akışlarını Studio’da yapılandırır; Runtime bunları bir sürüm beklemeden render eder ve çalıştırır. Bir süreç değişikliğinin sprint’e dönüşmemesi için kuruldu.'
    ),
    role: l('Product design and full-stack development', 'Ürün tasarımı ve full-stack geliştirme'),
    stack: ['React', 'Next.js', 'TypeScript', '.NET', 'PostgreSQL'],
    href: 'https://creo-studio.vercel.app/',
    extra: { label: l('Runtime', 'Runtime'), href: 'https://creo-runtime.vercel.app/login' },
  },
  {
    slug: 'tripinyo',
    logo: '/logos/tripinyo.png',
    name: 'Tripinyo',
    category: 'product',
    status: 'live',
    year: '2025',
    tagline: l('Build a travel route, then let it optimise itself.', 'Seyahat rotanı kur, gerisini optimizasyona bırak.'),
    description: l(
      'A planner that turns a list of places into an ordered route, with the web and mobile clients sharing one API and one data model.',
      'Bir yer listesini sıralı bir rotaya çeviren planlayıcı. Web ve mobil istemciler tek bir API ve tek bir veri modeli paylaşıyor.'
    ),
    role: l('Full-stack development', 'Full-stack geliştirme'),
    stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Next.js', 'React Native'],
    href: 'https://tripinyo.com/',
  },
  {
    slug: 'promenucu',
    logo: '/logos/promenucu.png',
    name: 'Promenucu',
    category: 'product',
    status: 'live',
    year: '2024',
    tagline: l('Digital menus for restaurants, without the agency bill.', 'Restoranlar için dijital menü, ajans faturası olmadan.'),
    description: l(
      'A SaaS where a venue builds, prices and publishes its own menu, updates it from a phone, and hands guests a QR code instead of a laminated card.',
      'İşletmenin kendi menüsünü kurduğu, fiyatladığı ve yayınladığı bir SaaS. Menü telefondan güncelleniyor, misafire lamine kart yerine bir QR kod veriliyor.'
    ),
    role: l('Full-stack development', 'Full-stack geliştirme'),
    stack: ['.NET', 'Entity Framework', 'MSSQL', 'React', 'Next.js'],
    href: 'https://promenucu.com',
  },
  {
    slug: 'kent-erp',
    logo: '/logos/ilke.png',
    name: 'KENT ERP',
    category: 'enterprise',
    status: 'live',
    year: '2024',
    tagline: l('Factory operations and CRM on top of Logo ERP.', 'Logo ERP üzerine kurulu fabrika operasyonu ve CRM.'),
    description: l(
      'Runs İlke Ambalaj’s operational processes from raw material supply to customer shipment: purchasing, shift tracking, reporting and automated e-documents, integrated with Logo ERP.',
      'İlke Ambalaj’ın operasyonel süreçlerini hammadde tedarikinden müşteri sevkiyatına kadar yürütüyor: satınalma, vardiya takibi, raporlama ve otomatik e-belgeler, Logo ERP entegrasyonuyla.'
    ),
    role: l('ERP customisation and development', 'ERP özelleştirme ve geliştirme'),
    stack: ['ASP.NET MVC', 'AngularJS', 'MSSQL', 'T-SQL', 'Entity Framework', 'IIS'],
    href: 'https://erp.ilkeambalaj.com/',
  },
  {
    slug: 'asd-soft-v2',
    logo: '/logos/asd.png',
    name: 'ASD Soft V2',
    category: 'enterprise',
    status: 'internal',
    year: '2025',
    tagline: l('Production tracking wired straight into SAP.', "Doğrudan SAP'ye bağlı üretim takibi."),
    description: l(
      'Production planning, material management, work orders, OEE, quality control and workforce management in one solution, with two way SAP integration so floor data and management decisions move at the same speed.',
      'Üretim planlama, malzeme yönetimi, iş emirleri, OEE, kalite kontrol ve iş gücü yönetimi tek bir çözümde. Çift yönlü SAP entegrasyonu sayesinde saha verisi ve yönetsel kararlar aynı hızda ilerliyor.'
    ),
    role: l('Full-stack development and SAP integration', 'Full-stack geliştirme ve SAP entegrasyonu'),
    stack: ['.NET Core', 'Angular', 'DevExpress', 'SAP HANA', 'MSSQL', 'Docker', 'Azure'],
  },
];

/* --------------------------------------------------------------- experience */

/** Domain buckets drive the colour of a role on the career chart. */
export type DomainId = 'backoffice' | 'product' | 'manufacturing' | 'erp' | 'industrial';

/**
 * Validated on a dark chart surface with the dataviz palette checker: lightness
 * band, chroma floor, CVD separation, normal-vision floor and contrast all pass.
 */
export const domains: { id: DomainId; color: string; label: L10n }[] = [
  { id: 'backoffice', color: '#2a52d1', label: l('Back office platform', 'Back-office platformu') },
  { id: 'product', color: '#02806a', label: l('Product and platform', 'Ürün ve platform') },
  { id: 'manufacturing', color: '#b3541e', label: l('Manufacturing and MES', 'Üretim ve MES') },
  { id: 'erp', color: '#7a3fb0', label: l('ERP and CRM', 'ERP ve CRM') },
  { id: 'industrial', color: '#8a7a10', label: l('Industrial automation', 'Endüstriyel otomasyon') },
];

export type Experience = {
  company: string;
  domain: DomainId;
  /** Inclusive month bounds as YYYY-MM; `end` is null while the role is current. */
  start: string;
  end: string | null;
  position: L10n;
  period: L10n;
  duration: L10n;
  location: L10n;
  mode: L10n;
  current?: boolean;
  description: L10n;
  stack: string[];
  achievements: L10n[];
};

export const experiences: Experience[] = [
  {
    company: 'Sango Otomotiv A.Ş.',
    domain: 'backoffice',
    start: '2026-03',
    end: null,
    position: l('Software and Application Specialist', 'Yazılım ve Uygulama Uzmanı'),
    period: l('Mar 2026', 'Mar 2026'),
    duration: l('7 mos', '7 ay'),
    location: l('Gebze, Kocaeli', 'Gebze, Kocaeli'),
    mode: l('On-site, full-time', 'Ofiste, tam zamanlı'),
    current: true,
    description: l(
      'Building STI Portal from scratch, the company wide back office platform on .NET, MSSQL and Angular. HR, training, IT, DMS, QDMS, e-archive accounting, purchasing, supplier and customer portals and project management all move off manual process into one system, while API, web app and mobile app advance in parallel.',
      'Şirket genelindeki back-office platformu STI Portal’ı .NET, MSSQL ve Angular ile sıfırdan geliştiriyorum. İK, eğitim, IT, DMS, QDMS, e-arşiv muhasebe, satınalma, tedarikçi ve müşteri portalları ile proje yönetimi manuel süreçten çıkıp tek bir sisteme taşınıyor; API, web ve mobil uygulama paralel ilerliyor.'
    ),
    stack: ['.NET', 'ASP.NET Core', 'MSSQL', 'T-SQL', 'Angular', 'TypeScript', 'REST API', 'Mobile'],
    achievements: [
      l(
        'Designed the portal architecture and the configurable workflow engine every module builds on.',
        'Tüm modüllerin üzerine kurulduğu portal mimarisini ve konfigüre edilebilir workflow engine’i tasarladım.'
      ),
      l(
        'Digitalised more than ten departments that previously ran on paper and spreadsheets.',
        'Daha önce kâğıt ve Excel ile yürüyen on’dan fazla departmanı dijitale taşıdım.'
      ),
      l(
        'Shipped API, web and mobile clients on one shared domain model.',
        'API, web ve mobil istemcileri tek bir ortak domain modeli üzerinden yayına aldım.'
      ),
    ],
  },
  {
    company: 'Teori Bilgisayar Yazılım',
    domain: 'product',
    start: '2024-12',
    end: '2026-03',
    position: l('Software Specialist', 'Yazılım Uzmanı'),
    period: l('Dec 2024 - Mar 2026', 'Ara 2024 - Mar 2026'),
    duration: l('1 yr 4 mos', '1 yıl 4 ay'),
    location: l('İstanbul', 'İstanbul'),
    mode: l('Remote, full-time', 'Uzaktan, tam zamanlı'),
    description: l(
      'Responsible for the design, development and maintenance of client applications: system architecture, backend and web. Delivered custom software from scratch for very different businesses, including automation control systems, building management software and production monitoring. Also built a low-code studio that lets a business configure its own workflows, forms and data models instead of waiting for a release.',
      'Müşteri uygulamalarının tasarımı, geliştirilmesi ve bakımından sorumluydum: sistem mimarisi, backend ve web. Çok farklı işletmeler için sıfırdan özel yazılım teslim ettim; otomasyon kontrol sistemleri, bina yönetim yazılımları ve üretim izleme çözümleri dâhil. Ayrıca işletmelerin kendi iş akışlarını, formlarını ve veri modellerini bir sürüm beklemeden yapılandırabildiği bir low-code stüdyo geliştirdim.'
    ),
    stack: ['.NET', 'ASP.NET Web API', 'React', 'Next.js', 'Angular', 'PostgreSQL', 'MongoDB', 'Docker', 'Azure', 'DDD'],
    achievements: [
      l('Built a low-code studio with a runtime that renders configured applications.', 'Konfigüre edilen uygulamaları render eden runtime’ı ile bir low-code stüdyo geliştirdim.'),
      l('Led architecture and technical mentoring across client projects.', 'Müşteri projelerinde mimari ve teknik mentorluğu yürüttüm.'),
      l('Designed multi-tenant, multi-user systems built to scale.', 'Ölçeklenebilir, çok kiracılı ve çok kullanıcılı sistemler tasarladım.'),
    ],
  },
  {
    company: 'ASD Laminat',
    domain: 'manufacturing',
    start: '2024-12',
    end: '2025-06',
    position: l('Software Specialist', 'Yazılım Uzmanı'),
    period: l('Dec 2024 - Jun 2025', 'Ara 2024 - Haz 2025'),
    duration: l('7 mos', '7 ay'),
    location: l('Düzce', 'Düzce'),
    mode: l('On-site, via Teori', 'Ofiste, Teori bünyesinde'),
    description: l(
      'Developed SAP integrated enterprise applications to digitalise the factory’s production and project management. Built end to end visibility over production planning, raw material management, work orders, OEE tracking, quality control, warehouse and shipping. Two way SAP integration meant floor data was processed the moment it arrived and management decisions landed just as fast.',
      'Fabrikanın üretim ve proje yönetimi süreçlerini dijitalleştirmek için SAP entegre kurumsal uygulamalar geliştirdim. Üretim planlama, hammadde yönetimi, iş emirleri, OEE takibi, kalite kontrol, depo ve sevkiyat operasyonlarını uçtan uca izlenebilir hâle getirdim. Çift yönlü SAP entegrasyonu sayesinde sahadan gelen veri anında işlendi, yönetsel kararlar aynı hızla uygulandı.'
    ),
    stack: ['ASP.NET Core', 'Angular', 'Blazor', 'DevExtreme', 'SAP HANA', 'MSSQL', 'Dapper', 'Siemens S7', 'Modbus'],
    achievements: [
      l('Delivered end to end digitalisation and automation of factory processes.', 'Fabrika süreçlerinde uçtan uca dijitalleşme ve otomasyon sağladım.'),
      l('Raised operational efficiency through MES/MOM and SAP integration.', 'MES/MOM ve SAP entegrasyonlarıyla operasyonel verimliliği artırdım.'),
      l('Standardised processes and strengthened management visibility.', 'Süreçleri standartlaştırdım ve yönetimsel görünürlüğü güçlendirdim.'),
    ],
  },
  {
    company: 'İlke Ambalaj A.Ş.',
    domain: 'erp',
    start: '2023-11',
    end: '2024-10',
    position: l('Software Specialist', 'Yazılım Uzmanı'),
    period: l('Nov 2023 - Oct 2024', 'Kas 2023 - Eki 2024'),
    duration: l('1 yr', '1 yıl'),
    location: l('Gaziantep', 'Gaziantep'),
    mode: l('On-site, full-time', 'Ofiste, tam zamanlı'),
    description: l(
      'Customised the ERP that runs every operational process, from raw material supply to customer shipment and from purchasing to shift tracking. The result gave every business unit one integrated environment with optimised workflows, better reporting and automated e-documentation, on an architecture kept scalable and flexible on purpose. Development ran on Agile and CI/CD.',
      'Hammadde tedarikinden müşteri sevkiyatına, satınalmadan vardiya takibine kadar tüm operasyonel süreçleri yöneten ERP yazılımını özelleştirdim. Sonuçta tüm iş birimleri tek bir entegre ortama kavuştu: optimize iş akışları, gelişmiş raporlama ve otomatik e-dokümantasyon; bilinçli olarak ölçeklenebilir ve esnek tutulan bir mimari üzerinde. Geliştirme süreci Agile ve CI/CD ile yürütüldü.'
    ),
    stack: ['ASP.NET MVC', 'Entity Framework', 'MSSQL', 'T-SQL', 'MongoDB', 'AngularJS', 'DevExtreme', 'Azure', 'IIS'],
    achievements: [
      l('Delivered an ERP solution integrating every business unit.', 'Tüm iş birimlerini entegre eden bir ERP çözümü teslim ettim.'),
      l('Automated e-document flows and reporting.', 'E-belge akışlarını ve raporlamayı otomatikleştirdim.'),
      l('Ran the development cycle on Agile and CI/CD.', 'Geliştirme döngüsünü Agile ve CI/CD ile yönettim.'),
    ],
  },
  {
    company: 'ADeko Technologies',
    domain: 'erp',
    start: '2023-05',
    end: '2023-08',
    position: l('Assistant Software Specialist', 'Yazılım Uzmanı Yardımcısı'),
    period: l('May 2023 - Aug 2023', 'May 2023 - Ağu 2023'),
    duration: l('4 mos', '4 ay'),
    location: l('Nilüfer, Bursa', 'Nilüfer, Bursa'),
    mode: l('On-site, seasonal', 'Ofiste, dönemsel'),
    description: l(
      'Built a CRM integrated with the aDeko CAD and CAM application using XAML, to manage and track operations for the products tied to it. The CRM covered design, production planning, material supply and shipping, added reporting on top, and stayed focused on the experience of the customer using it.',
      'aDeko CAD ve CAM uygulamasıyla XAML kullanarak entegre edilen, uygulamaya bağlı ürünlerin operasyonlarını yöneten ve takip eden bir CRM sistemi geliştirdim. CRM; tasarım, üretim planlama, malzeme tedariki ve sevkiyat süreçlerini kapsıyor, üzerine raporlama ekliyor ve kullanan müşterinin deneyimine odaklanıyordu.'
    ),
    stack: ['C#', 'ASP.NET MVC', 'Entity Framework', 'MSSQL', 'T-SQL', 'XAML', 'Bootstrap', 'BitBucket'],
    achievements: [
      l('Shipped a CRM welded to a CAD and CAM product.', 'CAD ve CAM ürünüyle entegre bir CRM yayına aldım.'),
      l('Added reporting and tracking modules that improved daily use.', 'Günlük kullanımı iyileştiren raporlama ve takip modülleri ekledim.'),
    ],
  },
  {
    company: 'İletişim Yazılım',
    domain: 'industrial',
    start: '2023-02',
    end: '2023-05',
    position: l('Software Intern', 'Yazılım Uzmanı Stajyeri'),
    period: l('Feb 2023 - May 2023', 'Şub 2023 - May 2023'),
    duration: l('4 mos', '4 ay'),
    location: l('Bursa', 'Bursa'),
    mode: l('On-site, internship', 'Ofiste, staj'),
    description: l(
      'Integrated the communication layer of PLC machines into a web interface built with ASP.NET MVC, giving operators real time monitoring and remote control of the machines from a single panel.',
      'PLC makinelerinin iletişim altyapısını ASP.NET MVC ile geliştirilen bir web arayüzüne entegre ettim; operatörler tek bir panelden makineleri gerçek zamanlı izleyip uzaktan kontrol edebildi.'
    ),
    stack: ['C#', 'ASP.NET MVC', 'Entity Framework', 'PLC', 'Bootstrap'],
    achievements: [
      l('Built a real time machine monitoring and control panel.', 'Gerçek zamanlı makine izleme ve kontrol paneli geliştirdim.'),
      l('First hands-on work with industrial protocols.', 'Endüstriyel protokollerle ilk saha deneyimimi edindim.'),
    ],
  },
];

/* ------------------------------------------------------------------- stack */

export type SkillGroup = {
  title: L10n;
  items: { name: string; icon?: string }[];
};

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const skillGroups: SkillGroup[] = [
  {
    title: l('Backend', 'Backend'),
    items: [
      { name: 'C#', icon: devicon('csharp/csharp-original.svg') },
      { name: '.NET', icon: devicon('dotnetcore/dotnetcore-original.svg') },
      { name: 'ASP.NET Core', icon: devicon('dot-net/dot-net-original.svg') },
      { name: 'Entity Framework' },
      { name: 'Dapper' },
      { name: 'Node.js', icon: devicon('nodejs/nodejs-original.svg') },
      { name: 'GraphQL', icon: devicon('graphql/graphql-plain.svg') },
      { name: 'DDD' },
      { name: 'CQRS' },
    ],
  },
  {
    title: l('Frontend', 'Frontend'),
    items: [
      { name: 'Angular', icon: devicon('angularjs/angularjs-original.svg') },
      { name: 'React', icon: devicon('react/react-original.svg') },
      { name: 'Next.js', icon: devicon('nextjs/nextjs-original.svg') },
      { name: 'TypeScript', icon: devicon('typescript/typescript-original.svg') },
      { name: 'JavaScript', icon: devicon('javascript/javascript-original.svg') },
      { name: 'Flutter', icon: devicon('flutter/flutter-original.svg') },
      { name: 'Dart', icon: devicon('dart/dart-original.svg') },
      { name: 'React Native', icon: devicon('react/react-original.svg') },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss/tailwindcss-original.svg') },
      { name: 'RxJS' },
      { name: 'DevExtreme' },
      { name: 'Blazor' },
    ],
  },
  {
    title: l('Data', 'Veri'),
    items: [
      { name: 'SQL Server', icon: devicon('microsoftsqlserver/microsoftsqlserver-plain.svg') },
      { name: 'T-SQL' },
      { name: 'PostgreSQL', icon: devicon('postgresql/postgresql-original.svg') },
      { name: 'MongoDB', icon: devicon('mongodb/mongodb-original.svg') },
      { name: 'Redis', icon: devicon('redis/redis-original.svg') },
      { name: 'SAP HANA' },
    ],
  },
  {
    title: l('Platform', 'Platform'),
    items: [
      { name: 'Docker', icon: devicon('docker/docker-original.svg') },
      { name: 'Azure', icon: devicon('azure/azure-original.svg') },
      { name: 'AWS', icon: devicon('amazonwebservices/amazonwebservices-plain-wordmark.svg') },
      { name: 'RabbitMQ', icon: devicon('rabbitmq/rabbitmq-original.svg') },
      { name: 'Git', icon: devicon('git/git-original.svg') },
      { name: 'IIS' },
      { name: 'CI/CD' },
    ],
  },
  {
    title: l('Industrial', 'Endüstriyel'),
    items: [
      { name: 'SAP' },
      { name: 'Siemens S7' },
      { name: 'Modbus' },
      { name: 'PLC' },
      { name: 'MES / OEE' },
    ],
  },
];
