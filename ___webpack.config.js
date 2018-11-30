const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpackConfig = {
  module: {
    rules: [
			{
	      test: /\.m?js$/,
	      exclude: /(node_modules|bower_components)/,
	      use: {
	        loader: 'babel-loader'

	      }
    	}
		]
  },
	plugins: [
			new HtmlWebPackPlugin({
			title: 'Codejobs',
			template: './src/index.html',
			filename: './index.html'
    })
  ],
	resolve: {
		extensions: ['.js', '.jsx']
  }
};

module.exports = webpackConfig;
