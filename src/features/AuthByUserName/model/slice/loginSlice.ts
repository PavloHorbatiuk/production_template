import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type LoginSchema } from "../types/LoginSchema";
import { loginByUsername } from "../services/loginByUserName/loginByUserName";

const initialState: LoginSchema = {
    isLoading: false,
    username: "",
    password: "",
    error: undefined,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = true;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginAcitions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
