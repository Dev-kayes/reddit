import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = `${import.meta.env.VITE_BE_URL}/api/order/admin`;
const USER_TOKEN = `${localStorage.getItem("userToken")}`;

// Async thunk to fetch All admin order:
export const fetchAllAdminOrder = createAsyncThunk(
  "adminOrders/fetchAllAdminOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL, {
        headers: { Authorization: USER_TOKEN },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

// Async thunk to update Admin Order delivery status:
export const updateAllAdminOrder = createAsyncThunk(
  "adminOrders/updateAllAdminOrders",
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${API_URL}/${id}`,
        { status },
        {
          headers: { Authorization: USER_TOKEN },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

// Async thunk to Delete Admin Order delivery status:
export const deleteAllAdminOrder = createAsyncThunk(
  "adminOrders/deleteAllAdminOrders",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: USER_TOKEN },
      });
      return id;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
const adminOrderSlice = createSlice({
  name: "adminSlice",
  initialState: {
    order: [],
    totalOrder: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch All Orders ( Admin Only )
      .addCase(fetchAllAdminOrder.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchAllAdminOrder.fulfilled, (state, action) => {
        (((state.loading = false), (state.order = action.payload)),
          (state.totalOrder = action.payload.length));
        // Calculate total sales:
        const totalSales = action.payload.reduce;
        ((acc, order) => {
          return acc + order.totalOrder;
        },
          0);
        state.totalSales = totalSales;
      })

      .addCase(fetchAllAdminOrder.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.payload.message));
      })
      // Update Order Status:
      .addCase(updateAllAdminOrder.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const orderIndex = state.order.findIndex((order) => {
          order._id === updatedOrder._id;
        });
        if (orderIndex !== -1) {
          state.order[orderIndex] = updatedOrder;
        }
      })
      .addCase(deleteAllAdminOrder.fulfilled, (state, action) => {
        state.order = state.order.filter((order) => {
          order.id !== action.payload;
        });
      });
  },
});

export default adminOrderSlice.reducer;
