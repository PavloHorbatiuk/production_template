import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";
import { Loader } from "shared/ui";
interface PageLoaderProps {
    className?: string;
}

function PageLoader({ className }: PageLoaderProps): JSX.Element {
    return (
        <div className={classNames(cls.PageLoader, {}, [className ?? ""])}>
            <Loader />
        </div>
    );
}

export default PageLoader;
