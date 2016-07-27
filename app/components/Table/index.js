import React, { Component } from 'react'
import styles from './style.scss'

export default class Table extends Component {
  render() {
    const { data } = this.props

    if(data.length === 0) {
      return (
        <div>No data to show in table.</div>
      )
    }

    let columns = Object.keys(data[0])
    return (
      <table className={styles.Table}>
        <thead>
          <tr>
            {columns.map((col) => <th>{col}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                {columns.map((col) => {
                  let string = item[col] == null ? '' : item[col].toString()
                  return <td>{string}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
