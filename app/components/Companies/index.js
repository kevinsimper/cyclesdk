import React, { Component } from 'react'

export default class Companies extends Component {
  render() {
    console.log(this.props.companies)
    return (
      <table>
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
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
