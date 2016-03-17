var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/index.js',
      'webpack/hot/dev-server'
    ]
  },
  output: {
    path: 'builds',
    filename: 'bundle.js',
    publicPath: "/builds/",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /\.js/,
        loader: 'eslint',
      }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.html/,
        loader: 'html',
      }
    ]
  },
  devServer: {
    hot: true
  }
};