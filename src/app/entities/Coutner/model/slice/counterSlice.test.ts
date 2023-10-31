import { counterAcitions, counterReducer } from "./counterSlice";
import { type CounterSchema } from "../types/counterSchema";

describe("counterSlice.test", () => {
    test("decrement value", () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterAcitions.decrement())).toEqual({
            value: 9,
        });
    });
    test("increment value", () => {
        const state: CounterSchema = { value: 10 };

        expect(counterReducer(state, counterAcitions.increment())).toEqual({
            value: 11,
        });
    });
    test("", () => {
        expect(counterReducer(undefined, counterAcitions.increment())).toEqual({
            value: 1,
        });
    });
});
