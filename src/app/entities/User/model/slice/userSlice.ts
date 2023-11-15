import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type User, type UserSchema } from "../types/user";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const initialState: UserSchema = {
    authData: { id: "", username: "" },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userAcitions } = userSlice;
export const { reducer: userReducer } = userSlice;
