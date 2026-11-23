import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async fetch user orders:

export const fetchUserOrder = createAsyncThunk(
  "order/fetchUserOrder",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BE_URL}/api/orders/my-orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
// Async thunk to fetch order details by Id:
export const fetchOrderDetails = createAsyncThunk(
  "order/fetchOrderDetails",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BE_URL}/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    totalOrder: 0,
    orderDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrder.pending, (state) => {
      ((state.loading = true), (state.error = null));
    });
    builder.addCase(fetchUserOrder.fulfilled, (state, action) => {
      ((state.loading = false), (state.orders = action.payload?.message));
    });
    builder.addCase(fetchUserOrder.rejected, (state, action) => {
      ((state.loading = false), (state.error = action.payload?.message));
    });
    builder.addCase(fetchOrderDetails.pending, (state) => {
      ((state.loading = true), (state.error = null));
    });
    builder.addCase(fetchOrderDetails.fulfilled, (state, action) => {
      ((state.loading = false), (state.orders = action.payload?.message));
    });
    builder.addCase(fetchOrderDetails.rejected, (state, action) => {
      ((state.loading = false), (state.error = action.payload?.message));
    });
  },
});
export default orderSlice.reducer;
