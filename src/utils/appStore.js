import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
//store
export const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
