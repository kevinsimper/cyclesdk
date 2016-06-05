import React, { Component } from 'react'
import styles from './style.scss'
import Menu from '../Menu'
import logo from './logo.svg'

export default class Header extends Component {
  render() {
    return (
      <div>
        <a href={'/'} className={styles.Header}>
          <div className={styles.LogoContainer}>
            <img src={logo} className={styles.Logo} />
            <h1 className={styles.Title}>Cycles.dk</h1>
          </div>
          <div className={styles.Spacer}>-</div>
          <h2 className={styles.SubTitle}>Find din næste cykelrejse</h2>
        </a>
        <Menu/>
      </div>
    )
  }
}
