import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Button } from "shared/ui";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import HomeIcon from "../../assets/home.svg";
import MainIcon from "../../assets/main.svg";
import { useTranslation } from "react-i18next";

interface SidebarProps {
    className?: string;
}

export const SideBar = ({ className }: SidebarProps): JSX.Element => {
    const { t } = useTranslation("sidebar");

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
            <div>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>{t("Main Page")}</span>
                </AppLink>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("About Page")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} isIconShow={collapsed} />
            </div>
        </div>
    );
};
