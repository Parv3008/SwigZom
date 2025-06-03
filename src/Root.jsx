import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import eng from './locales/eng.json';
import App from './App';
import hi from './locales/hi.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';

const messages = {
  eng,
  hi,
  pt,
  ru,
};

const Root = () => {
  const language = useSelector((state) => state.language.language);
  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  );
};

export default Root;
