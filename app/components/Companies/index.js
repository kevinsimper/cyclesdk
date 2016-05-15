import React, { Component } from 'react'
import styles from './style.scss'
import { sortBy } from 'lodash'
import Company from '../Company'

export default class Companies extends Component {
  constructor() {
    super()

    this.state = {
      sort: 'name',
      inverse: false
    }
  }
  getCompanies() {
    var sorted = sortBy(this.props.companies, 'name')
    if(this.state.inverse) {
      sorted.reverse()
    }
    return sorted
  }
  sortBy(item) {
    this.setState({
      sort: item,
      inverse: !this.state.inverse
    })
  }
  render() {
    return (
      <div className={styles.Companies}>
        {this.getCompanies().map((company, key) => {
          return <Company key={key} company={company}/>
        })}
      </div>
    )
  }
}
