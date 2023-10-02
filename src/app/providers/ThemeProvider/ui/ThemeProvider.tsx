import React, { type ReactNode, useMemo, useState } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "../lib/ThemeContext";

interface IProps {
    children: ReactNode;
}
const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
const defaultTheme = storedTheme != null ? (storedTheme as Theme) : Theme.LIGHT;

const ThemeProvider: React.FC<IProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
