const path = require('path')
const webpackMerge = require('webpack-merge').merge
const TerserJSPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.config.base')

/** @type {import('webpack').Configuration} */
const config = webpackMerge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  entry: {
    index: './pages/index/index.tsx',
    player: './pages/player/index.tsx',
  },
  output: {
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].js',
  },
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin()],
    splitChunks: {
      cacheGroups: {
        defaultVendors: false,
        default: false,
        // TODO: split react react-dom and other from node_modules
      },
    },
  },
})

module.exports = config
