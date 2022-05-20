import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "disable",
  initialState: {
    itemsInDisable: null,
    itemsInDisabls: null,
    itemsInDisables: null,
  },
  reducers: {
    setItemInDisable: (state, action) => {
      state.itemsInDisable = action.payload;
    },
    setItemInDisabls: (state, action) => {
      state.itemsInDisabls = action.payload;
    },
    setItemInDisab: (state, action) => {
      state.itemsInDisable = action.payload;
    },
    setItemInDisables: (state, action) => {
      state.itemsInDisables = action.payload;
    },
  },
});

export const {
  setItemInDisable,
  setItemInDisabls,
  setItemInDisables,
  setItemInDisab,
} = cartSlice.actions;
export default cartSlice.reducer;
