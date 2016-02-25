import React, { Component } from 'react'
import styles from './style.scss'

console.log(styles)

export default class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Cycles.dk</title>
          <link rel='stylesheet' href='/styles.css'/>
        </head>
        <body>
          <div className={styles.wrapper}>
            {this.props.children}
          </div>
        </body>
      </html>
    )
  }
}
