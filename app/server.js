import express from 'express'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Layout from './components/Layout'
import Header from './components/Header'
import Content from './components/Content'
import Companies from './components/Companies'
import CompaniesData from './companies.json'
import Countries from './components/Countries'
import CountriesData from './countries.json'
import HelloWorld from './components/HelloWorld'

let router = express.Router()
let production = process.env.NODE_ENV === 'production'
let defaultAssets = {
  main: {
    js: '/build/bundle.js',
    css: '/build/main.css'
  }
}
let assets = (production) ? require(__dirname + '/../public/build/webpack.assets.json') : defaultAssets

router.get('/', (req, res) => {
  let html = (
    <Layout assets={assets}>
      <div>
        <Header/>
        <HelloWorld/>
        <Content>
          <Companies companies={CompaniesData.companies}/>
        </Content>
      </div>
    </Layout>
  )
  let output = renderToStaticMarkup(html)
  res.send(output)
})

router.get('/countries', (req, res) => {
  let html = (
    <Layout>
      <Header/>
      <Content>
        <Countries countries={CountriesData.countries}/>
      </Content>
    </Layout>
  )
  res.send(renderToString(html))
})

export default router
