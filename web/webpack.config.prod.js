/* eslint-disable */
const path = require('path')
const webpack = require('webpack')

const DIRECTORY = path.join(__dirname)

module.exports = {
  //devtool : 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  output: {
    filename: './dist/bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_HOST': JSON.stringify('http://' + require('my-ip')() + ':3001/api')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web-extended',
      'native-base': 'native-base-web',
      //Icon.TabBarItem
      'react-native-vector-icons/Ionicons': 'native-base-web/lib/Components/Widgets/Icon',
      'react/lib/ReactNativePropRegistry': 'react-native-web-extended/dist/modules/ReactNativePropRegistry'
    }
  }
}
