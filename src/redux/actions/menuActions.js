import {
  SET_SELECTED_VARIANT,
  TOGGLE_EXTRA,
  SET_QUANTITY,
  RESET_PRODUCT_MENU,
} from '../types/menuTypes';

export const setSelectedVariant = (variant) => ({
  type: SET_SELECTED_VARIANT,
  payload: variant,
});

export const toggleExtra = (extra) => ({
  type: TOGGLE_EXTRA,
  payload: extra,
});

export const setQuantity = (qty) => ({
  type: SET_QUANTITY,
  payload: qty,
});

export const resetProductMenu = (initialVariant = null) => ({
  type: RESET_PRODUCT_MENU,
  payload: initialVariant,
});
