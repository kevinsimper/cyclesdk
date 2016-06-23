import React, { Component } from 'react'
import styles from './style.scss'

export default class CityCard extends Component {
  render() {
    return (
      <a className={styles.City} href={`/cykelrejser/${this.props.country.toLowerCase()}/${this.props.city.file.toLowerCase()}`}>
        <div className={styles.CityImage}>
          <img src={`/images/${this.props.city.file.toLowerCase()}/header.jpg`} />
        </div>
        <div className={styles.CityHeader}>
          {this.props.city.name}
        </div>
      </a>
    )
  }
}
