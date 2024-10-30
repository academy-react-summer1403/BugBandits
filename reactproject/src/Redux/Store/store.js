import { configureStore } from "@reduxjs/toolkit";
import { DarkModeSlice } from "../Slices/DarkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: DarkModeSlice.reducer,
  },
});
