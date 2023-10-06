import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button } from "shared/ui";
import { ThemeButton } from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string;
}

export const SideBar = ({ className }: SidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className ?? "",
            ])}
        >
            <Button theme={ThemeButton.OUTLINE} onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
