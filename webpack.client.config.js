var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var AssetsPlugin = require('assets-webpack-plugin')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var colorFunction = require("postcss-color-function")

var production = process.env.NODE_ENV === 'production'
var publicPath = '/build/'
var path = __dirname + '/public/build/'
var jsName = (production) ? '[name]-bundle-[hash].js' : 'bundle.js'
var cssName = (production) ? '[name]-bundle-[hash].css' : '[name].css'

var entry = [
  './app/client.js'
]
var plugins = [
  new ExtractTextPlugin(cssName)
]

if(!production) {
  entry.push(
    'webpack-hot-middleware/client'
  )
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

if(production) {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
    new AssetsPlugin({
      filename: 'webpack.assets.json',
      prettyPrint: true,
      path: path
    })
  )
}

module.exports = {
  entry: entry,
  output: {
    path: path,
    publicPath: publicPath,
    filename: jsName
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          env: {
            development: {
              presets: ["react-hmre"],
              plugins: [
                ["react-transform", {
                  transforms: [{
                    transform: "react-transform-hmr",
                    imports: ["react"],
                    locals: ["module"]
                  }]
                }]
              ]
            }
          }
        }
      },
      { test:  /\.json$/, loader: 'json-loader' },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract("style",["css-loader?modules&importLoaders=1","postcss-loader"])
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(woff|eot|woff2|ttf)$/,
        loader: 'url?limit=100000'
      },
      { test: /\.md$/, loader: "html!markdown" }
    ]
  },
  plugins: plugins,
  devtool: 'source-map',
  postcss: function () {
    return [autoprefixer, colorFunction, precss]
  }
}
