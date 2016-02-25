var webpack = require('webpack')
var fs = require('fs')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

var production = process.env.NODE_ENV === 'production'
var publicPath = (production) ? '/build/' : 'http://localhost:8080/build/'

module.exports = {
  entry: './app/server.js',
  target: 'node',
  output: {
    path: __dirname + '/dist/',
    publicPath: publicPath,
    filename: 'server.js',
    library: '[name]',
    libraryTarget : 'commonjs2'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract("style",["css-loader?modules&importLoaders=1","postcss-loader"])
      },
      { test:  /\.json$/, loader: 'json-loader' },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.md$/, loader: "html!markdown" }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.(woff|eot|woff2|ttf)$/, 'node-noop'),
    new ExtractTextPlugin("styles.css")
  ],
  devtool: 'sourcemap',
  node: {
    __dirname: true,
    process: true
  },
  postcss: function () {
    return [autoprefixer, precss]
  }
}
