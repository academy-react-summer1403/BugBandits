// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getUserInfo } from "../../Core/Services/api/UserPanel/getuserinfo.api";

// export const fetchUserInfo = createAsyncThunk("user/fetchInfo", async () => {
//   const { data } = await getUserInfo();
//   return data;
// });

// const userInfoSlice = createSlice({
//   name: "user",
//   initialState: { info: {}, status: null },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserInfo.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchUserInfo.fulfilled, (state, action) => {
//         state.info = action.payload;
//         state.status = "succeeded";
//       })
//       .addCase(fetchUserInfo.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export default userInfoSlice.reducer;
