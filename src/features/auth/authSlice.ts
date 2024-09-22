import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import * as api from "./authAPI";
import { act } from "@testing-library/react";

const authUser = JSON.parse(localStorage.getItem("user") as any);
const otherUser = JSON.parse(localStorage.getItem("otheruser") as any);
const allUser = JSON.parse(localStorage.getItem("alluser") as any);
export interface userState {
  user: any;
  otherperson: any;
  users: any;
  status: "success" | "loading" | "failed" | "idle";
  mobileNav: boolean;
  mobileSubTitle: string;
  showmobileSubTitle: boolean;
}

const initialState: userState = {
  user: authUser ? authUser : {},
  otherperson: otherUser ? otherUser : {},
  users: allUser ? allUser : [],
  status: "idle",
  mobileNav: false,
  mobileSubTitle: '',
  showmobileSubTitle: false,
};



export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      return initialState;
    },
    toggleMobileNav: (state, action: PayloadAction<boolean>) => {
      state.mobileNav = action.payload;
    },
    viewMobileSubTitle: (state, action: PayloadAction<{ mode: boolean; text: string }>) => {
      state.mobileSubTitle = action.payload.text;
      state.showmobileSubTitle = action.payload.mode;
    }
  },

  // extraReducers(builder) {
  //   builder
  //   .addCase(registerUser.pending, (state, action) => {
  //     state.status = "loading";
  //   })
  // }
});

export const { logout, toggleMobileNav, viewMobileSubTitle } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth;

export default authSlice.reducer;
