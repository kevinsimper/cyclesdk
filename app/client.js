import React from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'
import Header from './components/Header'
import Content from './components/Content'
import Companies from './components/Companies'
import CompaniesData from './companies.json'
import Countries from './components/Countries'
import CountriesData from './countries.json'
import HelloWorld from './components/HelloWorld'


let html = (
  <div>
    <Header/>
    <HelloWorld/>
    <Content>
      <Companies companies={CompaniesData.companies}/>
    </Content>
  </div>
)

render(html, document.querySelector('#wrapper'))
