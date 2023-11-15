import { type FC, lazy } from "react";
import { type LoginProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginProps>>(
    async () => await import("./LoginForm")
);
