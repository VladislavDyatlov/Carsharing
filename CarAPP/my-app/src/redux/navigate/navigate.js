import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "navigate",
  initialState: {
    itemsInNavigate: null,
    itemsInNavigates: null,
    itemsInNavigat: null,
  },
  reducers: {
    setItemInNavigate: (state, action) => {
      state.itemsInNavigate = action.payload;
    },
    setItemInNavigates: (state, action) => { 
      state.itemsInNavigates = action.payload;
    }, 
    setItemInNavigat: (state, action) => {
      state.itemsInNavigat = action.payload;
    },
  },
});

export const {
  setItemInNavigates,
  setItemInNavigat,
  setItemInNavigate
} = cartSlice.actions;
export default cartSlice.reducer;