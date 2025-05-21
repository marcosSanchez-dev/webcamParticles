let path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    index2: "./src/index2.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index2.html",
      chunks: ["index2"],
      filename: "index2.html",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
