import React, { Component } from 'react'
import Button from '../Button'
import styles from './style.scss'

export default class Companies extends Component {
  render() {
    return (
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {this.props.companies.map(company => {
            var image = require('./Logos/' + company.logo)
            return (
              <tr>
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
