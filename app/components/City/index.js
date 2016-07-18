import React, { Component } from 'react'
import styles from './style.scss'
import Newsletter from '../Newsletter'

export default class City extends Component {
  render() {
    const { content, city } = this.props
    return (
      <div>
        <div className={styles.Header}>
          <img src={`/images/${city.file}/header.jpg`}/>
        </div>
        <div className={styles.Grid}>
          <div className={styles.Content} dangerouslySetInnerHTML={{__html: content}} />
          <div className={styles.Map}>
            <iframe
              height='100%'
              width='100%'
              frameBorder='0'
              src={`https://www.google.com/maps/embed/v1/search?q=${city.name}&key=AIzaSyCiifGnWvTE4uW7FLPTD78n91Tm6VV80FA`}
              allowFullScreen>
            </iframe>
          </div>
        </div>
        <Newsletter/>
      </div>
    )
  }
}
