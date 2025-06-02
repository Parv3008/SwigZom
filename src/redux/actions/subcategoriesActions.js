import { SET_SELECTED_SUBCATEGORY } from '../types/subcategoriesTypes';

export const setSelectedSubcategory = (subcategoryId) => ({
  type: SET_SELECTED_SUBCATEGORY,
  payload: subcategoryId,
});
