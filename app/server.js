import express from 'express'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Layout from './components/Layout'
import renderStatic from './renderStatic'
import CountriesData from './countries.json'
import Sequelize from 'sequelize'
import bodyParser from 'body-parser'
import restapi from 'sequelize-restapi'
import Helmet from 'react-helmet'

let connectionString = process.env.POSTGRES || 'postgres://localhost:5432/cyclesdk'
let database = new Sequelize(connectionString, {
  native: true
})
database.authenticate().catch(() => {
  console.log('Could not connect to database!')
})
import subscriberModel from './Models/subscriber'
let Subscriber = database.define(subscriberModel.name, subscriberModel.columns)

let production = process.env.NODE_ENV === 'production'
if(!production) {
  database.sync().then(() => {
    console.log('done sync')
  })
}

let router = express.Router()
router.use(bodyParser.json())

router.use('/api/subscriber', restapi(Subscriber))
router.get('/countries/:country/:city', (req, res) => {
  const { country, city } = req.params
  let countries = CountriesData.countries
  let selectedCountry = countries.find(c => {
    return c.name.toLowerCase() === country
  })
  if(!selectedCountry) {
    res.send(404)
    return false;
  }
  let selectedCity = selectedCountry.cities.find(c => {
    return c.file.toLowerCase() === city
  })
  if(!selectedCity) {
    res.send(404)
    return false;
  }
  let content = require(`./Articles/${selectedCity.file}/${selectedCity.file}.md`)
  let state = {
    content: content,
    country: selectedCountry,
    city: selectedCity
  }
  output(req, res, state)
})

router.get('/companies/:company', (req, res) => {
  const { company } = req.params
  let state = {
    company: company
  }
  output(req, res, state) 
})

router.get('*', (req, res) => {
  output(req, res, {})
})

let defaultState = {
  sorting: {
    trustpilot: 1,
    level: 1
  }
}
function output(req, res, state) {
  state = Object.assign({}, defaultState, state)
  renderStatic(req, res, state, (output, initialState) => {
    let head = Helmet.rewind();
    let html = (
      <Layout assets={global.assets} title={head.title}>
        <div dangerouslySetInnerHTML={{__html: output}} />
        <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}`}}>
        </script>
      </Layout>
    )
    let fullOutput = renderToStaticMarkup(html)
    res.send(fullOutput)
  })
}

export default router
