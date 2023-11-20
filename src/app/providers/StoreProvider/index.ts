import StoreProvider from "./ui/StoreProvider";
import { createReduxStore, type AppDispatch } from "./config/store";
import { type StateSchema } from "./config/StateSchema";

export { StoreProvider, createReduxStore, type StateSchema, type AppDispatch };
export type { ReduxStoreWithManager } from "./config/StateSchema";
