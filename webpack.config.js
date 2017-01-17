const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Path = require("path");
const FileSystem = require("fs");

const extractCSS = new ExtractTextPlugin({
  filename: "app.css",
  allChunks: true
});

module.exports = env => {
  return {
    context: __dirname,
    entry: './src/app/index.ts',
    output: {
      filename: "[name].js?[hash]",
      chunkFilename: "[name].js?[hash]",
      path: env.prod ? __dirname + '/dist' : __dirname
    },
    plugins: [
      new webpack.DefinePlugin({
        ON_PROD: env.prod
      }),
      extractCSS
    ],
    devtool: env.prod ? 'cheap-module-source-map' : 'eval',
    bail: env.prod,
    resolve: {
      extensions: ['.ts', '.js']
    },
    performance: { hints: false },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ng-annotate-loader!babel-loader!ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'ng-annotate-loader!babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.html$/,
          loader: 'raw-loader'
        },
        {
          test: /\.css$/,
          loader: extractCSS.extract("css-loader?minimize")
        },
        {
          test: /\.(gif|jpeg|jpg|png|svg|ico|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader?name=[path][name].[ext]?[hash]"
        }
      ]
    },
    devServer: {
      proxy: {
        '/api/**': {
          target: 'http://localhost:8081',
          secure: false
        }
      }
    }
  }
};