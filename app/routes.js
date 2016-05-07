import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import HelloWorld from './containers/HelloWorld'
import Countries from './components/Countries'
import Country from './components/Country'
import City from './components/City'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={HelloWorld}/>
    <Route path='countries' component={Countries}/>
    <Route path='countries/:country' component={Country}/>
    <Route path='countries/:country/:city' component={City}/>
  </Route>
)
