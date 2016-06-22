import React, { Component } from 'react'
import styles from './styles.scss'
import CityCard from '../CityCard'

export default class Countries extends Component {
  render() {
    const { countries } = this.props
    return (
      <div>
        <h1>Lande</h1>
        <div>Jeg har samlet en liste over alle lande hvor du kan finde gode steder at tage hen!</div>
        <div className={styles.Countries}>
          {countries.map((country, key) => {
            return (
              <div key={key} className={styles.Country}>
                <a className={styles.Header} href={`/countries/${country.file}`}>
                  {country.name}
                </a>
                <div className={styles.Cities}>
                  {country.cities && country.cities.map((city, key) => {
                    return (
                      <CityCard key={key} city={city} country={country.name}/>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
