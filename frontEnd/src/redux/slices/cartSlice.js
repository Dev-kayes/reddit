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
