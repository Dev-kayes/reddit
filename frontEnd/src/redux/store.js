import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productRoute from "./slices/productSlice";
import cartRoute from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productRoute,
    cart: cartRoute,
  },
});
export default store;
