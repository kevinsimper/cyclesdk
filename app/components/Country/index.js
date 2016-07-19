import React, { Component } from 'react'
import styles from './style.scss'
import CityCard from '../CityCard'

export default class Country extends Component {
  render() {
    const { content, cities, country } = this.props
    return (
      <div>
        <div className={styles.Article} dangerouslySetInnerHTML={{__html: content}} />
        <div className={styles.Cities}>
          {cities && cities.map((city, key) => {
            return (
              <div className={styles.City}>
                <CityCard key={key} city={city} country={country}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
