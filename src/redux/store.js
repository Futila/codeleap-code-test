import { configureStore } from '@reduxjs/toolkit';

import postReducer from './features/postSlice';
import modalReducer from './features/modalSlice';

const store = configureStore({
  reducer: {
    post: postReducer,
    modal: modalReducer,
  },
});

export default store;
