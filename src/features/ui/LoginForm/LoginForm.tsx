import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface IProps {
    className?: string;
}

function LoginForm({ className }: IProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className ?? ""])}>
            <Input type='text' className={cls.input} />
            <Input type='text' className={cls.input} />
            <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
                {t("Enter")}
            </Button>
        </div>
    );
}

export default LoginForm;
