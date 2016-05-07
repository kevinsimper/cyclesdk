import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appStore from './reducers'

import companies from './companies.json'
import countries from './countries.json'


export default (req, res, state, cb) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      let newState = Object.assign({}, {
        countries: countries.countries,
        companies: companies.companies
      }, state)
      const store = createStore(appStore, newState)
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )
      const initialState = store.getState()
      cb(html, initialState)
    } else {
      res.status(404).send('Not found')
    }
  })
}
