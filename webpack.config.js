const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
//@ts-ignore
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  entry: ["@babel/polyfill", "./Game/Main.js"],
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      title: "Sideshooter",
      template: path.resolve(__dirname, "assets/template.html")
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      Engine: path.resolve(__dirname, "./Engine/"),
      Game: path.resolve(__dirname, "./Game/")
    }
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-modules-commonjs"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 8080
  }
};
