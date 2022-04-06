import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },
  reducers: {
    init: (state, action) => {
      state.posts = action.payload;
    },
    add: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    drop: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    edit: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

export const { init, add, drop, edit } = postsSlice.actions;

export default postsSlice.reducer;
