import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import HelloWorld from './components/HelloWorld'

let router = express.Router()

router.get('/', (req, res) => res.send(renderToString(<HelloWorld/>)))

export default router
