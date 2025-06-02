import { SET_MAIN_CATEGORIES, SET_SELECTED_MAIN_CATEGORY } from "../types/mainCategoryTypes";
import categoriesData from "../../data/categories.json";

export const loadMainCategories = () => {
  return (dispatch) => {
    const main = categoriesData.categories.filter((cat) => cat.parent === null);
    dispatch({ type: SET_MAIN_CATEGORIES, payload: main });

    if (main.length > 0) {
      dispatch(setSelectedMainCategory(main[0].id));
    }
  };
};

export const setSelectedMainCategory = (id) => ({
  type: SET_SELECTED_MAIN_CATEGORY,
  payload: id,
});
