'use strict'

var webpack = require('webpack')
var path = require('path')
var fs = require('fs')
var nodeModules = {}

// References: Why not to bundle node_modules in Webpack?
// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
fs.readdirSync('node_modules')
  .filter(function(dir) {
    return ['.bin'].indexOf(dir) === -1
  })
  .forEach(function(module) {
    nodeModules[module] = 'commonjs ' + module
  })

var exportDefault = {
  entry: {
    app: path.join(__dirname, 'es6/app.js')
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: 'dist/js/',
    filename: 'app.output.js'
  },
  module: {
    loaders: [
      { test: path.join(__dirname, 'es6/'), exclude: 'node_modules/', loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
  ],
  devtool: 'sourcemap',
  externals: nodeModules
}

module.exports = exportDefault
