import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  act: 0,
  offsetTop: [],
  open: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setAct(state, action) {
      state.act = action.payload;
    },
    addCoor(state, action) {
      const { index, offsetTop } = action.payload;
      state.offsetTop[index] = offsetTop;
    },
    setOpen(state, action) {
      state.open = action.payload;
    },
  },
});

export const { setAct, addCoor, setOpen } = homeSlice.actions;

export default homeSlice.reducer;
