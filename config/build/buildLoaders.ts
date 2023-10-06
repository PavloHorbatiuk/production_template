import type webpack from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    [
                        "i18next-extract",
                        {
                            locales: ["ua", "en"],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };
    const cssLoader = buildCssLoaders(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [svgLoader, fileLoader, typescriptLoader, babelLoader, cssLoader];
}
