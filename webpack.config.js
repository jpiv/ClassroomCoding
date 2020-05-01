
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			// views: path.resolve(__dirname, './frontend/views/'),
			// core: path.resolve(__dirname, './frontend/core/'),
			// assets: path.resolve(__dirname, './frontend/assets/'),
			// store: path.resolve(__dirname, './frontend/store/'),
		},
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			// {
			// 	test: /\.*css$/,
			// 	exclude: [/node_modules/],
			// 	use: [
			// 		'style-loader',
			// 		{
			// 			loader: 'css-loader',
			// 			options: {
			// 				modules: true,
			// 				camelCase: true,
			// 			}	
			// 		},
			// 		'sass-loader',
			// 	],
			// },
			{
				test: /\.js(x|$)/,
				exclude: [/node_modules/],
				loader: 'babel-loader',
			},
			{
				test: /\.png$/,
				exclude: [/node_modules/],
				loader: 'url-loader',
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'Classroom Coding',
		inject: 'head',
		template: path.resolve(__dirname, 'index.ejs'),
	})],
};