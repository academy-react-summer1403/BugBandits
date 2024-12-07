import { configureStore } from "@reduxjs/toolkit";
import { DarkModeSlice } from "./Slices/DarkModeSlice";
import authReducer from "./Slices/AuthSlice";

export const store = configureStore({
  reducer: {
    darkMode: DarkModeSlice.reducer,
    auth: authReducer,
  },
});
