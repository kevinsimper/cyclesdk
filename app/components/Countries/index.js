import React, { Component } from 'react'
import CountriesData from '../../countries.json'
import styles from './styles.scss'

export default class Countries extends Component {
  render() {
    return (
      <div>
        <h1>Lande</h1>
        <div>Jeg har samlet en liste over alle lande hvor du kan finde gode steder at tage hen!</div>
        <div className={styles.Countries}>
          {CountriesData.countries.map((country) => {
            return (
              <div className={styles.Country}>
                {country.name}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
