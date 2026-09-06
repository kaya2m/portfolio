import React from 'react';
import { useI18n } from '@/lib/i18n';
import { profile, ui } from '@/content/site';
import { Sheet } from '@/components/Sheet';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer>
      <Sheet>
        <div className="flex flex-col gap-2 py-6 font-mono text-[11px] uppercase tracking-[0.1em] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="u-tabular">
            <span translate="no">&copy; 2026 {profile.name}.</span> {t(ui.rights)}
          </p>
          <p>{t(ui.builtWith)}</p>
        </div>
      </Sheet>
    </footer>
  );
}
