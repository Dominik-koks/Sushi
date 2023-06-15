import { configureStore } from '@reduxjs/toolkit';
import sushisSlice from './slices/sushisSlice';
import homeSlice from './slices/homeSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    sushi: sushisSlice,
    home: homeSlice,
    cart: cartSlice,
  },
});
