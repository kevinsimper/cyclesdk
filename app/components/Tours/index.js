import React, { Component } from 'react'
import styles from './style.scss'
import Button from '../Button'

export default class Tours extends Component {
  render() {
    const { tours, countries } = this.props
    return (
      <div>
        <h1>Tours</h1>
        <div className={styles.Table}>
          <div className={styles.Header}>
            <div className={styles.Column}>Destination</div>
            <div className={styles.Column}>Firma</div>
            <div className={styles.Column}>Afrejse</div>
            <div className={styles.Column}>Hjemrejse</div>
            <div className={styles.Column}>Pris</div>
            <div className={styles.Column}>Link</div>
          </div>
          <div className={styles.Content}>
            {tours.map((company) => {
              if(company.tours && company.tours.length > 0) {
                return company.tours.map((tour) => {
                  let country = countries.find((country) => {
                    return country.cities.find(city => city.file === tour.place)
                  })
                  let city = false
                  if(country) {
                    city = country.cities.find(city => city.file === tour.place)
                  }
                  return (
                    <div className={styles.Trip}>
                      <div className={styles.Column}>
                        {(city.name) ? 
                          <a href={`/cykelrejser/${country.file}/${city.file}`}>{city.name}</a>
                          : tour.place
                        }
                      </div>
                      <div className={styles.Column}>{company.name}</div>
                      <div className={styles.Column}>{tour.start && tour.start}</div>
                      <div className={styles.Column}>{tour.end && tour.end}</div>
                      <div className={styles.Column}>{tour.price && tour.price}</div>
                      <div className={styles.Column}>
                        <Button href={tour.url}>Se rejse</Button>
                      </div>
                    </div>
                  )
                })
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}
