import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TranslationWrapper from './components/TranslationWrapper';

ReactDOM.render(
  <TranslationWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TranslationWrapper>,
  document.getElementById('root')
);

