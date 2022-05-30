import { createSlice } from '@reduxjs/toolkit'


const optionSlice = createSlice({
  name: "option",
  initialState: {
    IntemsInOption: [],
    IntemsInOptions: [],
    IntemsInOptiones: [],
    ItemsInDate: null,
    ItemsInDates: null,
    IntemsInChoice: null,
    IntemsInChoices: null,
    IntemsInChoic: null,
  },
  reducers: {
    setItemDate: (state, action) => {
      state.ItemsInDate = action.payload;
    },
    setItemDates: (state, action) => {
      state.ItemsInDates = action.payload;
    },
    setItemInOption: (state, action) => {
      state.IntemsInOption = action.payload;
    },
    setItemInOptions: (state, action) => {
      state.IntemsInOptions = action.payload;
    },
    setItemInOptiones: (state, action) => {
      state.IntemsInOptiones = action.payload;
    },
    setItemInChoice: (state, action) => {
      state.IntemsInChoice = action.payload;
    },
    setItemInChoices: (state, action) => {
      state.IntemsInChoices = action.payload;
    },
    setItemInChoic: (state, action) => {
      state.IntemsInChoic = action.payload;
    },
  },
});

export const {
  setItemInOption,
  setItemInOptions,
  setItemInOptiones,
  setItemInChoice,
  setItemInChoic,
  setItemInChoices,
  setItemDate,
  setItemDates,
} = optionSlice.actions;
export default optionSlice.reducer;