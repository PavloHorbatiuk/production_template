import classNames from "classnames";
import cls from "./Input.module.scss";
import { type InputHTMLAttributes } from "react";
import React from "react";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = React.memo(function Input(props: InputProps) {
    const { className, value, onChange, ...restProps } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <>
            <input
                className={classNames(cls.customInput, {}, [className ?? ""])}
                value={value}
                onChange={onChangeHandler}
                {...restProps}
            />
        </>
    );
});
