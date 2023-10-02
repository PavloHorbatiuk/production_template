import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext);

    if (theme === undefined) {
        throw new Error("Theme is undefined");
    }

    const toggleTheme = (): void => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        toggleTheme,
        theme,
    };
};
