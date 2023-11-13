import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import LoginModal from "features/ui/loginModal/LoginModal";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
    const [isAuthModal, setisAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setisAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setisAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className ?? ""])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onShowModal}>
                    Login
                </Button>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            </div>
        </div>
    );
};
