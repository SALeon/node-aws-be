const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const path = require("path");

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  devtool: "source-map",
  externals: [nodeExternals()],
  target: "node",
  resolve: { extensions: [".js"] },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
};
