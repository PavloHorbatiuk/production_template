import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import ThemeIcon from "shared/assets/icons/themeSvg.svg";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeSwitcherProps {
    className?: string;
}
const ThemeSwitcher = ({ className }: ThemeSwitcherProps): JSX.Element => {
    const { theme, toggleTheme } = useTheme();
    const setColor =
        theme === Theme.DARK ? `${cls.lightIcon}` : `${cls.darkIcon}`;

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames("", {}, [className ?? ""])}
            onClick={toggleTheme}
        >
            <ThemeIcon className={classNames(cls.icon, {}, [setColor])} />
        </Button>
    );
};

export default ThemeSwitcher;
