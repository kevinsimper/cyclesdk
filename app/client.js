import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import { Router, browserHistory } from 'react-router'

let app = (
  <Router history={browserHistory}>
    {routes}
  </Router>
)

render(app, document.querySelector('#wrapper'))
