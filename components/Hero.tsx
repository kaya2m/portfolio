import React from 'react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';
import { profile, ui } from '@/content/site';
import { Sheet } from '@/components/Sheet';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="border-b border-rule pt-[var(--nav-height)]">
      <Sheet>
        <div className="grid gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h1 className="u-balance max-w-[16ch] text-[clamp(2.6rem,6.6vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-ink">
              {t(profile.headline)}
            </h1>

            <p className="u-pretty mt-7 max-w-[54ch] border-l-2 border-mark pl-4 text-[16.5px] leading-[1.6] text-ink-2">
              {t(profile.subtext)}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-11 items-center border border-ink bg-ink px-6 font-mono text-[12px] uppercase tracking-[0.12em] text-paper transition-colors hover:bg-mark hover:border-mark"
              >
                {t(ui.heroCtaWork)}
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center border border-rule-strong px-6 font-mono text-[12px] uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink"
              >
                {t(ui.heroCtaContact)}
              </a>
            </div>

            {/* The header block of the sheet: field, value, rule. */}
            <dl className="mt-12 border-t border-rule">
              {profile.specs.map((spec) => (
                <div key={spec.k.en} className="flex items-baseline gap-6 border-b border-rule py-2.5">
                  <dt className="u-key w-[92px] shrink-0">{t(spec.k)}</dt>
                  <dd className="min-w-0 text-[14px] text-ink">{t(spec.v)}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <figure className="m-0 w-full max-w-[400px] lg:ml-auto lg:mr-0">
              <div className="border border-ink bg-panel p-1.5">
                <Image
                  src="/kisisel-foto.jpg"
                  alt={t(ui.portraitAlt)}
                  width={800}
                  height={1000}
                  priority
                  sizes="(min-width: 1024px) 400px, 100vw"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
              <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mute" translate="no">
                {profile.name}
              </figcaption>
            </figure>
          </div>
        </div>
      </Sheet>
    </section>
  );
}
