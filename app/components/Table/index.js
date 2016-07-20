import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    const { data } = this.props

    let columns = Object.keys(data[0])
    return (
      <table>
        <thead>
          <tr>
            {columns.map((col) => <th>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                {columns.map((col) => <td>{item[col]}</td>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
