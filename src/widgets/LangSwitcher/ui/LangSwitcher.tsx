import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ThemeButton } from "shared/ui/Button/Button";
import LanguageIcon from "../assets/icons/language_icon.svg";

interface LangSwitcherProps {
    className?: string;
    isIconShow?: boolean;
}

export const LangSwitcher = ({
    className,
    isIconShow,
}: LangSwitcherProps): JSX.Element => {
    const { t, i18n } = useTranslation();
    const toggle = async (): Promise<void> => {
        await i18n.changeLanguage(i18n.language === "ua" ? "en" : "ua");
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className ?? ""])}>
            {!isIconShow && <LanguageIcon />}
            <Button theme={ThemeButton.CLEAR} onClick={toggle}>
                {t("Language")}
            </Button>
        </div>
    );
};
