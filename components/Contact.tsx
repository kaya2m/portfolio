import React, { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { profile, ui } from '@/content/site';
import { Sheet } from '@/components/Sheet';

export default function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2400);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      /* clipboard can be blocked; the mailto link still works */
    }
  };

  return (
    <section id="contact" className="border-b border-rule bg-ink py-16 text-paper sm:py-24">
      <Sheet>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="u-balance max-w-[14ch] text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1] tracking-[-0.035em] text-paper">
              {t(ui.contactTitle)}
            </h2>
            <p className="u-pretty mt-6 max-w-[56ch] text-[15.5px] leading-[1.7] text-paper/70">{t(ui.contactBody)}</p>
          </div>

          <div className="lg:col-span-5">
            <dl className="border-t border-paper/25">
              <div className="border-b border-paper/25 py-3">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-paper/50">Email</dt>
                <dd className="mt-1.5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-[17px] text-paper underline decoration-1 underline-offset-4 transition-colors hover:text-white"
                    translate="no"
                  >
                    {profile.email}
                  </a>
                  <button
                    type="button"
                    onClick={copy}
                    className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-paper/50 transition-colors hover:text-paper"
                  >
                    {t(ui.copyEmail)}
                  </button>
                </dd>
              </div>

              <div className="border-b border-paper/25 py-3">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-paper/50">LinkedIn</dt>
                <dd className="mt-1.5">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-paper underline decoration-1 underline-offset-4 transition-colors hover:text-white"
                  >
                    muhammet-kaya-ln
                  </a>
                </dd>
              </div>

              <div className="border-b border-paper/25 py-3">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-paper/50">GitHub</dt>
                <dd className="mt-1.5">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-paper underline decoration-1 underline-offset-4 transition-colors hover:text-white"
                    translate="no"
                  >
                    kaya2m
                  </a>
                </dd>
              </div>
            </dl>

            <p aria-live="polite" className="mt-3 h-4 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/60">
              {copied ? t(ui.copied) : ''}
            </p>
          </div>
        </div>
      </Sheet>
    </section>
  );
}
