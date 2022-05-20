import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "booking",
  initialState: {
    itemsInBooking: null,
  },
  reducers: {
    setItemInBooking: (state, action) => {
      state.itemsInBooking = action.payload;
    },
  },
});
 
export const { setItemInBooking } = cartSlice.actions;
export default cartSlice.reducer;