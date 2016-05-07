import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appStore from './reducers'


export default (req, res, cb) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const store = createStore(appStore)
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
