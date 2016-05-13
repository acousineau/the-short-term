const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    PATHS.src
  ],
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('core.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
      },
      {
        test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src
      }
    ]
  }
}
