'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLocale, localeStorageKey, type Locale } from './config';
import en from './locales/en';
import uk from './locales/uk';

const dictionaries = { uk, en } as const;
type TranslationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, values?: Record<string, string | number>) => string;
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

function getValue(dictionary: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>((value, part) => {
    if (value && typeof value === 'object' && part in value) {
      return (value as Record<string, unknown>)[part];
    }
    return undefined;
  }, dictionary);
}

function translate(dictionary: unknown, key: string, values?: Record<string, string | number>) {
  const value = getValue(dictionary, key);
  if (typeof value !== 'string') return key;

  return values
    ? Object.entries(values).reduce(
        (result, [name, replacement]) => result.replaceAll(`{{${name}}}`, String(replacement)),
        value,
      )
    : value;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const savedLocale = localStorage.getItem(localeStorageKey);
    if (savedLocale === 'uk' || savedLocale === 'en') setLocaleState(savedLocale);
  }, []);

  useEffect(() => {
    localStorage.setItem(localeStorageKey, locale);
    document.documentElement.lang = locale;
    document.title = translate(dictionaries[locale], 'metadata.title');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', translate(dictionaries[locale], 'metadata.description'));
  }, [locale]);

  const value = useMemo<TranslationContextValue>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: (key, values) =>
        translate(dictionaries[locale] ?? dictionaries[defaultLocale], key, values),
    }),
    [locale],
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslation must be used within I18nProvider');
  return context;
}
