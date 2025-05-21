const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    index2: "./src/index2.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Agrega aquí otros loaders si es necesario
    ],
  },
  plugins: [
    // Agrega plugins como HtmlWebpackPlugin si es necesario
  ],
};
