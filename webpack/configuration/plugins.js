const HtmlWebPackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebPackPlugin({
    title: 'Codejobs',
    template: './src/index.html',
    filename: './index.html'
  })
];

module.exports =  plugins;
