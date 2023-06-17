import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  item: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setInCart(state, action) {
      const findItem = state.item.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.item.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.item.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    deleteItem(state, action) {
      state.item = state.item.filter((obj) => obj.id !== action.payload);
    },
    minusItem(state, action) {
      const findItem = state.item.find((obj) => obj.id === action.payload);
      if (findItem.count && findItem.count > 0) {
        findItem.count--;
        state.totalPrice -= findItem.price;
      }
      if (state.totalPrice === 0) {
        state.item = [];
      }
    },
    plusItem(state, action) {
      const findItem = state.item.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
      state.totalPrice += findItem.price;
    },
  },
});

export const { setInCart, deleteItem, minusItem, plusItem } = cartSlice.actions;

export default cartSlice.reducer;
