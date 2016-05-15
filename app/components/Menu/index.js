import React, { Component } from 'react'
import styles from './style.scss'

export default class Menu extends Component {
  render() {
    return (
      <div className={styles.Links}>
        <a href={'/'}>
          Hjem
          <span className={styles.Desc}>Gå til forsiden</span>
        </a>
        <a href={'/countries'}>
          Destinationer
          <span className={styles.Desc}>Oplev nye steder at tage hen</span>
        </a>
      </div>
    )
  }
}
