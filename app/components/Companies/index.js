import React, { Component } from 'react'
import Button from '../Button'
import styles from './style.scss'
import { sortBy } from 'lodash'

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
          var image = require('./Logos/' + company.logo)
          return (
            <div key={key} className={styles.Company}>
              <div>
                <div className={styles.Logo}><img src={image}/></div>
              </div>
              <div>
                <Button href={company.url}>Besøg</Button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
