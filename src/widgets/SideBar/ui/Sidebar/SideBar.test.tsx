import { screen } from "@testing-library/react";
import { SideBar } from "./SideBar";
import componentRender from "shared/config/tests/componentRender/componentRender";

describe("Sidebar", () => {
    test("render sidebar", () => {
        componentRender(<SideBar />);
        console.log(screen.queryByTestId("sidebar"), "screen.queryByTestId");
        expect(screen.queryByTestId("sidebar")).not.toBeInTheDocument();
    });
});
