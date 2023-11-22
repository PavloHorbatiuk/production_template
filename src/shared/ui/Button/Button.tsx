import React from "react";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
    CLEAR = "clear",
    BLACK = "black",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children: ReactNode;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(function Button(props) {
    const {
        className = "",
        children,
        theme,
        square = false,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme ?? ""]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled ?? false,
    };
    return (
        <button
            disabled={disabled}
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
