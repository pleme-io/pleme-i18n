/**
 * @pleme/i18n
 *
 * Internationalization library for Pleme products
 * Wrapper around react-i18next with bilingual support (pt-BR, en-US)
 */

// Export i18n initialization and utilities
export {
  initI18n,
  addNamespace,
  addTranslations,
  changeLanguage,
  getCurrentLanguage,
  isLanguageSupported,
  getSupportedLanguages,
  getLanguageDisplayName,
  i18n,
  defaultCommonPtBR,
  defaultCommonEnUS,
  type I18nOptions,
  type SupportedLanguage,
} from './i18n'

// Re-export react-i18next hooks for convenience
export { useTranslation, Trans, Translation, I18nextProvider } from 'react-i18next'

// Re-export i18next types that consumers may need
export type { TFunction, Namespace } from 'i18next'
