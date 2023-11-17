import axios from "axios";
import { loginByUsername } from "./loginByUserName";
import { userAcitions } from "app/entities/User";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, { shallow: false });

describe("loginByUsername.test", () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test("succsess login", async () => {
    //     const userValue = { username: "123", id: "1" };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsername({ username: "123", password: "123" });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(dispatch).toHaveBeenCalledWith(
    //         userAcitions.setAuthData(userValue)
    //     );
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("fulfilled");
    //     expect(result.payload).toEqual(userValue);
    // });

    // test("error login", async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsername({ username: "123", password: "123" });
    //     const result = await action(dispatch, getState, undefined);

    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("rejected");
    //     expect(result.payload).toBe("Неправельний пароль або логін");
    // });

    test("succsess login", async () => {
        const userValue = { username: "123", id: "1" };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "123",
            password: "123",
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(
            userAcitions.setAuthData(userValue)
        );
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
    });

    test("error login", async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({
            username: "123",
            password: "123",
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toBe("Wrong login or password");
    });
});
