import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authData: null,
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
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
