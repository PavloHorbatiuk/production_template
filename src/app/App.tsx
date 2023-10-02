import React, { Suspense } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";

const App = (): JSX.Element => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
