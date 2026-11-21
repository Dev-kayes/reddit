import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductByFilters = createAsyncThunk(
  "products/fetchByFilter",
  async ({
    collection,
    size,
    color,
    gender,
    minPrice,
    maxPrice,
    sortBy,
    search,
    category,
    material,
    brand,
    limit,
  }) => {
    const query = await URLSearchParams();
    if (collection) query.append("collection", collection);
    if (size) query.append("size", size);
    if (color) query.append("color", color);
    if (gender) query.append("gender", gender);
    if (minPrice) query.append("minPrice", minPrice);
    if (maxPrice) query.append("maxPrice", maxPrice);
    if (sortBy) query.append("sortBy", sortBy);
    if (search) query.append("search", search);
    if (category) query.append("category", category);
    if (material) query.append("material", material);
    if (brand) query.append("brand", brand);
    if (limit) query.append("limit", limit);

    const response = axios.get(
      `${import.meta.env.VITE_BE_URL}/api/products?${query.toString()}`,
    );
    return response.data;
  },
);
// Async thunk to fetch a single product by ID:
export const fetchProductDetails = createAsyncThunk(
  "products/fetchedProductDetails",
  async (id) => {
    const response = axios.get(
      `${import.meta.env.VITE_BE_URL}/api/products/${id}`,
    );
    return response.data;
  },
);
// Async thunk to update product:
export const updatedProduct = createAsyncThunk(
  "products/updatedProduct",
  async ({ id, productData }) => {
    const response = await axios.put(
      `${import.meta.env.VITE_BE_URL}/api/products/${id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      },
    );
    return response.data;
  },
);
// Async Thunk to fetch similar product
export const similarProduct = createAsyncThunk(
  "products/similarProduct",
  async ({ id }) => {
    const response = axios.get(
      `${import.meta.env.VITE_BE_URL}/api/products/similar/${id}`,
    );
    return response.data;
  },
);

const productSlice = createSlice({
  name: "Products",
  initialState: {
    products: [],
    selectedProduct: null, // Store the details of the single product
    similatProducts: [],
    loading: false,
    error: null,
    filters: {
      category: "",
      size: "",
      gender: "",
      brand: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
      search: "",
      material: "",
      collection: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {
        category: "",
        size: "",
        gender: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "",
        search: "",
        material: "",
        collection: "",
      };
    },
    extraReducers: (builder) => {
      builder
        // Handle fetching products with filter
        .addCase(fetchProductByFilters.pending, (state) => {
          ((state.loading = true), (state.error = null));
        })
        .addCase(fetchProductByFilters.fulfilled, (state, action) => {
          ((state.loading = false),
            (state.product = Array.isArray(action.payload)
              ? action.payload
              : []));
        })
        .addCase(fetchProductByFilters.rejected, (state, action) => {
          ((state.loading = false), (state.error = action.error.message));
        })
        // Handle fetching single product details
        .addCase(fetchProductDetails.pending, (state) => {
          ((state.loading = true), (state.error = null));
        })
        .addCase(fetchProductDetails.fulfilled, (state, action) => {
          ((state.loading = false),
            (state.selectedProduct = Array.isArray(action.payload)
              ? action.payload
              : []));
        })
        .addCase(fetchProductDetails.rejected, (state, action) => {
          ((state.loading = false), (state.error = action.error.message));
        })
        // Handle Updating Product:
        .addCase(updatedProduct.pending, (state) => {
          ((state.loading = true), (state.error = null));
        })
        .addCase(updatedProduct.fulfilled, (state, action) => {
          state.loading = false;
          const updatedProduct = action.payload;
          const index = state.products.findIndex(
            (product) => product._id === updatedProduct._id,
          );
          if (index !== -1) {
            state.product[index] = updatedProduct;
          }
        })
        .addCase(updatedProduct.rejected, (state, action) => {
          ((state.loading = false), (state.error = action.error.message));
        })
        .addCase(similarProduct.pending, (state) => {
          ((state.loading = true), (state.error = null));
        })
        .addCase(similarProduct.fulfilled, (state, action) => {
          ((state.loading = false), (state.products = action.payload));
        })
        .addCase(similarProduct.rejected, (state, action) => {
          ((state.loading = false), (state.error = action.error.message));
        });
    },
  },
});

export const { setFilters, clearFilters } = productSlice.actions;
export default productSlice.reducer;
