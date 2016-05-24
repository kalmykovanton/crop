// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  context: `${__dirname}/src`,
  entry: './app',
  output: {
    path: `${__dirname}/build`,
    // publicPath: '/build',
    filename: 'js/app-[hash].js',
  },
  // resolve: {
  //   modulesDirectories: ['node_modules'],
  //   extensions: ['', '.js', '.css'],
  // },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate' },
      {
        test: /\.js$/,
        include: `${__dirname}/src`,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-es2015-modules-commonjs', 'transform-class-properties'],
        },
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(ttf|eot|svg)(.*)?$/, loader: 'file?name=fonts/[name].[ext]' },
      { test: /\.(png|jpg|jpeg|gif|woff|woff2)$/, loader: 'url?limit=10000&name=img/[name].[ext]' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'html' },
    ],
    // noParse: /\/node_modules\/angular\/angular/,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractTextPlugin('css/[name]-[hash].css'),
    new CleanWebpackPlugin(['build'], {}),
    new WebpackNotifierPlugin(),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    // }),
  ],

  devServer: {
    contentBase: './dist',
    // historyApiFallback: true,
    colors: true,
    hot: true,
    port: 8080,
  },
};
