import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import HelloWorld from './containers/HelloWorld'
import Countries from './containers/Countries'
import City from './containers/City'
import About from './components/About'
import Company from './containers/Company'
import Country from './containers/Country'
import Tours from './containers/Tours'
import Companies from './containers/Companies'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={HelloWorld}/>
    <Route path='about' component={About}/>
    <Route path='countries' component={Countries}/>
    <Route path='countries/:country' component={Country}/>
    <Route path='countries/:country/:city' component={City}/>
    <Route path='companies' component={Companies}/>
    <Route path='companies/:company' component={Company}/>
    <Route path='tours' component={Tours}/>
  </Route>
)
