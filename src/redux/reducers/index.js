import { combineReducers } from "redux";
import mainCategoryReducer from "./mainCategoryReducer";
import subcategoryReducer from "./subcategoryReducer";
import productReducer from "./productReducer";
import menuReducer from "./menuReducer";
import languageReducer from "./languageReducer";
import cartReducer from "./cartReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
  mainCategory: mainCategoryReducer,
  subcategory: subcategoryReducer,
  product: productReducer,
  menu: menuReducer,
  language: languageReducer,
  cart: cartReducer,
  basket: basketReducer,
});

export default rootReducer;
