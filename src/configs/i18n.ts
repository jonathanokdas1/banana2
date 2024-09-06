export const i18n = {
  defaultLocale: 'pt',
  locales: ['en', 'fr', 'ar', 'pt'], // Adicionando 'pt'
  langDirection: {
    en: 'ltr',
    fr: 'ltr',
    ar: 'rtl',
    pt: 'ltr'
  }
} as const

export type Locale = (typeof i18n)['locales'][number] // Definindo o tipo Locale
