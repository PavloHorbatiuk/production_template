import { type DeepPartial } from "@reduxjs/toolkit";
import { type LoginSchema } from "../types/LoginSchema";
import { loginAcitions, loginReducer } from "./loginSlice";

describe("LoginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "123" };

        expect(
            loginReducer(
                state as LoginSchema,
                loginAcitions.setUsername("123123")
            )
        ).toStrictEqual({ username: "123123" });
    });

    test("test set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "123" };

        expect(
            loginReducer(
                state as LoginSchema,
                loginAcitions.setPassword("123123")
            )
        ).toEqual({ password: "123123" });
    });
});
