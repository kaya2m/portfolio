import React from 'react';
import { useI18n } from '@/lib/i18n';
import { stats } from '@/content/site';
import { Sheet } from '@/components/Sheet';

/** The figure row: four numbers on rules, the way a spec sheet states them. */
export default function Figures() {
  const { t, locale } = useI18n();

  return (
    <section aria-label={locale === 'tr' ? 'Özet rakamlar' : 'Key figures'} className="border-b border-rule bg-sunk">
      <Sheet>
        <dl className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value + i}
              className={`flex flex-col py-6 md:py-7 ${i % 2 === 1 ? 'border-l border-rule pl-5' : ''} ${
                i < 2 ? 'border-b border-rule md:border-b-0' : ''
              } ${i > 0 ? 'md:border-l md:border-rule md:pl-6' : ''} ${i === 2 ? 'md:pl-6' : ''}`}
            >
              <dd className="u-tabular order-1 text-[clamp(2rem,4.4vw,3rem)] font-medium leading-none tracking-[-0.04em] text-ink">
                {stat.value}
                <span className="ml-1 align-baseline text-[0.38em] font-normal tracking-[0.02em] text-mark">
                  {typeof stat.suffix === 'string' ? stat.suffix : t(stat.suffix)}
                </span>
              </dd>
              <dt className="order-2 mt-2 max-w-[22ch] text-[12.5px] leading-snug text-mute">{t(stat.label)}</dt>
            </div>
          ))}
        </dl>
      </Sheet>
    </section>
  );
}
