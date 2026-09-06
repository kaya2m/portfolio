import React from 'react';
import { useI18n } from '@/lib/i18n';
import { about, ui } from '@/content/site';
import { FieldHeading, Sheet } from '@/components/Sheet';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="border-b border-rule py-16 sm:py-24">
      <Sheet>
        <FieldHeading title={t(ui.aboutTitle)} />

        {/* Documentation layout: notes in the narrow column, prose in the wide one. */}
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <dl className="border-t border-rule">
              {about.facts.map((fact) => (
                <div key={fact.k.en} className="border-b border-rule py-2.5">
                  <dt className="u-key">{t(fact.k)}</dt>
                  <dd className="mt-1 text-[13.5px] text-ink">
                    {typeof fact.v === 'string' ? fact.v : t(fact.v)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-8">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="u-pretty mb-6 max-w-[68ch] text-[16px] leading-[1.7] text-ink-2 last:mb-0">
                {t(p)}
              </p>
            ))}
          </div>
        </div>
      </Sheet>
    </section>
  );
}
