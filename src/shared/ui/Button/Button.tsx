import type React from "react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
    BLACK = "black",
    RED = "red",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    children: ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    const themeClass = theme != null ? cls[theme] : "";
    return (
        <button
            className={classNames(cls.Button, {}, [themeClass])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
