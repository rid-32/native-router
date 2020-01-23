const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public/index.html'),
  }),
];

const htmlLoader = {
  test: /\.html$/i,
  use: {
    loader: 'html-loader',
    options: {
      attributes: true,
      minimize: true,
    },
  },
};

const jsxLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const extensions = ['.js', '.jsx', '.json'];

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  entry: [
    path.resolve(__dirname, 'node_modules/core-js/stable/index.js'),
    path.resolve(__dirname, 'node_modules/core-js/modules/es.promise.js'),
    path.resolve(
      __dirname,
      'node_modules/core-js/modules/es.array.iterator.js',
    ),
    path.resolve(__dirname, 'node_modules/regenerator-runtime/runtime.js'),
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    extensions,
  },
  module: {
    rules: [jsxLoader, htmlLoader],
  },
  plugins,
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    compress: true,
  },
};
