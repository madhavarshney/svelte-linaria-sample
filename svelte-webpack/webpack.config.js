const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

const linariaLoader = {
	loader: 'linaria/loader',
	options: {
		sourceMap: !prod,
		cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/.linaria-cache')
	}
};

module.exports = {
	entry: {
		bundle: ['./src/main.js']
	},
	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: [linariaLoader]
			},
			{
				test: /\.svelte$/,
				use: [
					linariaLoader,
					{
						loader: 'svelte-loader',
						options: {
							dev: !prod,
							emitCss: true,
							hotReload: true
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					/**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			}
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	devtool: prod ? false: 'source-map'
};
