const webpack = require('webpack')
const webpackConfig = require('./webpack.public.conf')

webpack(webpackConfig, function (err, status) {
  if (err) {
    console.log('编译出错')
  }
})
