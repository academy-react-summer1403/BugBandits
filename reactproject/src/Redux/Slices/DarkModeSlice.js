import { createSlice } from "@reduxjs/toolkit";


export const DarkModeSlice = createSlice({
    name:"darkmode",
    initialState:{
        value: localStorage.getItem("darkMode") === "true"
    },
    reducers:{
        toggleDarkMode:(state,action)=>{
            state.value=!state.value;
            localStorage.setItem("darkMode", state.value);
        }
    }
})