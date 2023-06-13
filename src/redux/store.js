import { configureStore } from '@reduxjs/toolkit';
import sushisSlice from './slices/sushisSlice';

export const store = configureStore({
  reducer: {
    sushi: sushisSlice,
  },
});
