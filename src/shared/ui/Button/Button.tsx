import type React from "react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    children: ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [cls[typeof theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
