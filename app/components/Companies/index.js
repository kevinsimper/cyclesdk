import React, { Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
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
            return (
              <tr>
                <td>{company.name}</td>
                <td><a href={company.url}>{company.url}</a></td>
                <td>
                  <RaisedButton label="Besøg" primary={true} linkButton={true} href={company.url}/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
