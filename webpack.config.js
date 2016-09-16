var
	HtmlWebpackPlugin 			= require("html-webpack-plugin"),
	HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
		template: __dirname + "/app/index.html",
		filename: "index.html",
		inject: "body"
	}),
	DashboardPlugin = require("webpack-dashboard/plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry : "./app/index.js",

	output : {
		path 		: __dirname + "/bundle",
		filename : "bundle.js"
	},

	plugins : [
		new DashboardPlugin(),
		HTMLWebpackPluginConfig,
		new ExtractTextPlugin("styles.css",{allChunks : true})
	],

	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : "babel-loader"
			},

			{
				test : /\.scss$/,
				// loaders : ["css", "style"]
				loader: ExtractTextPlugin.extract(
					[
						"css",
						"sass"
					])
			}
		]
	}
}

/*parrameter for loading css-module
?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]*/
