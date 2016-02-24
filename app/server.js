import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import HelloWorld from './components/HelloWorld'
import Layout from './components/Layout'

let router = express.Router()

router.get('/', (req, res) => {
  let html = (
    <Layout>
      <HelloWorld/>
    </Layout>
  )
  res.send(renderToString(html))
})

export default router
