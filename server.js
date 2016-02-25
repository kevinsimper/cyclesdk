"use strict"
let express = require('express')
let app = express()

app.use(function(req, res, next) {
  require('./dist/server').default(req, res, next)
})

app.use(express.static('dist'));

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
