import en from './translations/en.json'
import pt from './translations/pt.json'

interface LocaleConfig {
  [key: string]: any
}

const appLocales: LocaleConfig = {
  en: {
    messages: en,
    locale: 'en'
  },
  pt: {
    messages: pt,
    locale: 'pt'
  }
}

export default appLocales;