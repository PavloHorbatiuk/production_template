import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = (): JSX.Element => {
    const { t } = useTranslation("main");
    return <div>{t("Main Page")}</div>;
};

export default MainPage;
