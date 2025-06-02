import { combineReducers } from "redux";
import mainCategoryReducer from "./mainCategoryReducer";
import subcategoriesReducer from "./subcategoriesReducer";


const rootReducer = combineReducers({
  mainCategory: mainCategoryReducer,
  subcategories: subcategoriesReducer,
});

export default rootReducer;
