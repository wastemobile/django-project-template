const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './pages/index.js',

	output: {
		// path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[hash].js'
	},

	module: {
		rules: [{
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader",
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true,
						// options...
					}
				}
			]
		}]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/style.[contenthash].css'
		}),
		new CleanWebpackPlugin(),
	]
};