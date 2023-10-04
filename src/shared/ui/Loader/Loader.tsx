import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

interface LoaderProps {
    className?: string;
}
export const Loader = ({ className }: LoaderProps): JSX.Element => {
    return (
        <div>
            <div className={classNames("ldsRipple", {}, [className ?? ""])}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
