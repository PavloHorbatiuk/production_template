import { configureStore } from "@reduxjs/toolkit";
import { type StateSchema } from "./StaticSchema";
import { counterReducer } from "app/entities/Coutner";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: IS_DEV,
        preloadedState: initialState,
    });
}
