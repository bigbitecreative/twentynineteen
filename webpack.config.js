const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin-with-rtl");
const WebpackRTLPlugin = require("webpack-rtl-plugin");

module.exports = {
    entry: './index.js',
    plugins: [
       // Adding our UglifyJS plugin
      new UglifyJSPlugin(),
			// Extract CSS to own bundle, filenmae relative to output.path.
			new MiniCssExtractPlugin({
				filename: 'style.css', // or ../styles/[name].css for dynamic name
				chunkFilename: '[id].css',
				rtlEnabled: true,
      	rtlGlobalVar: 'pageDir',
			}),
			new WebpackRTLPlugin(),
			new webpack.LoaderOptionsPlugin({
				options: {
					postcss: [
						autoprefixer()
					]
				}
			})
    ],
    output: {
        path: path.resolve(__dirname, '')
    },
    module: {
        rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
							}
						},
						{
							loader: 'postcss-loader',
							options: {
							}
						},
						{
							loader: 'resolve-url-loader',
							options: {
								debug: true,
								sourceMap: true,
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							}
						}
					]
				},
      ]
    }
};
