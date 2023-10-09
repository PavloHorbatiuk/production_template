import { Button, ButtonTheme } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
    test("render button", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
    test("render black style", () => {
        render(<Button theme={ButtonTheme.BLACK}>TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("black");
        screen.debug();
    });
});
