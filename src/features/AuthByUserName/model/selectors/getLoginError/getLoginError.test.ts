import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError.test", () => {
    test("should return error", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: "error",
                username: "",
                password: "",
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual("error");
    });
    test("should return with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
