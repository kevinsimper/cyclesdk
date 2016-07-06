import React, { Component } from 'react'
import styles from './style.scss'

export default class Menu extends Component {
  render() {
    return (
      <div className={styles.Wrapper}>
        <div className={styles.Links}>
          <a href={'/'}>
            Hjem
            <span className={styles.Desc}>Gå til forsiden</span>
          </a>
          <a href={'/cykelrejser'}>
            Cykelrejser
            <span className={styles.Desc}>Oversigt over rejser</span>
          </a>
          <a href={'/cykelrejse-lande'}>
            Destinationer
            <span className={styles.Desc}>Oplev nye steder at tage hen</span>
          </a>
          <a href={'/cykelrejse-bureauer'}>
            Bureauer
            <span className={styles.Desc}>Find bureauer at rejse med</span>
          </a>
          <a href={'/om-cycles'}>
            Om cycles
            <span className={styles.Desc}>Kontakt siden her</span>
          </a>
        </div>
      </div>
    )
  }
}
