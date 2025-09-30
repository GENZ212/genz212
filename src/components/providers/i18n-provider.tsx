'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations, defaultLanguage, getTranslation, getTranslationArray, isRTL } from '@/lib/i18n'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
  tArray: (key: string, fallback?: string[]) => string[]
  isRTL: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function useI18n(): I18nContextType {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'ar', 'fr'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Update document attributes when language changes
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isRTL(language) ? 'rtl' : 'ltr'
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string, fallback?: string): string => {
    return getTranslation(translations[language], key, fallback)
  }

  const tArray = (key: string, fallback?: string[]): string[] => {
    return getTranslationArray(translations[language], key, fallback)
  }

  const contextValue: I18nContextType = {
    language,
    setLanguage,
    t,
    tArray,
    isRTL: isRTL(language),
  }

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  )
}
