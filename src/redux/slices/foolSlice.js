import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slide: 0,
  foolItems: [],
};

export const foolSlice = createSlice({
  name: 'fool',
  initialState,
  reducers: {
    slide(state, action) {
      state.slide = action.payload;
    },
    setFoolItem(state, action) {
      state.foolItems = action.payload;
    },
  },
});

export const { slide, setFoolItem } = foolSlice.actions;

export default foolSlice.reducer;
