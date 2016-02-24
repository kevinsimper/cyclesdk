"use strict"
let express = require('express')
let app = express()

app.use(function(req, res, next) {
  require('./dist/server').default(req, res, next)
})

const PORT = 9000
app.listen(PORT, () => console.log('Listening on', PORT))
