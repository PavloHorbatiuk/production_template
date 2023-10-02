import path from "path";
import type webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { type BuildEnv, type BuildPath } from "./config/build/types/config";

export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "./dist"),
        html: path.resolve(__dirname, "public", "index.html"),
        outPutPath: path.resolve(__dirname, "./dist"),
        src: path.resolve(__dirname, "src"),
    };
    const mode = env.mode || "development";
    const PORT = env.port || 3000;

    const isDev = mode === "development";

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
