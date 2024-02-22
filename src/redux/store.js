// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './Slices/questionSlice';

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    
  },
});

export default store;
