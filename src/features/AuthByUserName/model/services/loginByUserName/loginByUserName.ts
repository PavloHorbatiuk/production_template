import { createAsyncThunk } from "@reduxjs/toolkit";
import { type User } from "app/entities/User";
import axios from "axios";

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
        console.log(response.data, "data");
        return response.data;
    } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue("error");
    }
});
