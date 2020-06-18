const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    chunkFilename: 'js/[id].[chunkhash].js',
    filename: 'js/[name].[hash].js',
    // publicPath: path.resolve(__dirname, '/'),
  },
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.png|svg|ico$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 12000,
            name: '[hash].[ext]',
            outputPath: 'assets',
          },
        },
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new OfflinePlugin({
      relativePaths: true,
      externals: [
        '/index.html',
        '/192.png',
        '/512.png',
        '/sw.js',
        '/js/modules.3e518dd91d8bdcc6766c.dll.js',
      ],
      caches: 'all',
      autoUpdate: true,
      ServiceWorker: {
        events: true,
        prefetchRequest: { credentials: 'same-origin' },
      },
    }),
    new webpack.EnvironmentPlugin({ ...process.env }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/192.png'),
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, 'docs/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'js/',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
  ],
}
