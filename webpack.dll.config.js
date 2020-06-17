const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    modules: ['react', 'react-dom', 'styled-components'],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].[hash].dll.js',
    library: '[name]',
  },
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
}
