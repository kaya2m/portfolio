'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Users, MapPin, Calendar } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
 

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id) {
              setVisibleElements(prev => new Set([...prev, entry.target.id]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

 
  const skills = [
    { name: 'C#', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" className="w-6 h-6" />, level: 95 },
    { name: 'ASP.NET', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" alt="ASP.NET" className="w-6 h-6" />, level: 95 },
    { name: 'Angular', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" className="w-6 h-6" />, level: 90 },
    { name: 'SQL Server', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" alt="SQL Server" className="w-6 h-6" />, level: 88 },
    { name: 'MongoDB', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" />, level: 85 },
    { name: 'TypeScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />, level: 87 },
    { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />, level: 85 },
    { name: 'Node.js', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />, level: 82 },
    { name: 'Docker', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" className="w-6 h-6" />, level: 80 },
    { name: 'Azure', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure" className="w-6 h-6" />, level: 78 },
 { name: 'AWS', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" className="w-6 h-6" />, level: 75 },    { name: 'Git', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-6 h-6" />, level: 85 },
  ];
  const experiences = [
      {
      company: "Teori Bilgisayar Yazılım ve Dan.Hiz.Ltd.Şti.",
      logo: "https://teori.com.tr/wp-content/uploads/2023/03/teori-logo.jpg",
      position: "Kıdemli Yazılım Geliştirici",
      period: "Haziran 2025 - Günümüz",
      location: "İstanbul, Türkiye",
      description:
        "Şirket uygulamalarının geliştirilmesinden ve bakımından sorumluyum. Rolüm sistem mimarisi tasarımı, arka uç geliştirme ve web uygulaması geliştirme içeriyor. Bilgi ve deneyimimden yararlanarak, uygulamalar sıfırdan oluşturuyorum ve bunları son kullanıcılara teslim ediyorum. Geliştirdiğim projeler arasında otomasyon kontrol sistemleri, bina yönetim sistemleri ve üretim izleme yazılımı yer alıyor",
      technologies: [
        ".NET",
        "ASP.NET Web API",
        "React",
        "Redux - Zustand",
        "Tailwind CSS- Bootstrap",
        "Angular 15-17",
        "PostgreSQL",
        "MongoDB",
        "MSSQL",
        "Docker",
        "Azure",
        "DDD"
      ],
      achievements: [
        "Kurumsal projelerde yazılım mimarisi ve geliştirme süreçlerini yönettim.",
        "Sistem mimarisi ve teknik mentorluk yaptım.",
        "Modern yazılım geliştirme pratiklerini ekibe kazandırdım.",
        "Yüksek performanslı ve ölçeklenebilir uygulamalar geliştirdim.",
        "Çok kullanıcılı ve çok kiracılı mimariler tasarladım."
      ]
    },
    {
      company: "ASD Laminat",
      logo: "https://www.asdlaminat.com/assets/2018/10/logo-asd-laminate.png",
      position: "Yazılım Uzmanı",
      period: "Aralık 2024 - Haziran 2025",
      location: "Düzce, Türkiye",
      description:
        "SAP kullanarak bir fabrika ortamında verimliliği artırmak ve yüksek kaliteli süreçleri sağlamak için tasarlanmış bir uygulama paketine katkıda bulunmak. Hammadde alımından üretim sırasında OEE (Genel Ekipman Etkinliği) takibine, ürün kalite kontrolüne ve sevkiyat yönetimine kadar işlemleri uçtan uca yöneten ve izleyen çözümler geliştirmek. Uygulamalar, fabrika içindeki MES/MOM çözümleriyle sorunsuz entegre olur ve satış ve tedarik için hızlandırılmış iş akışları, sağlam müşteri ilişkileri yönetimi (CRM) araçları ve belirli iş ihtiyaçlarını karşılamak için özelleştirilmiş bağımsız SAP modülleri içerir",
      technologies: [
        "ASP.NET Web API (8.0)",
        "Siemens S7",
        "Modbus",
        "Dapper",
        "MSSQL",
        "Angular 15-17",
        "Blazor",
        "DevExtreme",
        "RxJS",
        "Bootstrap",
        "Docker",
        "TypeScript",
        "Git",
        "GitHub",
        "DDD"
      ],
      achievements: [
        "Fabrika süreçlerinde uçtan uca dijitalleşme ve otomasyon sağladım.",
        "MES/MOM ve SAP entegrasyonları ile operasyonel verimlilik artırıldı.",
        "Satış, satın alma ve sevkiyat süreçlerinde iş akışlarını hızlandıran uygulamalar geliştirdim."
      ]
    },
    {
      company: "İlke Ambalaj San. ve Tic. A.Ş.",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFWN6coW_NxKg/company-logo_200_200/company-logo_200_200/0/1630474335550?e=1759968000&v=beta&t=MB-RCCEUGZMK0hzV5TGkLVMrjGNKOcPj_RkdQD6n3u0",
      position: "Yazılım Uzmanı",
      period: "Kasım 2023 - Ekim 2024",
      location: "Gaziantep, Türkiye",
      description:
        "ERP yazılımını, hammadde tedarikinden müşteri sevkiyatına ve satın almadan vardiya takibine kadar tüm operasyonel süreçleri yönetmek ve iyileştirmek için özelleştiriyorum. Bu çözüm, tüm iş birimleri için entegre bir ortam sağlayarak iş akışlarını optimize ediyor, raporlamayı geliştiriyor ve otomatik e dokümantasyon sunuyor. Proje boyunca, süreç verimliliğini ve uyarlanabilirliği artırmak için ölçeklenebilir ve esnek bir mimari üzerine odaklanıyorum.",
      technologies: [
        "ASP.NET (8) MVC",
        "MSSQL",
        "T-SQL",
        "MongoDB",
        "Entity Framework",
        "Angular.js",
        "DevExtreme",
        "JQuery",
        "Ajax",
        "TFS",
        "Docker",
        "Azure",
        "IIS"
      ],
      achievements: [
        "Tüm iş birimlerini entegre eden ERP çözümü geliştirdim.",
        "Agile ve CI/CD metodolojileriyle geliştirme süreçlerini yönettim.",
        "Raporlama ve otomatik e-belge süreçlerini optimize ettim."
      ]
    },
    {
      company: "ADeko Technologies",
      logo: "https://www.adeko.com/wp-content/uploads/2016/12/Adeko-Technologies-Logo.png",
      position: "Yazılım Uzmanı Yardımcısı",
      period: "Mayıs 2023 - Ağustos 2023",
      location: "Nilüfer, Bursa, Türkiye",
      description:
        "aDeko CAD ve CAM uygulamasıyla (XAML kullanarak) entegre edilmiş bir CRM (Assistcool) sistemi geliştirdim, uygulamaya bağlı ürünlerin operasyonlarını yönetmek ve  takip etmek için. CRM uygulaması, tasarım, üretim planlaması, malzeme tedariki  ve sevkiyat gibi süreçleri kapsayan kapsamlı bir çözüm sunuyor. Ek olarak,  uygulama raporlama yetenekleri sunuyor ve müşteri kullanıcı deneyimini  geliştirmeye odaklanıyor.",
      technologies: [
        "C#",
        "ASP.NET MVC",
        "MSSQL",
        "T-SQL",
        "Bootstrap",
        "Entity Framework",
        "XAML",
        "Git",
        "BitBucket"
      ],
      achievements: [
        "CAD/CAM uygulamalarıyla entegre CRM sistemi geliştirdim.",
        "Kullanıcı deneyimini artıran raporlama ve takip modülleri ekledim.",
        "Versiyon kontrolü ve proje yönetiminde aktif rol aldım."
      ]
    },
    {
      company: "İletişim Yazılım",
      logo: "https://www.iletisimyazilim.com/application/themes/mediaclick/assets/img/logo.svg",
      position: "Yazılım Uzmanı Stajyeri",
      period: "Şubat 2023 - Mayıs 2023",
      location: "Bursa, Türkiye",
      description:
        "PLC makineleri PLC makinelerinin iletişim altyapısını ASP.NET MVC çerçevesini kullanarak bir kullanıcı  arayüzüne entegre ettim. Bu, makine verilerinin gerçek zamanlı izlenmesine ve  kontrolüne olanak sağladı. Geliştirdiğim panel aracılığıyla kullanıcılar makineleri uzaktan  yönetebiliyor ve kontrol edebiliyor. Bu çözüm, operatörlerin makinelerle etkili bir şekilde  etkileşime girmesini sağlıyor ve süreçleri optimize ediyornin iletişim altyapısını ASP.NET MVC ile kullanıcı arayüzüne entegre ettim. Gerçek zamanlı veri izleme ve uzaktan kontrol imkanı sağladım.",
      technologies: [
        "ASP.NET MVC",
        "Bootstrap",
        "Entity Framework",
        "PLC",
        "C#"
      ],
      achievements: [
        "Gerçek zamanlı makine izleme ve kontrol paneli geliştirdim.",
        "Operatörlerin makinelerle etkileşimini kolaylaştırdım.",
        "Üretim süreçlerinde verimlilik ve izlenebilirlik sağladım."
      ]
    }
  ];

 const teamMembers = [
    {
      name: "Talha Önder",
      role: "Mobil Geliştirici",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQG4G98nHpw_eA/profile-displayphoto-shrink_400_400/B4DZcHnMdSG8Ao-/0/1748179407228?e=1754524800&v=beta&t=YLsD-jh8Fq3PvYgY6XTUJ5ntwupTCgqWcS9RuLQx9VE",
      linkedin: "https://www.linkedin.com/in/talhaonder/",
      github: "https://github.com/talhaonder",
      portfolio: "https://talhaonder.com/", 
      skills: ["React Native", "JavaScript", "NodeJs","Firebase"],
      isImageUrl: true
    },
    {
      name: "Yunus Emre Öneç",
      role: "Full-Stack Geliştirici",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEuXSibu0t17w/profile-displayphoto-shrink_200_200/B4DZccLXfBIEAk-/0/1748524433459?e=1754524800&v=beta&t=68c5M56S9t-zI_vFnKBPRGns_depNKpd_qH2rLWZqIU",
      linkedin: "https://www.linkedin.com/in/yunusemreonec/", 
      github: "http://github.com/yunusonec",
      portfolio: "https://www.yunusemreonec.com/", 
      skills: ["ASP.NET","TypeScript" ,"Angular", "MsSQL","Devexpress"],
      isImageUrl: true
    },
  ];
  const projects = [
    {
      title: "Ignisfer",
      description: "Kampçılar için sosyal medya ve blog platformu. Kamp deneyimi paylaşımı, kamp alanı keşfi ve topluluk.",
      tech: [".NET Core","Python", "Azure", "Redis","RabbitMQ", "AWS", "MongoDB", "React Native", "PostgreSQL","Docker","GraphQL"],
      demo: "https://ignisfer.com/",
      github: "#",
      image: "https://ignisfer.com/favicon.ico",
      isImageUrl: true
    },
    {
      title: "Tripinyo",
      description: "Seyahat rotalarını oluşturmak ve optimize etmek için tasarlanmış modern bir platform.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "React Native", "React", "Next.js"],
      demo: "https://tripinyo.com/",
      github: "#",
      image: "https://tripinyo.com/logo.png",
      isImageUrl: true
    },
    {
      title: "Promenucu",
      description: "Restoranlar ve işletmeler için dijital menü oluşturma ve yönetme SaaS platformu.",
      tech: [".NET", "MSSQL", "Entity Framework", "React", "Next.js"],
      demo: "https://promenucu.com",
      github: "#",
      image: "https://www.promenucu.com/images/logos/promenucu.png",
      isImageUrl: true
    },
    {
      title: "Creo Studio",
      description: "No-code/low-code uygulama geliştirme platformu. Studio ile tasarla, Runtime ile çalıştır.",
      tech: ["No-Code", "Low-Code", "React", "Next.js"],
      demo: "https://creo-studio.vercel.app/",
      github: "#",
      extraLink: { label: "Runtime", href: "https://creo-runtime.vercel.app/login" },
      image: "https://creo-studio.vercel.app/creo-logo.png",
      isImageUrl: true
    },
    {
      title: "Ignisfer Manage",
      description: "Kamp işletmecileri için rezervasyon, müşteri ilişkileri ve operasyonel süreç yönetim sistemi.",
      tech: ["React", ".NET Core", "PostgreSQL","Docker","CQRS", "Event Sourcing", "Redis", "RabbitMQ"],
      demo: "https://manage.ignisfer.com",
      github: "#",
      image: "https://ignisfer.com/logo/ignisfer-logo.svg"
    },
    {
      title: "KENT ERP",
      description: "Fabrika içi operasyonel süreçleri ve müşteri ilişkilerini yöneten, Logo ERP entegrasyonlu kurumsal uygulama.",
      tech: ["ASP.NET MVC","Angular.JS", "MSSQL / T-SQL", "Bootstrap", "Entity Framework", "IIS"],
      demo: "https://erp.ilkeambalaj.com/",
      github: "#",
      image: "https://ilkeambalaj.com/wp-content/uploads/2019/01/ilke-big-logo.png",
      isImageUrl: true
    },
    {
      title: "ASD Soft V2",
      description: "Üretim planlaması, malzeme yönetimi, kalite kontrol ve iş gücü yönetimini entegre eden üretim takip çözümü.",
      tech: [".NET Core", "DevExpress", "SAP HANA", "MSSQL", "Angular 15-17", "Docker", "Azure"],
      github: "#",
      image: "https://www.asdlaminat.com/assets/2018/10/logo-asd-laminate.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 text-white overflow-x-hidden">
      {/* Arka plan dekoratif blob'lar */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/5 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <img src="/kisisel-logo.png" alt="" className="h-10 w-auto" />
        </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                {id: 'home', label: 'Ana Sayfa'},
                {id: 'about', label: 'Hakkımda'},
                {id: 'projects', label: 'Projeler'},
                {id: 'experience', label: 'Deneyim'},
                {id: 'skills', label: 'Yetenekler'},
                {id: 'team', label: 'Takım'},
                {id: 'contact', label: 'İletişim'}
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-300 font-medium ${
                    activeSection === item.id ? 'text-blue-300' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/80 backdrop-blur-xl border-t border-white/10">
            <div className="px-4 py-2 space-y-2">
              {[
                {id: 'home', label: 'Ana Sayfa'},
                {id: 'about', label: 'Hakkımda'},
                {id: 'projects', label: 'Projeler'},
                {id: 'experience', label: 'Deneyim'},
                {id: 'skills', label: 'Yetenekler'},
                {id: 'team', label: 'Takım'},
                {id: 'contact', label: 'İletişim'}
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 px-3 rounded hover:bg-white/10 transition-colors text-white/80"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

   {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24 z-10">
        
        <div className="z-10 px-4 w-full">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Yazılar */}
            <div className="md:w-2/3 w-full text-center md:text-left md:pr-12 mt-8 md:mt-0">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Muhammet Kaya  <span className="text-purple-400">Yazılım Uzmanı</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-4 max-w-3xl mx-auto md:mx-0">
                Fikri olan her projeyi hayata geçiririm —
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                {[
                  { label: 'ERP & CRM', color: 'from-blue-500/30 to-blue-600/20 border-blue-400/40 text-blue-300' },
                  { label: 'MES & Üretim', color: 'from-cyan-500/30 to-cyan-600/20 border-cyan-400/40 text-cyan-300' },
                  { label: 'SaaS Platform', color: 'from-purple-500/30 to-purple-600/20 border-purple-400/40 text-purple-300' },
                  { label: 'Mobil Uygulama', color: 'from-pink-500/30 to-pink-600/20 border-pink-400/40 text-pink-300' },
                  { label: 'Sosyal Medya', color: 'from-violet-500/30 to-violet-600/20 border-violet-400/40 text-violet-300' },
                  { label: 'No-Code / Low-Code', color: 'from-emerald-500/30 to-emerald-600/20 border-emerald-400/40 text-emerald-300' },
                ].map((item) => (
                  <span
                    key={item.label}
                    className={`px-4 py-1.5 bg-gradient-to-r ${item.color} rounded-full text-sm font-medium border backdrop-blur-sm`}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
              <p className="text-base text-white/50 mb-8 max-w-2xl mx-auto md:mx-0">
                .NET · Node.js · Angular · React · React Native · PostgreSQL · Azure
              </p>
              <div className="flex justify-center md:justify-start space-x-6 mb-12">
                <a href="https://github.com/kaya2m" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/muhammet-kaya-ln" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:mkaya349@hotmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://ignisfer.com/muhammetkaya" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110">
                  <img src="https://ignisfer.com/favicon.ico" alt="Ignisfer" className="w-6 h-6 rounded-full" />
                </a>
              </div>
            </div>
            {/* Profil Fotoğrafı */}
            <div className="md:w-1/3 w-full flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src="/kisisel-foto.jpg" alt="Muhammet Kaya" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mouse Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div 
            className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center cursor-pointer hover:border-blue-300 transition-colors"
            onClick={() => scrollToSection('about')}
          >
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-animate="fade-up"
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${
              visibleElements.has('about-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="about-title"
          >
            Hakkımda
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              data-animate="fade-right"
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                visibleElements.has('about-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              id="about-content"
            >
              <p className="text-lg text-slate-100 leading-relaxed">
                Ben Muhammet, Yazılım Geliştirme Uzmanı&apos;yım. Bursa Uludağ Üniversitesi&apos;nden mezun oldum. Yaklaşık 4 yıldır yazılım ekosisteminin bir parçasıyım ve sürekli öğrenme ve gelişme tutkusuyla kendimi geliştiriyorum. Hem kendimi hem de üstlendiğim görevleri en iyi şekilde geliştirerek, hem kendime hem de projelerimle şirkete değer katmaya devam ediyorum.
              </p>
              <p className="text-lg text-slate-100 leading-relaxed">
                Microsoft teknolojileri (.NET, SQL Server) ve modern frontend frameworkler (Angular, React) 
                ile ölçeklenebilir ve performanslı web uygulamaları tasarlayıp geliştiriyorum.
              </p>
              <div className="flex flex-wrap gap-3">
                {['ERP Sistemleri', 'CRM Çözümleri', 'MES Uygulamaları', 'Bina Yönetimi', 'Sosyal Medya'].map((tag, index) => (
                  <span 
                    key={tag} 
                    className={`px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition-all duration-500`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
            
            </div>
            <div 
              data-animate="fade-left"
              className={`relative transition-all duration-1000 delay-500 ${
                visibleElements.has('about-image') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              id="about-image"
            >
              <div className="w-80 h-80 mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <img src="/avatar-kisisel.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2
            data-animate="fade-up"
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${
              visibleElements.has('projects-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="projects-title"
          >
            Projelerim
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                data-animate="fade-up"
                className={`bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-blue-400/60 hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 flex flex-col shadow-lg ${
                  visibleElements.has(`project-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                id={`project-${index}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-28 flex items-center justify-center bg-white/10 border-b border-white/10 px-4 py-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-white/60 text-xs mb-3 leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-white/10 rounded-full text-xs border border-white/20">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-0.5 bg-white/5 rounded-full text-xs text-white/50">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-3 flex-wrap gap-y-1">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-xs">
                        <Github className="w-3 h-3 mr-1" />
                        Kod
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-400 hover:text-purple-300 transition-colors text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {project.extraLink ? "Studio" : "Demo"}
                      </a>
                    )}
                    {project.extraLink && (
                      <a href={project.extraLink.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-400 hover:text-pink-300 transition-colors text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {project.extraLink.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative z-10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-animate="fade-up"
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${
              visibleElements.has('experience-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="experience-title"
          >
            Deneyimlerim
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                data-animate="fade-up"
                className={`bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-8 border border-white/20 hover:border-blue-400/60 hover:bg-white/15 transition-all duration-500 shadow-lg ${
                  visibleElements.has(`exp-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                id={`exp-${index}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1 flex flex-col items-start">
                    <div className="flex items-center mb-2">
                      {exp.logo && (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 object-contain rounded bg-white p-1 mr-3 border border-white/30"
                          style={{ background: "#fff" }}
                        />
                      )}
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        </div>
                        <p className="text-blue-400 font-semibold mb-2">{exp.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-white/60 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-white/75 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Kullanılan Teknolojiler:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Başarılar:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-white/75 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            data-animate="fade-up"
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${
              visibleElements.has('skills-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="skills-title"
          >
            Teknik Yetenekler
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                data-animate="fade-up"
                className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:border-blue-400/60 hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 shadow-lg ${
                  visibleElements.has(`skill-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                id={`skill-${index}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white/10 rounded-lg mr-3 border border-white/20">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 relative z-10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-animate="fade-up"
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${
              visibleElements.has('team-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="team-title"
          >
            Takım Arkadaşlarım
          </h2>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  data-animate="fade-up"
                  className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-blue-400/60 hover:bg-white/15 transition-all duration-500 hover:transform hover:scale-105 text-center shadow-lg ${
                    visibleElements.has(`team-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  id={`team-${index}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div 
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden"
                  >
                    {member.isImageUrl ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-full h-full rounded-full flex items-center justify-center ${member.isImageUrl ? 'hidden' : 'flex'}`}
                      style={member.isImageUrl ? {} : { background: member.image }}
                    >
                      <Users className="w-8 h-8 text-white/80" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-white/10 rounded text-xs border border-white/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-white/20 border border-white/20 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.github} className="p-2 bg-white/10 rounded-full hover:bg-white/20 border border-white/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={member.portfolio} className="p-2 bg-white/10 rounded-full hover:bg-white/20 border border-white/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-animate="fade-up"
            className={`text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${
              visibleElements.has('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="contact-title"
          >
            İletişim
          </h2>
          <p 
            data-animate="fade-up"
            className={`text-xl text-white/70 mb-12 transition-all duration-1000 delay-200 ${
              visibleElements.has('contact-subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="contact-subtitle"
          >
            Yeni projeler için birlikte çalışalım!
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: <Github className="w-8 h-8" />, label: 'GitHub', href: 'https://github.com/kaya2m' },
              { icon: <Linkedin className="w-8 h-8" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammet-kaya-ln' },
              { icon: <Mail className="w-8 h-8" />, label: 'E-posta', href: 'mailto:mkaya349@hotmail.com' },
              { icon: <img src="https://ignisfer.com/favicon.ico" alt="Ignisfer" className="w-8 h-8 rounded-full" />, label: 'Ignisfer', href: 'https://ignisfer.com/muhammetkaya' }
            ].map((social, index) => (
              <a 
                key={social.label}
                href={social.href} 
                data-animate="fade-up"
                className={`flex flex-col items-center group transition-all duration-1000 ${
                  visibleElements.has(`contact-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                id={`contact-${index}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 mb-3 flex items-center justify-center">
                  {social.icon}
                </div>
                <span className="text-white/70 group-hover:text-blue-300 transition-colors">{social.label}</span>
              </a>
            ))}
          </div>
          <button
            data-animate="fade-up"
            className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              visibleElements.has('contact-button') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            id="contact-button"
            style={{ transitionDelay: '700ms' }}
            onClick={() => window.open('mailto:mkaya349@hotmail.com', '_blank')}
          >
            Benimle İletişime Geç
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 relative z-10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/50">
            <p className="mb-4 md:mb-0">© 2025 Muhammet Kaya. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;