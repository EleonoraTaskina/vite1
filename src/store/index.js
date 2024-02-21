import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/articles';
import counterReducer2 from './slices/articles2';

export const store = configureStore({
  reducer: {
    articlesStore: counterReducer,
    counter: counterReducer2,
  },
});