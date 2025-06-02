// redux/reducers/subcategoriesReducer.js
import { SET_SELECTED_SUBCATEGORY } from '../types/subcategoriesTypes';

const initialState = {
  selectedSubcategoryId: null,
};

const subcategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_SUBCATEGORY:
      console.log('Setting subcategory to:', action.payload); // ✅ Check if called
      return {
        ...state,
        selectedSubcategoryId: action.payload,
      };
    default:
      return state;
  }
};

export default subcategoriesReducer;
