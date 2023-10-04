import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button component", () => {
    test("render button", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });
});
