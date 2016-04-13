import React, { Component } from 'react'
import styles from './style.scss'
import Menu from '../Menu'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className={styles.Header}>
          <h1 className={styles.Title}>Cycles.dk</h1>
          <div className={styles.Spacer}>-</div>
          <h2 className={styles.SubTitle}>Find din næste cykelrejse</h2>
        </div>
        <Menu/>
      </div>
    )
  }
}
