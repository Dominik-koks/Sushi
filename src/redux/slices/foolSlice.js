import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slide: 0,
  foolItems: [],
};

export const foolSlice = createSlice({
  name: 'fool',
  initialState,
  reducers: {
    setSlide(state, action) {
      state.slide = action.payload;
    },
    setFoolItem(state, action) {
      state.foolItems = action.payload;
    },
  },
});

export const { setSlide, setFoolItem } = foolSlice.actions;

export default foolSlice.reducer;
