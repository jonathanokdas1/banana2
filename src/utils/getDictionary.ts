// Third-party Imports
import 'server-only'

// Type Imports
import type { Locale } from '@configs/i18n'

const dictionaries: Record<Locale, () => Promise<{ navigation: any }>> = {
  en: () => import('@/data/dictionaries/en.json').then(module => module.default),
  fr: () => import('@/data/dictionaries/fr.json').then(module => module.default),
  ar: () => import('@/data/dictionaries/ar.json').then(module => module.default),
  pt: () => import('@/data/dictionaries/pt.json').then(module => module.default)  // Adicionando pt
}

export const getDictionary = async (locale: Locale = 'pt') => {
  const selectedLocale: Locale = dictionaries[locale] ? locale : 'pt'
  
  // Linha em branco para cumprir ESLint
  return dictionaries[selectedLocale]()
}
