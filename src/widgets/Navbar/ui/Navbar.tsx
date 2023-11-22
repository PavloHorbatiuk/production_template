import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import React, { useCallback, useState } from "react";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import LoginModal from "features/ui/loginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userAcitions } from "app/entities/User";
import { useTranslation } from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = React.memo(function Navbar({ className }: NavbarProps) {
    const [isAuthModal, setisAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const { t } = useTranslation();

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
                    {t("Login")}
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
            </div>
        </div>
    );
});
