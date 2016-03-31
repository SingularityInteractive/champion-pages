var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

const PATHS = {
  app: __dirname + '/app'
}

module.exports = {
  context: PATHS.app,
  entry: {
    app: './app.js'
  },
  output: {
    path: PATHS.app,
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}},
      { test: /\.json$/, loader: 'json' },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
