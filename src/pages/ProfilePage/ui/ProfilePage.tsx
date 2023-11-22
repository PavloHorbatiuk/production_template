import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import {
    DynamicModuleLoader,
    type ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducerList = { profile: profileReducer };

const ProfilePage = () => {
    const { t } = useTranslation("sidebar");
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            {t("Profile page")}
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
