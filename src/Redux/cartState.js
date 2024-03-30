import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalAmount: 0,
    isOpenedCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
      // let sum = 1;
      // if(action.payload.inventory > 0){
      //     sum = action.payload.inventory;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    openCloseCart: (state) => {
      state.isOpenedCart = !state.isOpenedCart;
    },
    // setTotalAmount:(state,action)=> {
    //   const product = state.products.find(el=> el.id===action.payload)
    //   if(product){
    //       const index = state.products.indexOf(product)
    //       state.products[index]= {
    //           ...product,
    //           amount=action.amount
    // };
    // }, },
  },
});

export const { addToCart, removeFromCart, openCloseCart } = cartSlice.actions;
export default cartSlice.reducer;
