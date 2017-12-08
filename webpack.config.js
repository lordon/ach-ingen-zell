var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: "./jsx/main.jsx",
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'js/app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["src/jsx", "node_modules"]
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file"
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass?indentedSyntax"]
      }
    ]
  },
  // context: path.join(__dirname, 'build'),
  plugins: [
    new webpack.EnvironmentPlugin('NODE_ENV')
  ]
};
