import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

interface componentRenderProps {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

const componentRender = (
    component: ReactNode,
    options: componentRenderProps = {}
): JSX.Element => {
    const { route = "/", initialState } = options;
    return (
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};

export default componentRender;
