import { useTranslation } from "react-i18next";

const AboutPage = (): JSX.Element => {
    const { t } = useTranslation("sidebar");
    return <div>{t("About page")}</div>;
};

export default AboutPage;
