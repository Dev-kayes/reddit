import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productRoute from "./slices/productSlice";
import cartRoute from "./slices/cartSlice";
import checkOutRoute from "./slices/checkOutSlice";
import orderRoute from "./slices/orderSlice";
import adminRoute from "./slices/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productRoute,
    cart: cartRoute,
    checkOut: checkOutRoute,
    orders: orderRoute,
    admin: adminRoute,
  },
});
export default store;
