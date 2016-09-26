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
import Login from './containers/Login'
import Admin from './containers/Admin'
import AdminCompanyCreate from './containers/AdminCompanyCreate'

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
    <Route path='login' component={Login}/>
    <Route path='admin' component={Admin}/>
    <Route path='admin/company/create' component={AdminCompanyCreate}/>
  </Route>
)
