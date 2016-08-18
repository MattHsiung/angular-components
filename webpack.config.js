var path = require('path');
var HMRP = require('webpack/lib/HotModuleReplacementPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'cheap-module-eval-source-map',
	context: path.join(__dirname, 'client'),
	entry: {
		app: './app.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.html$/,
				loader: 'raw',
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.sass$/,
				loaders: ['style', 'css', 'sass'],
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				include: path.join(__dirname, 'client')
			},
			{
				test: /\.gif$/,
				loaders: ['file'],
				include: path.join(__dirname, 'client')
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
	  hot: true,
		historyApiFallback: true,
		stats: 'errors-only'
	},
	plugins: [
	  new HMRP(),
	  new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
      inject: 'body',
      hash: true
    }),
	]
};