import { createSlice } from "@reduxjs/toolkit";
import { type UserSchema } from "../types/user";

const initialState: UserSchema = {
    authData: { id: "", username: "" },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const { actions: userAcitions } = userSlice;
export const { reducer: userReducer } = userSlice;
