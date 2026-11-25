import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = `${import.meta.env.VITE_BE_URL}/api/product/admin`;
const USER_TOKEN = `${localStorage.getItem("userToken")}`;

export const fetchAdminProduct = createAsyncThunk(
  "adminProduct/fetchAdminProduct",
  async () => {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${USER_TOKEN}`,
      },
    });
    return response.data;
  },
);
// async fun to create a new product:
export const createProduct = createAsyncThunk(
  "adminProudct/createProduct",
  async (productData) => {
    const response = await axios.post(API_URL, productData, {
      headers: { USER_TOKEN },
    });
    return response.data;
  },
);

// Async thunk to update existing product:
export const updateProduct = createAsyncThunk(
  "adminProduct/updateProduct",
  async ({ id, productData }) => {
    const response = await axios.put(`${API_URL}/${id}`, productData, {
      headers: { USER_TOKEN },
    });

    return response.data;
  },
);
// Async thunk to delete a product:
export const deleteProduct = createAsyncThunk(
  "adminProduct/deleteProduct",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`, {
      headers: { USER_TOKEN },
    });
    return id;
  },
);

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Admin Products:
      .addCase(fetchAdminProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdminProduct.fulfilled, (state, action) => {
        ((state.loading = false), (state.error = action.payload));
      })
      .addCase(fetchAdminProduct.rejected, (state, action) => {
        ((state.loading = false), (state.error = action.error.message));
      })
      // create Products:
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      // Update Products:
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products
          .findIndex((product) => {
            product._id === action.payload._id;
            if (index !== -1) {
              state.products[index] = action.payload;
            }
          })
          .addCase(deleteProduct.fulfilled, (state, action) => {
            state.product = state.products.filter(
              (product) => product._id !== action.payload,
            );
          });
      });
  },
});

export default adminProductSlice.reducer;
