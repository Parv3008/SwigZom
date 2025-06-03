import { createIntl } from "react-intl";
import eng from "./eng.json";
import hi from './hi.json';
import pt from './pt.json';
import ru from './ru.json';

const messages = {
  eng,
  hi,
  pt,
  ru,
};

export const getIntl = (locale = "fr") =>
  createIntl({
    locale,
    messages: messages[locale],
  });
