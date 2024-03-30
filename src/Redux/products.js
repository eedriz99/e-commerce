import { createSlice } from "@reduxjs/toolkit";

export const productState = createSlice({
  name: "product",
  initialState: {
    products: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productState.actions;
export default productState.reducer;
