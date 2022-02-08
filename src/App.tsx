import { useContext } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { TranslationContext } from './components/TranslationWrapper';
import './App.css'

const StyledSelect = styled.select`
  padding: 0 15px;
  height: 50px;
  font-size: 1em;
  border-radius: 5px;
`

function App() {  
  const context = useContext(TranslationContext);

  console.log('[CONTEXT LOCALE]', context.locale);
  
  const intl = useIntl();

  return (
    <div className="App">
      <StyledSelect value={context.locale} onChange={context.selectLanguage}>
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
      </StyledSelect>
      <h3>
        {intl.formatMessage({id: "PRODUCTS_TABLE_TITLE"}, {
          defaultMessage: "Products - Summary",
        })}
      </h3>
      <h1>
        {intl.formatMessage({id: "H1_TEXT"},{
          defaultMessage: "Hello World!"
        })}
      </h1>
      <p>
        {intl.formatMessage({id: "P_TEXT"}, {
          defaultMessage: "This is a test with select translations"
        })}
      </p>
    </div>
  );
}

export default App;
