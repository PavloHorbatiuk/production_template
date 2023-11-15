import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, Text } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import {
    loginAcitions,
    loginReducer,
} from "features/AuthByUserName/model/slice/loginSlice";
import { loginByUsername } from "features/AuthByUserName/model/services/loginByUserName/loginByUserName";
import { type AppThunkDispatch } from "app/providers/StoreProvider/config/store";
import { TextTheme } from "shared/ui/Text/Text";
import { getLoginUsername } from "features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginIsLoading } from "features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginError } from "features/AuthByUserName/model/selectors/getLoginError/getLoginError";
import {
    DynamicModuleLoader,
    type ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginProps {
    className?: string;
}

const initialReducers: ReducerList = {
    login: loginReducer,
};

const LoginForm = React.memo(function LoginForm({ className }: LoginProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppThunkDispatch>();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        void dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount={true}
            reducers={initialReducers}
        >
            <div className={classNames(cls.LoginForm, {}, [className ?? ""])}>
                <Text title={"Форма авторизації"} theme={TextTheme.PRIMARY} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
