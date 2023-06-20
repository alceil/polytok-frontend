import { createSlice } from '@reduxjs/toolkit';

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: {
    type: null,
    message: null,
  },
  reducers: {
    showSnackbar: (state, action) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    hideSnackbar: (state) => {
      state.type = null;
      state.message = null;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
