import { Suspense, useState } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import { Modal } from "shared/ui/Modal/Modal";

const App = (): JSX.Element => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback=''>
                <Navbar />
                <button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    Modal
                </button>
                <Modal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit enim sint temporibus quod illum praesentium ducimus
                    voluptas deserunt ea repellat neque quisquam accusantium
                    laborum voluptates facere, nulla aliquid cupiditate.
                </Modal>
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
