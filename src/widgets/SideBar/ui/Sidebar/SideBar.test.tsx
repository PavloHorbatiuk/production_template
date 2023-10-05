import { render, screen } from "@testing-library/react";
import { SideBar } from "./SideBar";

describe("Sidebar", () => {
    test("render sidebar", () => {
        render(<SideBar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
});
