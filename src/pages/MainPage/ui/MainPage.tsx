import { Counter } from "app/entities/Coutner";
import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = (): JSX.Element => {
    const { t } = useTranslation("sidebar");

    return (
        <div>
            {t("Main page")}
            <BugButton />
            <Counter />
        </div>
    );
};

export default MainPage;
