import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false , isRegistering: false},
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    goToRegistration(state) {
      state.isRegistering = true;
    },
    backToLogin(state) {
      state.isRegistering = false;
    },
    register(state) {
      state.isRegistering = false;
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;