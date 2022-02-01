import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';

import appLocales from './languageConfig';

const defaultLocale = 'en';
const local: string = 'en';
const localeConfig = appLocales[local];

ReactDOM.render(
  <IntlProvider 
    locale={localeConfig.locale} 
    messages={localeConfig.messages} 
    defaultLocale={defaultLocale}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>,
  document.getElementById('root')
);

