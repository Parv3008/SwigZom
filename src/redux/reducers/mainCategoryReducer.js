import { SET_MAIN_CATEGORIES, SET_SELECTED_MAIN_CATEGORY } from "../types/mainCategoryTypes";

const initialState = {
  mainCategories: [],
  selectedMainCategoryId: null,
};

const mainCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAIN_CATEGORIES:
      return { ...state, mainCategories: action.payload };
    case SET_SELECTED_MAIN_CATEGORY:
      return { ...state, selectedMainCategoryId: action.payload };
    default:
      return state;
  }
};

export default mainCategoryReducer;
