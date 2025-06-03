import {
  SET_SELECTED_VARIANT,
  TOGGLE_EXTRA,
  SET_QUANTITY,
  RESET_PRODUCT_MENU,
} from '../types/menuTypes';

const initialState = {
  selectedVariant: null,
  selectedExtras: [],
  quantity: 1,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_VARIANT:
      return { ...state, selectedVariant: action.payload };
    case TOGGLE_EXTRA:
      return {
        ...state,
        selectedExtras: state.selectedExtras.includes(action.payload)
          ? state.selectedExtras.filter((e) => e !== action.payload)
          : [...state.selectedExtras, action.payload],
      };
    case SET_QUANTITY:
      return { ...state, quantity: action.payload };
    case RESET_PRODUCT_MENU:
      return {
        ...initialState,
        selectedVariant: action.payload || null,
      };
    default:
      return state;
  }
};

export default menuReducer;
