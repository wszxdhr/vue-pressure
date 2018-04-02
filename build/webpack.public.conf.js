const config = require('../config/index')
let merge = require('webpack-merge')
const webpack = require('webpack')
let baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  entry: './src/directive/pressure.js',
  output: {
    path: config.public.assetsRoot,
    filename: 'pressure.js',
    publicPath: config.public.assetsPublicPath,
    library: 'vue-pressure',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
})