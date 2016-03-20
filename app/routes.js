import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import HelloWorld from './components/HelloWorld'
import Countries from './components/Countries'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={HelloWorld}/>
    <Route path='countries' component={Countries}/>
  </Route>
)
