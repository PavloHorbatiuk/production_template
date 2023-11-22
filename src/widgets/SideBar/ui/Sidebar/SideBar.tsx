import React, { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button } from "shared/ui";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { SideBarItemsList } from "widgets/SideBar/model/items";
import SideBarItem from "../SideBarItem/SideBarItem";

interface SidebarProps {
    className?: string;
}

export const SideBar = React.memo(function SideBar({
    className,
}: SidebarProps) {
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
            <Button
                className={cls.collapsedBnt}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                square={true}
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            {SideBarItemsList.map((item, index) => (
                <SideBarItem key={index} item={item} collapsed={collapsed} />
            ))}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} isIconShow={collapsed} />
            </div>
        </div>
    );
});
