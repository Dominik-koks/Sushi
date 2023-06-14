import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  act: 0,
  offsetHeight: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setAct(state, action) {
      state.act = action.payload;
    },
    addCoor(state, action) {
      state.offsetHeight = action.payload;
    },
  },
});

export const { setAct, addCoor } = homeSlice.actions;

export default homeSlice.reducer;
