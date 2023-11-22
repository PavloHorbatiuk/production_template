import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "../assets/home.svg";
import MainIcon from "../assets/main.svg";
import ProfileIcon from "../assets/profile-20-20.svg";

export interface SideBarItemType {
    path?: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const SideBarItemsList: SideBarItemType[] = [
    { path: RoutePath.main, icon: MainIcon, text: "Main page" },
    { path: RoutePath.about, icon: AboutIcon, text: "About page" },
    { path: RoutePath.profile, icon: ProfileIcon, text: "Profile" },
];
