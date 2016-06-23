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
    <Route path='om-cycles' component={About}/>
    <Route path='cykelrejse-lande' component={Countries}/>
    <Route path='cykelrejser/:country' component={Country}/>
    <Route path='cykelrejser/:country/:city' component={City}/>
    <Route path='cykelrejse-bureauer' component={Companies}/>
    <Route path='cykelrejse-bureau/:company' component={Company}/>
    <Route path='cykelrejser' component={Tours}/>
  </Route>
)
