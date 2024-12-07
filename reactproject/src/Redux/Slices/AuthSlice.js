import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./../../Core/Storage/localStorage.storage";

const initialState = {
  isLoggedIn: !!getData("login"), // Check for token on initialization
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;



// const initialState = {
//   isLoggedIn: false,
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logIn: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//     },
//     logOut: (state) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//   },
// });

// export const { logIn, logOut } = authSlice.actions;
// export default authSlice.reducer;
