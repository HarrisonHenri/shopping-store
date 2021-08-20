const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/reduxStore",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3005,
  },
  output: {
    publicPath: 'http://localhost:3005/',
  },

  resolve: {
    extensions: [".tsx", ".ts", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "store",
      library: { type: "var", name: "store" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        './reduxStore': "./src/reduxStore",
      },
      shared: [],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],
};
