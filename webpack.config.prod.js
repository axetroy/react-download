const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "react-download.jsx"),
  output: {
    path: path.join(__dirname, "lib"),
    filename: "react-download.js",
    libraryTarget: "umd"
  },
  externals: {
    react: "react",
    "prop-types": "prop-types"
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "example")
  }
};
