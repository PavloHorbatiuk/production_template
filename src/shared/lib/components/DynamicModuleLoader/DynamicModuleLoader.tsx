import { type Reducer } from "@reduxjs/toolkit";
import {
    type StateSchemaKey,
    type ReduxStoreWithManager,
} from "app/providers/StoreProvider/config/StateSchema";
import { useEffect, type FC, type ReactNode } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer;
};

type ReducersListEntry = [StateSchemaKey, Reducer];

interface IProps {
    children: ReactNode;
    reducers: ReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@init ${name} reducer` });
            }
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name, reducer]: ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@destroy ${name} reducer` });
                    }
                );
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
