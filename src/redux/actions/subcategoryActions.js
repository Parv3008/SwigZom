import { SET_SELECTED_SUBCATEGORY } from '../types/subcategoryTypes';

export const setSelectedSubcategory = (id) => ({
  type: SET_SELECTED_SUBCATEGORY,
  payload: id,
});
