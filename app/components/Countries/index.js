import React, { Component } from 'react'
import styles from './styles.scss'

export default class Countries extends Component {
  render() {
    const { countries } = this.props
    return (
      <div>
        <h1>Lande</h1>
        <div>Jeg har samlet en liste over alle lande hvor du kan finde gode steder at tage hen!</div>
        <div className={styles.Countries}>
          {countries.map((country) => {
            return (
              <div className={styles.Country}>
                <div className={styles.Header}>
                  {country.name}
                </div>
                <div className={styles.Cities}>
                  {country.cities && country.cities.map(city => {
                    return (
                      <a className={styles.City} href={`/countries/${country.name.toLowerCase()}/${city.file.toLowerCase()}`}>
                        <div className={styles.CityImage}>
                          <img src={`/images/${city.file.toLowerCase()}/header.jpg`} />
                        </div>
                        <div className={styles.CityHeader}>
                          {city.name}
                        </div>
                      </a>
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
