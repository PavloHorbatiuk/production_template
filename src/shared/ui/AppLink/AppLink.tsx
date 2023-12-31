import React from "react";
import { type ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, type LinkProps } from "react-router-dom";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = React.memo(
    function AppLink(props) {
        const {
            className,
            children,
            theme = AppLinkTheme.PRIMARY,
            to,
            ...otherProps
        } = props;
        return (
            <Link
                to={to}
                className={classNames(cls.AppLink, {}, [
                    className ?? "",
                    cls[theme],
                ])}
                {...otherProps}
            >
                {children}
            </Link>
        );
    }
);
