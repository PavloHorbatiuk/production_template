import classNames from "classnames";
import cls from "./Text.module.scss";
export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
}

function Text(props: TextProps) {
    const { className, title, text } = props;
    return (
        <div className={classNames(cls.Text, {}, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}

export default Text;
