import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import {
    useState,
    type ReactNode,
    useRef,
    useEffect,
    useCallback,
} from "react";
import Portal from "../Portal/Portal";
import { useTheme } from "app/providers/ThemeProvider";
export interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props): JSX.Element => {
    const { className, children, isOpen, onClose } = props;
    const [isClosing, setIsClosing] = useState(false);
    const { theme } = useTheme();
    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
        [cls[theme]]: true,
    };

    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const closeHandler = useCallback((): void => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    const onContentClick = (e: React.MouseEvent): void => {
        e.stopPropagation();
    };
    const onKeyDown = useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === "Escape") {
                closeHandler();
            }
        },
        [closeHandler]
    );
    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className ?? ""])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
