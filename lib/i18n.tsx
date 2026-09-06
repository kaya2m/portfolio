import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const LOCALES = ['en', 'tr'] as const;
export type Locale = (typeof LOCALES)[number];

/** A string that exists in both languages. English is the source of truth. */
export type L10n = { en: string; tr: string };

const STORAGE_KEY = 'mk.locale';

type I18nValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggle: () => void;
  /** Resolve a bilingual value for the active locale. */
  t: (value: L10n) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'tr') {
      setLocaleState(stored);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith('tr')) setLocaleState('tr');
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage can be unavailable in private mode; the choice just will not persist */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      toggle: () => setLocale(locale === 'en' ? 'tr' : 'en'),
      t: (v: L10n) => v[locale],
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
