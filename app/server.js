import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Layout from './components/Layout'
import Header from './components/Header'

let router = express.Router()

router.get('/', (req, res) => {
  let html = (
    <Layout>
      <Header/>
    </Layout>
  )
  res.send(renderToString(html))
})

export default router
