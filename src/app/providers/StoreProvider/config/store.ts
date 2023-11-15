import { type ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { type StateSchema } from "./StaticSchema";
import { counterReducer } from "app/entities/Coutner";
import { userReducer } from "app/entities/User";
import { loginReducer } from "features/ui";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: IS_DEV,
        preloadedState: initialState,
    });
}
