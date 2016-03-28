var webpack = require('webpack');
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
      { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {presets:['react','es2015']}}
    ]
  }
};
