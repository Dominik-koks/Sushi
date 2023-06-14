import { configureStore } from '@reduxjs/toolkit';
import sushisSlice from './slices/sushisSlice';
import homeSlice from './slices/homeSlice';

export const store = configureStore({
  reducer: {
    sushi: sushisSlice,
    home: homeSlice,
  },
});
