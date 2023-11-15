import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getisLoading.test", () => {
    test("should return true", () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
