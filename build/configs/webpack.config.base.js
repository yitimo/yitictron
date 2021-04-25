const path = require('path')
const webpackMerge = require('webpack-merge').merge
const HtmlWebpackPlugin = require('html-webpack-plugin')

/** @type {import('webpack').Configuration} */
const config = webpackMerge({
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
    modules: ['node_modules'],
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    hashDigestLength: 8,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'babel-loader',
        }],
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'pages/template.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: 'pages/template.html',
      filename: 'player.html',
      inject: 'body',
    }),
  ],
  devServer: {
    publicPath: '/',
    hot: true,
    disableHostCheck: true,
    quiet: false,
    host: '0.0.0.0',
    port: 3000,
    sockPort: 3000,
  },
})

module.exports = config
