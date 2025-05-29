import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunks";

const initialState = {
  products: [],
  favProducts: [],
  loading: false,
  error: null,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setfavProducts: (state, action) => {
      state.favProducts.push(action.payload);
    },
    removeFavProduct: (state, action) => {
      state.favProducts = state.favProducts.filter(
        (prod) => prod.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setfavProducts, removeFavProduct } = productSlice.actions;

export default productSlice.reducer