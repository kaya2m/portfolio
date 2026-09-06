import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LOCALES, useI18n } from '@/lib/i18n';
import { navItems, profile, ui } from '@/content/site';
import { Sheet } from '@/components/Sheet';

/** Tracks which section is under the header, without layout reads in render. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const nodes = ids.map((id) => document.getElementById(id)).filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return;

    const seen = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) seen.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        let best = '';
        let bestRatio = 0;
        seen.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        setActive(best);
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: '-56px 0px -45% 0px' }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const SECTION_IDS = navItems.map((n) => n.id);

export default function Nav() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let max = 1;
    let ticking = false;

    const measure = () => {
      max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    };
    const paint = () => {
      ticking = false;
      const ratio = Math.min(window.scrollY / max, 1);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(paint);
    };

    measure();
    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm">
      <Sheet>
        <nav
          aria-label={locale === 'tr' ? 'Ana gezinme' : 'Main'}
          className="flex h-[var(--nav-height)] items-center justify-between gap-4"
        >
          <a href="#top" className="flex shrink-0 items-center gap-2.5 text-ink" translate="no">
            <Image src="/kisisel-logo.png" alt="" width={52} height={52} priority className="h-[26px] w-[26px] object-contain" />
            <span className="font-mono text-[12.5px] font-medium uppercase tracking-[0.1em]">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                      isActive ? 'text-mark' : 'text-mute hover:text-ink'
                    }`}
                  >
                    {t(item.label)}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <div role="group" aria-label={t(ui.languageLabel)} className="flex items-center font-mono text-[11px]">
              {LOCALES.map((code, i) => (
                <React.Fragment key={code}>
                  {i > 0 ? (
                    <span aria-hidden="true" className="px-1.5 text-rule-strong">
                      /
                    </span>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setLocale(code)}
                    aria-pressed={locale === code}
                    className={`uppercase tracking-[0.1em] transition-colors ${
                      locale === code ? 'text-ink underline underline-offset-4' : 'text-faint hover:text-ink'
                    }`}
                  >
                    {code}
                  </button>
                </React.Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink transition-colors hover:text-mark md:hidden"
            >
              {open ? t(ui.menuClose) : t(ui.menuOpen)}
            </button>
          </div>
        </nav>
      </Sheet>

      <span
        ref={progressRef}
        aria-hidden="true"
        style={{ transform: 'scaleX(0)' }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left bg-mark"
      />

      <div id="mobile-nav" hidden={!open} className="border-t border-rule bg-paper md:hidden">
        <Sheet>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-rule py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-ink last:border-b-0"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </Sheet>
      </div>
    </header>
  );
}
