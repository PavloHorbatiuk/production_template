import { Suspense, useEffect } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { useDispatch } from "react-redux";
import { userAcitions } from "./entities/User";

const App = (): JSX.Element => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAcitions.initAuthData());
    }, [dispatch]);

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
