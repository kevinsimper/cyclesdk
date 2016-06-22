import React, { Component } from 'react'
import styles from './style.scss'
import CityCard from '../CityCard'
import Helmet from 'react-helmet'

export default class Country extends Component {
  render() {
    const { content, cities, country } = this.props
    return (
      <div>
        <Helmet title={`Cykelrejser ${country} - Alt du skal vide!`}/>
        <div dangerouslySetInnerHTML={{__html: content}} />
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
