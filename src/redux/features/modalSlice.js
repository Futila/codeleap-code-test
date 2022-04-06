import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    showModal: false,
    modalUserPost: {},
  },
  reducers: {
    open: (state, action) => {
      state.showModal = true;
      state.modalUserPost = action.payload;
    },

    close: (state, action) => {
      state.showModal = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
