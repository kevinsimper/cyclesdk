import express from 'express'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Layout from './components/Layout'
import renderStatic from './renderStatic'
import CountriesData from './countries.json'
import CompaniesData from './companies.json'
import Sequelize from 'sequelize'
import bodyParser from 'body-parser'
import restapi from 'sequelize-restapi'
import Helmet from 'react-helmet'
import axios from 'axios'
import cookieParser from 'cookie-parser'

let connectionString = process.env.POSTGRES || 'postgres://postgres:password@db:5432/postgres'
let database = new Sequelize(connectionString, {
  native: true
})
database.authenticate().catch(() => {
  console.log('Could not connect to database!')
})
import subscriberModel from './Models/subscriber'
import companyModel from './Models/company'
let Subscriber = database.define(subscriberModel.name, subscriberModel.columns)
let Company = database.define(companyModel.name, companyModel.columns)

let production = process.env.NODE_ENV === 'production'
if(!production) {
  database.sync().then(() => {
    console.log('done sync')
  })
}

let router = express.Router()
router.use(bodyParser.json())
router.use(cookieParser(process.env.COOKIE_SECRET))

let checkAdmin = (req, res, next) => {
  const { user_id } = req.signedCookies
  if(user_id === '10155319207723539') {
    next()
  } else {
    res.sendStatus(500)
  }
}

router.use('/api/subscriber', checkAdmin, restapi(Subscriber))
router.use('/api/company', checkAdmin, restapi(Company))
router.get('/cykelrejser/:country', (req, res) => {
  const { country } = req.params
  let countries = CountriesData.countries
  let selectedCountry = countries.find(c => {
    return c.name.toLowerCase() === country
  })
  if(!selectedCountry) {
    res.send(404)
    return false;
  }
  let content = require(`./Articles/${selectedCountry.file}/${selectedCountry.file}.md`)
  let state = {
    country: country,
    content: content,
    cities: selectedCountry.cities
  }
  output(req, res, state)
})

router.get('/cykelrejser/:country/:city', (req, res) => {
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

router.get('/cykelrejse-bureauer', (req, res) => {
  let state = {
    companies: CompaniesData.companies
  }
  output(req, res, state)
})

router.get('/cykelrejse-bureau/:company', (req, res) => {
  const { company } = req.params
  let companySelected = CompaniesData.companies.find(c => c.slug === company)
  let state = {
    company: companySelected
  }
  output(req, res, state)
})

router.get('/cykelrejser', (req, res) => {
  let tours = CompaniesData.companies.filter(c => c.tours)
  let state = {
    tours
  }
  output(req, res, state)
})

router.post('/checklogin', (req, res) => {
  let { accessToken } = req.body

  let checkToken = `https://graph.facebook.com/debug_token?input_token=${accessToken}&access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`
  axios.get(checkToken).then((response) => {
    const { is_valid, user_id, app_id } = response.data.data
    if(is_valid && app_id === '782369031899919') {
      res.cookie('user_id', user_id, { httpOnly: true, signed: true })
      res.cookie('fb_token', accessToken, { httpOnly: true, signed: true })
      res.send({
        status: 'success'
      })
    } else {
      res.sendStatus(500)
    }
  }).catch((err) => {
    console.log(err)
    res.send('Error')
  })
})

router.get('/admin', checkAdmin, (req, res) => {
  Company.findAll().then((companies) => {
    output(req, res, {
      companies2: companies
    })
  })
})

router.get('/admin/company/create', checkAdmin, (req, res) => {
  output(req, res)
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
