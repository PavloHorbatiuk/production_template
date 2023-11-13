import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { type StateSchema } from "./StaticSchema";
import { counterReducer } from "app/entities/Coutner";
import { userReducer } from "app/entities/User";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: IS_DEV,
        preloadedState: initialState,
    });
}
