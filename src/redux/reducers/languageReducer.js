import { SET_LANGUAGE } from '../types/languageTypes';

const initialState = {
  language: 'eng', // default language
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
