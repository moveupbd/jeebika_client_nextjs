import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: null,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authData = action.payload;
    },

    logout: (state) => {
      state.authData = null;
      state.userData = null;
    },

    storeUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, storeUserData } = authSlice.actions;
