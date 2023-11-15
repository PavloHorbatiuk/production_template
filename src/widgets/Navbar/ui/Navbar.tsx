import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { useCallback, useState } from "react";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import LoginModal from "features/ui/loginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userAcitions } from "app/entities/User";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
    const [isAuthModal, setisAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setisAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setisAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userAcitions.logout());
    }, [dispatch]);

    if (authData?.username) {
        return (
            <div className={classNames(cls.navbar, {}, [className ?? ""])}>
                <div className={cls.links}>
                    <Button theme={ButtonTheme.OUTLINE} onClick={onLogout}>
                        Logout
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className ?? ""])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onShowModal}>
                    Login
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </div>
        </div>
    );
};
