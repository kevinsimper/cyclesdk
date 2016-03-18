import React, { Component } from 'react'
import styles from './style.scss'
import Companies from '../Companies'
import CompaniesData from '../../companies.json'

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div className={styles.HelloWorld}>
        <h1>Hej cykelrytter!</h1>
        Her er en liste over alle de bedste danske udbydere af cykelrejser!
        </div>
        <Companies companies={CompaniesData.companies}/>
      </div>
    )
  }
}
