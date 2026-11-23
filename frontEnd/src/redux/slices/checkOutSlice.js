import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createCheckOut = createAsyncThunk(
  "checkOut/createCheckOut",
  async (checkOutData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BE_URL}/api/checkOut/`,
        checkOutData,
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

const checkOutSlice = createSlice({
  name: "checkOut",
  initialState: {
    checkOut: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createCheckOut.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCheckOut.fulfilled, (state, action) => {
        state.loading = false;
        state.checkOut = action.payload;
      })
      .addCase(createCheckOut.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default checkOutSlice.reducer;
