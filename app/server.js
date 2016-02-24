const express = require('express')
let app = express()
import React from 'react'
import { renderToString } from 'react-dom/server'
import HelloWorld from './components/HelloWorld'

const PORT = 9000

app.get('/', (req, res) => res.send(renderToString(<HelloWorld/>)))

app.listen(PORT, () => console.log('Listening on', PORT))
