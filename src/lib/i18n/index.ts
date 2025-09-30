import enTranslations from './en.json'
import arTranslations from './ar.json'
import frTranslations from './fr.json'

export type Language = 'en' | 'ar' | 'fr'

export const translations = {
  en: enTranslations,
  ar: arTranslations,
  fr: frTranslations,
} as const

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
]

export const defaultLanguage: Language = 'ar' // Arabic as default for Morocco

// Helper function to get nested translation values
export function getTranslation(
  translations: any,
  key: string,
  fallback?: string
): string {
  const keys = key.split('.')
  let value = translations
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return fallback || key
    }
  }
  
  return typeof value === 'string' ? value : fallback || key
}

// Get translation with array support
export function getTranslationArray(
  translations: any,
  key: string,
  fallback?: string[]
): string[] {
  const keys = key.split('.')
  let value = translations
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return fallback || []
    }
  }
  
  return Array.isArray(value) ? value : fallback || []
}

// RTL languages
export const rtlLanguages: Language[] = ['ar']

export function isRTL(language: Language): boolean {
  return rtlLanguages.includes(language)
}
