import React, { Component } from 'react'
import styles from './style.scss'

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <h1 className={styles.Title}>Cycles - Find din næste cykelrejse</h1>
      </div>
    )
  }
}
