import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const port_url = import.meta.env.VITE_BE_URL;
// retrive user's info and token from localStorage if available
const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// Check for an existing guestId in the localStorage or generate a new one
const initialGuestID =
  localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestID);

// Initial State:
const initialState = {
  user: userFromStorage,
  guestId: initialGuestID,
  loading: false,
  error: null,
};

// async Thunk for user login:
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${port_url}/api/user/login`, userData);

      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
      return response.data.user;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);
// async Thunk for user registration:
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${port_url}/api/user/register`,
        userData,
      );

      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
      return response.data.user;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      ((state.user = null),
        (state.guestId = `guest_${new Date().getTime()}`),
        localStorage.removeItem("userInfo"),
        localStorage.removeItem("userToken"),
        localStorage.setItem("guestId", state.guestId));
    },
    generateNewGuestId: (state) => {
      ((state.guestId = `guest_${new Date().getTime()}`),
        localStorage.setItem("guestId", state.guestId));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        ((state.loading = false), (state.user = action.payload));
      })
      .addCase(loginUser.rejected, (state, action) => {
        ((state.loading = false),
          (state.error = action.payload?.message || action.error.message));
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        ((state.loading = false), (state.user = action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        ((state.loading = false),
          (state.error = action.payload?.message || action.error.message));
      });
  },
});

export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;
