import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
    const { t } = useTranslation();
    const reloadPage = (): void => {
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className ?? ""])}>
            <p>{t("Somthing went wrong")}</p>
            <Button theme={ButtonTheme.BLACK} onClick={reloadPage}>
                {t("Reload page")}
            </Button>
        </div>
    );
};

export default PageError;
