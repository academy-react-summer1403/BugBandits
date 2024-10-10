import { createSlice } from "@reduxjs/toolkit";


export const DarkModeSlice = createSlice({
    name:"darkmode",
    initialState:{
        value:false
    },
    reducers:{
        toggleDarkMode:(state,action)=>{
            state.value=!state.value
        }
    }
})