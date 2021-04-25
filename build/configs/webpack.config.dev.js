const path = require('path')
const webpackMerge = require('webpack-merge').merge

const baseConfig = require('./webpack.config.base')

/** @type {import('webpack').Configuration} */
const config = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    index: './pages/index/index.tsx',
    player: './pages/player/index.tsx',
  },
  output: {
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].js',
  },
  plugins: [],
})

module.exports = config
