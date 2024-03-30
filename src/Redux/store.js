import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartState";
import productsReducer from "./products";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});
export default configureStore({
  reducer: rootReducer,
});
