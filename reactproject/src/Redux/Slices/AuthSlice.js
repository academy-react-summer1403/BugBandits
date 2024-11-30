import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, 
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
