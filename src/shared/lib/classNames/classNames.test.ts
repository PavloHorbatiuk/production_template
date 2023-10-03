import { classNames } from "./classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });
    test("with additional param", () => {
        const expected = "someClass class1 class2";
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
            expected
        );
    });
    test("with mods", () => {
        const expected = "someClass class1 class2 scrollAble hovered";
        expect(
            classNames("someClass", { scrollAble: true, hovered: true }, [
                "class1",
                "class2",
            ])
        ).toBe(expected);
    });
    test("with false", () => {
        const expected = "someClass class1 class2 hovered";
        expect(
            classNames("someClass", { scrollAble: false, hovered: true }, [
                "class1",
                "class2",
            ])
        ).toBe(expected);
    });
    test("with undefined", () => {
        const expected = "someClass class1 class2";
        expect(
            classNames("someClass", { scrollAble: false, hovered: undefined }, [
                "class1",
                "class2",
            ])
        ).toBe(expected);
    });
});
