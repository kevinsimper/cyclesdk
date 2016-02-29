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
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Logo</th>
            <th onClick={this.sortBy.bind(this, 'name')}>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {this.getCompanies().map((company, key) => {
            var image = require('./Logos/' + company.logo)
            return (
              <tr key={key}>
                <td>
                  <div className={styles.Logo}><img src={image}/></div>
                </td>
                <td>{company.name}</td>
                <td><a href={company.url}>{company.url}</a></td>
                <td>
                  <Button href={company.url}>Besøg</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
