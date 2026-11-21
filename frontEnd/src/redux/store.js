import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productRoute from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    Product: productRoute,
  },
});
export default store;
