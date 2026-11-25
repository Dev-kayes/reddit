import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productRoute from "./slices/productSlice";
import cartRoute from "./slices/cartSlice";
import checkOutRoute from "./slices/checkOutSlice";
import orderRoute from "./slices/orderSlice";
import adminRoute from "./slices/adminSlice";
import adminProductRoute from "./slices/adminProductSlice";
import adminOrderRoute from "./slices/adminOrderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productRoute,
    cart: cartRoute,
    checkOut: checkOutRoute,
    orders: orderRoute,
    admin: adminRoute,
    adminProduct: adminProductRoute,
    adminOrder: adminOrderRoute,
  },
});
export default store;
