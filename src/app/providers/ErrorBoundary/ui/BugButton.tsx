import { useEffect, useState } from "react";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";

// component for testig ErrorBoundary
export const BugButton = (): JSX.Element => {
    const [error, setError] = useState(false);

    const onTrhow = (): void => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <div>
            <Button theme={ButtonTheme.BLACK} onClick={onTrhow}>
                thow error
            </Button>
        </div>
    );
};
