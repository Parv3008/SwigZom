import { SET_SELECTED_SUBCATEGORY } from '../types/subcategoryTypes';

const initialState = {
  selectedSubcategoryId: null,
};

const subcategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SUBCATEGORY:
      return { ...state, selectedSubcategoryId: action.payload };
    default:
      return state;
  }
};

export default subcategoryReducer;
