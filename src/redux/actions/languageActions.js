import { SET_LANGUAGE } from '../types/languageTypes';

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
