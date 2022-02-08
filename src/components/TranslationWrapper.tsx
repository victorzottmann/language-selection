import React, { useState, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import appLocales from '../config/languageConfig';

interface Props {
  children: any
}

const defaultContext = appLocales["en"];
export const TranslationContext = createContext(defaultContext);

const TranslationWrapper: React.FC<Props> = ({ children }) => {
  const [locale, setLocale] = useState(defaultContext.locale);
  const [messages, setMessages] = useState(defaultContext.messages); 

  const selectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale: string = e.target.value;
    setLocale(appLocales[newLocale].locale);
    setMessages(appLocales[newLocale].messages);
  }

  return (
    <TranslationContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </TranslationContext.Provider>
  )
} 

export default TranslationWrapper;