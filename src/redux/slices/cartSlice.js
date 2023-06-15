import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setInCart(state, action) {
      state.item.push({
        ...action.payload,
        count: 1,
      });
    },
    deleteItem(state, action) {
      state.item = state.item.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

export const { setInCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
