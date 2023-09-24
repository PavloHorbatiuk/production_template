import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { paths, mode, isDev } = options;
	return {
		mode: mode,
		entry: paths.entry,
		devtool: isDev ? 'inline-source-map' : undefined,
		output: {
			path: paths.outPutPath,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
