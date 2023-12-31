import classNames from "classnames";
import cls from "./Text.module.scss";
export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export const Text = (props: TextProps) => {
    const { className, title, text, theme = TextTheme.PRIMARY } = props;
    return (
        <div
            className={classNames(cls.Text, { [cls[theme]]: true }, [
                className,
            ])}
        >
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
