import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import { loginAcitions } from "features/AuthByUserName/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUserName/model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";

interface IProps {
    className?: string;
}

export const LoginForm = React.memo(function LoginForm({ className }: IProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(loginAcitions.setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginAcitions.setPassword(value));
        },
        [dispatch]
    );

    const onLoginClick = useCallback(() => {
        dispatch<any>(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className ?? ""])}>
            {error && <div>{error}</div>}
            <Input
                placeholder={t("Enter username")}
                onChange={onChangeUserName}
                type='text'
                className={cls.input}
                value={username}
            />
            <Input
                placeholder={t("Enter password")}
                onChange={onChangePassword}
                type='text'
                className={cls.input}
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
            >
                {t("Enter")}
            </Button>
        </div>
    );
});

export default LoginForm;
