import { createSlice } from '@reduxjs/toolkit'

const optionSlice = createSlice({
  name: "option",
  initialState: {
    IntemsInOption: [],
  },
  reducers: {
    setItemInOption: (state, action) => {
      state.IntemsInOption.push(action.payload);
    },
  },
});

export const { setItemInOption } = optionSlice.actions;
export default optionSlice.reducer;