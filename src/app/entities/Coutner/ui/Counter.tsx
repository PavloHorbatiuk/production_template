import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { counterAcitions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getValues/getCounterValue";
import { useTranslation } from "react-i18next";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterAcitions.increment());
    };
    const decrement = () => {
        dispatch(counterAcitions.decrement());
    };
    return (
        <div>
            <h1 data-testid='value-title'>values = {counterValue}</h1>
            <Button
                data-testid='decrement'
                onClick={decrement}
                theme={ButtonTheme.OUTLINE}
            >
                {t("Decrement")}
            </Button>
            <Button
                data-testid='Increment'
                onClick={increment}
                theme={ButtonTheme.OUTLINE}
            >
                {t("Increment")}
            </Button>
        </div>
    );
};

export default Counter;
