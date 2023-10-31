import { type ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { type StateSchema } from "../config/StaticSchema";
import { type DeepPartial } from "@reduxjs/toolkit";

interface IProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: React.FC<IProps> = (props: IProps) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState as StateSchema);
    return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
