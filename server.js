"use strict"
let express = require('express')
let webpack = require('webpack')
let app = express()

let config = require('./webpack.client.config')
let compiler = webpack(config)

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

app.use(function(req, res, next) {
  require('./dist/server').default(req, res, next)
})

app.use(express.static('dist', { maxAge: 86400000 }));
app.use(express.static('public', { maxAge: 86400000 }));

var chokidar = require('chokidar')
var watcher = chokidar.watch('./dist')

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /dist/ module cache from server")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]dist[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

const PORT = 9000
app.listen(PORT, () => console.log('Listening on', PORT))
