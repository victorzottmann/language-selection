import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css'
import appLocales from './languageConfig';
import { useIntl } from 'react-intl';

const StyledSelect = styled.select`
  padding: 0 15px;
  height: 50px;
  font-size: 1em;
  border-radius: 5px;
`

function App() {
  console.log('[appLocales]', appLocales['en']);
  
  const [locale, setLocale] = useState(appLocales['en'].locale);

  const selectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale: string = e.target.value;
    setLocale(appLocales[newLocale].locale);
  }

  console.log('[LOCALE]', locale);

  const intl = useIntl();

  return (
    <div className="App">
      <StyledSelect value={locale} onChange={selectLanguage}>
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
      </StyledSelect>

      {intl.formatMessage({id: "PRODUCTS_TABLE_TITLE"}, {
        defaultMessage: "Products - Summary",
      })}

      <h1>Hello World!</h1>
      <p>This is a test with select translations</p>
    </div>
  );
}

export default App;
