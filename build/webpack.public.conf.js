const UglifyPlugin = require('uglifyjs-webpack-plugin')
const config = require('../config/index')
let merge = require('webpack-merge')
let utils = require('./utils')
const webpack = require('webpack')
let baseWebpackConfig = require('./webpack.base.conf')
let env = config.public.env

module.exports = merge(baseWebpackConfig, {
  entry: './src/directive/pressure.js',
  output: {
    path: config.public.assetsRoot,
    filename: 'pressure.js',
    publicPath: config.public.assetsPublicPath,
    library: 'vue-pressure',
    libraryTarget: 'umd'
  },
  externals: [
    'pressure'
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
})