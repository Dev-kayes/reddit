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
