import componentRender from "shared/config/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import { fireEvent, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("counter", () => {
    test("Counter.test", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        void waitFor(() => {
            expect(screen.queryByTestId("value-title")).toHaveTextContent("10");
        });
    });
    test("increment", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        void waitFor(() => fireEvent.click(screen.getByTestId("increment")));

        void waitFor(() => {
            expect(screen.queryByTestId("value-title")).toHaveTextContent("11");
        });
    });
    test("decrement", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        void waitFor(() => fireEvent.click(screen.getByTestId("decrement")));

        void waitFor(() => {
            expect(screen.queryByTestId("value-title")).toHaveTextContent("9");
        });
    });
});
