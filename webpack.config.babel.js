const _module = require('./webpack/configuration/module.js');
const plugins = require('./webpack/configuration/plugins.js');
const resolve = require('./webpack/configuration/resolve.js');
const optimization = require('./webpack/configuration/optimization.js');

  const HtmlWebPackPlugin = require('html-webpack-plugin');
  const webpackConfig = {
    module : _module,
  	plugins: plugins,
  	resolve : resolve,
    optimization : optimization
  };

  module.exports = webpackConfig;
