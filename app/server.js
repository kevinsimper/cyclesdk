import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Layout from './components/Layout'
import Header from './components/Header'
import Content from './components/Content'
import Companies from './components/Companies'
import CompaniesData from './companies.json'
import Countries from './components/Countries'
import CountriesData from './countries.json'

let router = express.Router()

router.get('/', (req, res) => {
  let html = (
    <Layout>
      <Header/>
      <Content>
        <Companies companies={CompaniesData.companies}/>
      </Content>
    </Layout>
  )
  res.send(renderToString(html))
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
