var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");
 
var config = {
  entry: "./dev/index.js",
  output: {
    path: "/",
    filename: "myCode.js"
  },
  module: {
      loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel-loader',

              query: {
                  presets: ['es2015', 'react'],
                  plugins: []
              }
          }
      ]

}
};
 
module.exports = config;
