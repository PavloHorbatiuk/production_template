import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAcitions, type User } from "app/entities/User";
import axios from "axios";

import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/login",
            authData
        );
        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data)
        );
        thunkAPI.dispatch(userAcitions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue("Wrong login or password");
    }
});
