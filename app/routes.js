import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import HelloWorld from './containers/HelloWorld'
import Countries from './containers/Countries'
import City from './containers/City'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={HelloWorld}/>
    <Route path='countries' component={Countries}/>
    <Route path='countries/:country/:city' component={City}/>
  </Route>
)
