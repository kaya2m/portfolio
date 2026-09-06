import React from 'react';
import { useI18n } from '@/lib/i18n';
import { domains, experiences, ui } from '@/content/site';
import { FieldHeading, Sheet } from '@/components/Sheet';
import CareerChart from '@/components/CareerChart';

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="border-b border-rule py-16 sm:py-24">
      <Sheet>
        <FieldHeading title={t(ui.experienceTitle)} />

        <div className="mt-8">
          <CareerChart />
        </div>

        <ol className="mt-14 border-t-2 border-ink">
          {experiences.map((job) => {
            const domain = domains.find((d) => d.id === job.domain);
            return (
              <li key={job.company + job.start} className="grid gap-x-10 gap-y-3 border-b border-rule py-7 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="u-tabular font-mono text-[12px] uppercase tracking-[0.1em] text-ink">
                    {job.current ? `${t(job.period)} - ${t(ui.presentLabel)}` : t(job.period)}
                  </p>
                  <p className="u-key mt-1.5">{t(job.duration)}</p>
                  <p className="mt-3 flex items-center gap-2 text-[12px] text-mute">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0"
                      style={{ backgroundColor: domain?.color }}
                    />
                    {domain ? t(domain.label) : null}
                  </p>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="text-[19px] font-medium tracking-[-0.02em] text-ink">{t(job.position)}</h3>
                  <p className="mt-1 text-[14px] text-mark" translate="no">
                    {job.company}
                  </p>
                  <p className="u-key mt-1.5">
                    {t(job.location)} <span className="text-rule-strong">/</span> {t(job.mode)}
                  </p>

                  <p className="u-pretty mt-4 max-w-[70ch] text-[14.5px] leading-[1.7] text-ink-2">
                    {t(job.description)}
                  </p>

                  <p className="mt-4 max-w-[70ch] font-mono text-[12px] leading-[1.9] text-mute" translate="no">
                    {job.stack.join(', ')}
                  </p>

                  <details className="group mt-4">
                    <summary className="inline-flex cursor-pointer list-none items-center font-mono text-[11px] uppercase tracking-[0.12em] text-mark underline decoration-1 underline-offset-4 transition-colors hover:text-mark-deep">
                      {t(ui.highlightsLabel)}
                    </summary>
                    <ul className="mt-3 border-l-2 border-rule pl-4">
                      {job.achievements.map((a) => (
                        <li key={a.en} className="u-pretty max-w-[66ch] py-1 text-[13.5px] leading-[1.6] text-ink-2">
                          {t(a)}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </li>
            );
          })}
        </ol>
      </Sheet>
    </section>
  );
}
