import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
    test("should return a username", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: "admin",
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual("admin");
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual("");
    });
});
