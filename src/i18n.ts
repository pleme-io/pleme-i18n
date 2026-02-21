/**
 * i18n Configuration
 *
 * React-i18next wrapper with full bilingual support (pt-BR, en-US)
 * Uses TypeScript for type-safe translations
 */

import i18n, { type Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * Supported languages
 */
export type SupportedLanguage = 'pt-BR' | 'en-US'

/**
 * i18n Configuration Options
 */
export interface I18nOptions {
  /** Default language (default: 'pt-BR') */
  defaultLanguage?: SupportedLanguage
  /** Fallback language (default: 'pt-BR') */
  fallbackLanguage?: SupportedLanguage
  /** Enable debug mode (default: false) */
  debug?: boolean
  /** Translation resources organized by language and namespace */
  resources: Resource
  /** Default namespace (default: 'common') */
  defaultNS?: string
  /** Available namespaces */
  ns?: string[]
}

/**
 * Default common translations (pt-BR)
 * These are merged with provided resources as a baseline
 */
const defaultCommonPtBR = {
  buttons: {
    save: 'Salvar',
    cancel: 'Cancelar',
    delete: 'Excluir',
    edit: 'Editar',
    confirm: 'Confirmar',
    back: 'Voltar',
    next: 'Próximo',
    submit: 'Enviar',
    close: 'Fechar',
    search: 'Buscar',
    filter: 'Filtrar',
    clear: 'Limpar',
    apply: 'Aplicar',
    reset: 'Resetar',
    yes: 'Sim',
    no: 'Não',
    ok: 'OK',
    retry: 'Tentar novamente',
    continue: 'Continuar',
    add: 'Adicionar',
    remove: 'Remover',
    select: 'Selecionar',
    create: 'Criar',
    update: 'Atualizar',
    view: 'Visualizar',
    download: 'Baixar',
    upload: 'Enviar',
    share: 'Compartilhar',
    copy: 'Copiar',
    duplicate: 'Duplicar',
  },
  validation: {
    required: 'Este campo é obrigatório',
    email: 'Email inválido',
    cpf: 'CPF inválido',
    cnpj: 'CNPJ inválido',
    phone: 'Telefone inválido',
    cep: 'CEP inválido',
    url: 'URL inválida',
    minLength: 'Mínimo de {{min}} caracteres',
    maxLength: 'Máximo de {{max}} caracteres',
    min: 'Valor mínimo: {{min}}',
    max: 'Valor máximo: {{max}}',
    pattern: 'Formato inválido',
    passwordMismatch: 'As senhas não coincidem',
    passwordTooWeak: 'Senha muito fraca',
    invalidDate: 'Data inválida',
    futureDate: 'A data deve ser no futuro',
    pastDate: 'A data deve ser no passado',
  },
  errors: {
    network: 'Erro de conexão. Verifique sua internet.',
    timeout: 'A operação demorou muito. Tente novamente.',
    notFound: 'Página não encontrada.',
    unauthorized: 'Você precisa fazer login.',
    forbidden: 'Você não tem permissão para acessar este recurso.',
    serverError: 'Erro no servidor. Tente novamente mais tarde.',
    default: 'Ocorreu um erro. Por favor, tente novamente.',
    invalidCredentials: 'Email ou senha incorretos.',
    accountLocked: 'Conta bloqueada. Entre em contato com o suporte.',
    sessionExpired: 'Sua sessão expirou. Faça login novamente.',
    rateLimited: 'Muitas tentativas. Aguarde alguns minutos.',
  },
  loading: {
    default: 'Carregando...',
    saving: 'Salvando...',
    processing: 'Processando...',
    uploading: 'Enviando...',
    deleting: 'Excluindo...',
    searching: 'Buscando...',
    updating: 'Atualizando...',
    creating: 'Criando...',
  },
  empty: {
    noResults: 'Nenhum resultado encontrado',
    noData: 'Nenhum dado disponível',
    noItems: 'Nenhum item',
    noNotifications: 'Nenhuma notificação',
    noMessages: 'Nenhuma mensagem',
  },
  status: {
    active: 'Ativo',
    inactive: 'Inativo',
    pending: 'Pendente',
    success: 'Sucesso',
    error: 'Erro',
    cancelled: 'Cancelado',
    completed: 'Concluído',
    draft: 'Rascunho',
    published: 'Publicado',
    archived: 'Arquivado',
    approved: 'Aprovado',
    rejected: 'Rejeitado',
    scheduled: 'Agendado',
    inProgress: 'Em andamento',
  },
  time: {
    today: 'Hoje',
    yesterday: 'Ontem',
    tomorrow: 'Amanhã',
    now: 'Agora',
    justNow: 'Agora mesmo',
    minutesAgo: 'há {{count}} minuto',
    minutesAgo_plural: 'há {{count}} minutos',
    hoursAgo: 'há {{count}} hora',
    hoursAgo_plural: 'há {{count}} horas',
    daysAgo: 'há {{count}} dia',
    daysAgo_plural: 'há {{count}} dias',
  },
  actions: {
    confirmDelete: 'Tem certeza que deseja excluir?',
    confirmCancel: 'Tem certeza que deseja cancelar?',
    unsavedChanges: 'Você tem alterações não salvas. Deseja continuar?',
    actionSuccess: 'Ação realizada com sucesso!',
    actionError: 'Erro ao realizar ação.',
    copiedToClipboard: 'Copiado para a área de transferência!',
  },
  pagination: {
    previous: 'Anterior',
    next: 'Próximo',
    first: 'Primeiro',
    last: 'Último',
    page: 'Página',
    of: 'de',
    showing: 'Mostrando',
    to: 'a',
    results: 'resultados',
    itemsPerPage: 'Itens por página',
  },
} as const

/**
 * Default common translations (en-US)
 */
const defaultCommonEnUS = {
  buttons: {
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    close: 'Close',
    search: 'Search',
    filter: 'Filter',
    clear: 'Clear',
    apply: 'Apply',
    reset: 'Reset',
    yes: 'Yes',
    no: 'No',
    ok: 'OK',
    retry: 'Try again',
    continue: 'Continue',
    add: 'Add',
    remove: 'Remove',
    select: 'Select',
    create: 'Create',
    update: 'Update',
    view: 'View',
    download: 'Download',
    upload: 'Upload',
    share: 'Share',
    copy: 'Copy',
    duplicate: 'Duplicate',
  },
  validation: {
    required: 'This field is required',
    email: 'Invalid email',
    cpf: 'Invalid CPF',
    cnpj: 'Invalid CNPJ',
    phone: 'Invalid phone number',
    cep: 'Invalid ZIP code',
    url: 'Invalid URL',
    minLength: 'Minimum {{min}} characters',
    maxLength: 'Maximum {{max}} characters',
    min: 'Minimum value: {{min}}',
    max: 'Maximum value: {{max}}',
    pattern: 'Invalid format',
    passwordMismatch: 'Passwords do not match',
    passwordTooWeak: 'Password is too weak',
    invalidDate: 'Invalid date',
    futureDate: 'Date must be in the future',
    pastDate: 'Date must be in the past',
  },
  errors: {
    network: 'Connection error. Check your internet.',
    timeout: 'The operation took too long. Try again.',
    notFound: 'Page not found.',
    unauthorized: 'You need to log in.',
    forbidden: 'You do not have permission to access this resource.',
    serverError: 'Server error. Try again later.',
    default: 'An error occurred. Please try again.',
    invalidCredentials: 'Incorrect email or password.',
    accountLocked: 'Account locked. Contact support.',
    sessionExpired: 'Your session has expired. Please log in again.',
    rateLimited: 'Too many attempts. Wait a few minutes.',
  },
  loading: {
    default: 'Loading...',
    saving: 'Saving...',
    processing: 'Processing...',
    uploading: 'Uploading...',
    deleting: 'Deleting...',
    searching: 'Searching...',
    updating: 'Updating...',
    creating: 'Creating...',
  },
  empty: {
    noResults: 'No results found',
    noData: 'No data available',
    noItems: 'No items',
    noNotifications: 'No notifications',
    noMessages: 'No messages',
  },
  status: {
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    success: 'Success',
    error: 'Error',
    cancelled: 'Cancelled',
    completed: 'Completed',
    draft: 'Draft',
    published: 'Published',
    archived: 'Archived',
    approved: 'Approved',
    rejected: 'Rejected',
    scheduled: 'Scheduled',
    inProgress: 'In progress',
  },
  time: {
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    now: 'Now',
    justNow: 'Just now',
    minutesAgo: '{{count}} minute ago',
    minutesAgo_plural: '{{count}} minutes ago',
    hoursAgo: '{{count}} hour ago',
    hoursAgo_plural: '{{count}} hours ago',
    daysAgo: '{{count}} day ago',
    daysAgo_plural: '{{count}} days ago',
  },
  actions: {
    confirmDelete: 'Are you sure you want to delete?',
    confirmCancel: 'Are you sure you want to cancel?',
    unsavedChanges: 'You have unsaved changes. Do you want to continue?',
    actionSuccess: 'Action completed successfully!',
    actionError: 'Error performing action.',
    copiedToClipboard: 'Copied to clipboard!',
  },
  pagination: {
    previous: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    page: 'Page',
    of: 'of',
    showing: 'Showing',
    to: 'to',
    results: 'results',
    itemsPerPage: 'Items per page',
  },
} as const

/**
 * Initialize i18n with provided resources
 * Resources should be TypeScript objects with `as const` for type safety
 */
export function initI18n(options: I18nOptions): typeof i18n {
  const {
    defaultLanguage = 'pt-BR',
    fallbackLanguage = 'pt-BR',
    debug = false,
    resources,
    defaultNS = 'common',
    ns = ['common'],
  } = options

  // Merge default common translations with provided resources
  const mergedResources: Resource = {
    'pt-BR': {
      common: {
        ...defaultCommonPtBR,
        ...(resources['pt-BR']?.common || {}),
      },
      ...resources['pt-BR'],
    },
    'en-US': {
      common: {
        ...defaultCommonEnUS,
        ...(resources['en-US']?.common || {}),
      },
      ...resources['en-US'],
    },
  }

  // Add any additional languages from resources
  for (const lang of Object.keys(resources)) {
    if (lang !== 'pt-BR' && lang !== 'en-US') {
      mergedResources[lang] = resources[lang]
    }
  }

  i18n.use(initReactI18next).init({
    resources: mergedResources,
    lng: defaultLanguage,
    fallbackLng: fallbackLanguage,
    defaultNS,
    ns,
    debug,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: true,
    },
  })

  return i18n
}

/**
 * Add a namespace with translations for a specific language
 */
export function addNamespace(
  language: SupportedLanguage,
  namespace: string,
  translations: Record<string, unknown>
): void {
  i18n.addResourceBundle(language, namespace, translations, true, true)
}

/**
 * Add translations for a new language
 */
export function addTranslations(
  language: string,
  namespace: string,
  translations: Record<string, unknown>
): void {
  i18n.addResourceBundle(language, namespace, translations, true, true)
}

/**
 * Change the current language
 */
export function changeLanguage(language: SupportedLanguage): Promise<void> {
  return i18n.changeLanguage(language)
}

/**
 * Get the current language
 */
export function getCurrentLanguage(): SupportedLanguage {
  return i18n.language as SupportedLanguage
}

/**
 * Check if a language is supported
 */
export function isLanguageSupported(language: string): language is SupportedLanguage {
  return language === 'pt-BR' || language === 'en-US'
}

/**
 * Get all supported languages
 */
export function getSupportedLanguages(): SupportedLanguage[] {
  return ['pt-BR', 'en-US']
}

/**
 * Get language display name
 */
export function getLanguageDisplayName(language: SupportedLanguage): string {
  const names: Record<SupportedLanguage, string> = {
    'pt-BR': 'Português (Brasil)',
    'en-US': 'English (US)',
  }
  return names[language]
}

// Export the i18n instance
export { i18n }

// Export default translations for extension
export { defaultCommonPtBR, defaultCommonEnUS }
