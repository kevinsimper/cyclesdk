import React, { Component } from 'react'
import CountriesData from './countries.json'
import styles from './styles.scss'
import { Link } from 'react-router'

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
                <div className={styles.Header}>
                  {country.name}
                </div>
                <div className={styles.Cities}>
                  {country.cities && country.cities.map(city => {
                    return (
                      <div>
                        <Link to={`/countries/${country.name.toLowerCase()}/${city.name.toLowerCase()}`}>{city.name}</Link>
                      </div>
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
