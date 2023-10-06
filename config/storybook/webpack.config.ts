import path from "path";
import { type BuildPath } from "../build/types/config";
import type webpack from "webpack";
import { buildCssLoaders } from "./../../config/build/loaders/buildCssLoaders";

export default ({
    config,
}: {
    config: webpack.Configuration;
}): webpack.Configuration => {
    const paths: BuildPath = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
        outPutPath: "",
    };
    config?.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");
    config.module?.rules?.push(buildCssLoaders(true));
    return config;
};
