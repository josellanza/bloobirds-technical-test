const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", "./src/js/main.js"],
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
      extensions: [".js", ".json"],
      modules: [path.resolve(__dirname, './src'), 'node_modules']
  },

  module: {
      rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            include: [path.resolve(__dirname, 'src/js')],
            use: ["style-loader", "css-loader"]
           },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }]
      }]
  },
  
  plugins: [
      new HtmlWebpackPlugin({
        template: 'src/html/index.html'
      })
  ]
};
