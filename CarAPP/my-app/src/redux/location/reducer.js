import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "location",
  initialState: {
    itemsInLocation: [],
    itemsInLocations: [],
  },
  reducers: {
    setItemInLocation: (state, action) => {
      if (action.payload === "Ульяновск") {
        state.itemsInLocation = "Нариманова 42";
        state.itemsInLocations = "Ульяновск,";
      }
      if (action.payload === "Санкт-Петербург") {
        state.itemsInLocation = "Невский проспект 26";
        state.itemsInLocations = "Санкт-Петербург,";
      }
      if (action.payload === "Москва") {
        state.itemsInLocation = "Камергерский переулок 57";
        state.itemsInLocations = "Москва,";
      }
    },
  },
});
 
export const { setItemInLocation } = cartSlice.actions;
export default cartSlice.reducer;