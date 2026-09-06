import React from 'react';
import Head from 'next/head';
import { useI18n } from '@/lib/i18n';
import { profile, projects, ui } from '@/content/site';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Figures from '@/components/Figures';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const SITE_URL = 'https://portfolio-t8u9.vercel.app';

const meta = {
  en: {
    title: 'Muhammet Kaya - Software and Application Specialist',
    description:
      'Full-stack engineer building ERP, MES and workflow platforms end to end with .NET, MSSQL, Angular and React.',
  },
  tr: {
    title: 'Muhammet Kaya - Yazılım ve Uygulama Uzmanı',
    description:
      '.NET, MSSQL, Angular ve React ile ERP, MES ve iş akışı platformlarını uçtan uca geliştiren full-stack mühendis.',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role.en,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  image: `${SITE_URL}/kisisel-foto.jpg`,
  sameAs: [profile.github, profile.linkedin],
  address: { '@type': 'PostalAddress', addressLocality: 'Çayırova, Kocaeli', addressCountry: 'TR' },
  knowsAbout: ['.NET', 'ASP.NET Core', 'Angular', 'React', 'Microsoft SQL Server', 'ERP', 'MES', 'SAP integration'],
  worksFor: { '@type': 'Organization', name: 'Sango Otomotiv A.Ş.' },
  makesOffer: projects
    .filter((p) => p.href)
    .map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'SoftwareApplication', name: p.name, url: p.href } })),
};

export default function Home() {
  const { locale, t } = useI18n();
  const { title, description } = meta[locale];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#f2f2f1" />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/kisisel-foto.jpg`} />
        <meta property="og:locale" content={locale === 'tr' ? 'tr_TR' : 'en_US'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[12px] focus:uppercase focus:tracking-[0.12em] focus:text-paper"
      >
        {t(ui.skipToContent)}
      </a>

      <Nav />

      <main>
        <Hero />
        <Figures />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
