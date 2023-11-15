import {
    type ReducersMapObject,
    configureStore,
    type AnyAction,
    type ThunkDispatch,
} from "@reduxjs/toolkit";
import { type StateSchema } from "./StateSchema";
import { counterReducer } from "app/entities/Coutner";
import { userReducer } from "app/entities/User";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: IS_DEV,
        preloadedState: initialState,
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager;
    return store;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<StateSchema, any, AnyAction>;
