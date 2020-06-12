const path = require('path')
const MiniCssExtractor = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.png|svg|ico$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
          },
        },
      },
    ],
  },
}
