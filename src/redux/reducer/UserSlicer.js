/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userCredentials: {
      accessToken: '',
      email: '',
      photo_path: '',
      userId: '',
      username: '',
    },
    isPending: false,
    isError: null,
  },
  reducers: {
    startLogin: (state, action) => {
      state.isPending = true;
    },
    successLogin: (state, action) => {
      state.isPending = false;
      state.isError = false;
      state.userCredentials = action.payload;
    },
    changePhotoPath: (state, action) => {
      state.userCredentials.photo_path = action.payload;
    },
    errorLogin: (state, action) => {
      state.isPending = true;
      state.isError = true;
    },
  },
});

// login
export const {startLogin, successLogin, changePhotoPath, errorLogin} =
  userSlice.actions;
export default userSlice.reducer;
