const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: {
    server: './src/app.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  mode: process.env.NODE_ENV,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.svg$/i,
        use: 'raw-loader',
      },
    ]
  }
}
