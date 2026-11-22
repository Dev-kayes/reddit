import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Helper fun to load cart from localStorage:
const loadCartFromStorage = () => {
  const storeCart = localStorage.getItem("cart");
  return storeCart ? JSON.parse(storeCart) : { products: [] };
};
// Helper fun to save cart to localStorage:
const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
// Fetched cart to a user or guest:
export const fetchedCart = createAsyncThunk(
  "cart/fetchedCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const response = axios.get(
        (`${import.meta.env.VITE_BE_URL}/api/cart`,
        {
          params: { userId, guestId },
        }),
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
// Add an Item to the cart for a user or guest:
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (
    { productId, quantity, size, color, guestId, userId },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BE_URL}/api/cart`,
        {
          productId,
          quantity,
          size,
          color,
          guestId,
          userId,
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
// Update a quantity of an item in the cart:
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async (
    { productId, quantity, guestId, userId, size, color },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BE_URL}/api/cart`,
        { productId, quantity, guestId, userId, size, color },
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

// Remove an Item from the cart:
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (
    { productId, quantity, guestId, userId, size, color },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BE_URL}/api/cart`,
        data: { productId, quantity, guestId, userId, size, color },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
// Merge guest cart into user cart:
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BE_URL}/api/cart`,
        { guestId, userId },
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
