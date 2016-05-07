import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { Router, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appStore from './reducers'

const initialState = window.__INITIAL_STATE__
const store = createStore(appStore, initialState)
const app = (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
)

render(app, document.querySelector('#wrapper'))
