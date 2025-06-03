import { SET_SELECTED_PRODUCT, CLEAR_SELECTED_PRODUCT } from '../types/productTypes';

const initialState = {
  selectedProduct: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    case CLEAR_SELECTED_PRODUCT:
      return { ...state, selectedProduct: null };
    default:
      return state;
  }
};

export default productReducer;
