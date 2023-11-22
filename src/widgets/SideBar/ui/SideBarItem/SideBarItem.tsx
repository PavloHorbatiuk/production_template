import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./SideBarItem.module.scss";
import { type SideBarItemType } from "widgets/SideBar/model/items";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import React from "react";

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

const SideBarItem = React.memo(function SideBarItem({
    item,
    collapsed,
}: SideBarItemProps) {
    const { t } = useTranslation("sidebar");
    return (
        <div className={classNames("", { [cls.collapsed]: collapsed }, [])}>
            <AppLink
                className={cls.item}
                theme={AppLinkTheme.SECONDARY}
                to={item.path ?? ""}
            >
                <item.icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>
    );
});

export default SideBarItem;
