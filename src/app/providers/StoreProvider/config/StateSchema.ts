import {
    type AnyAction,
    type Reducer,
    type ReducersMapObject,
    type EnhancedStore,
    type CombinedState,
} from "@reduxjs/toolkit";
import { type CounterSchema } from "app/entities/Coutner";
import { type UserSchema } from "app/entities/User";
import { type LoginSchema } from "features/ui";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // Async reducers
    login?: LoginSchema;
}
export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}
