import React, { Component } from 'react'
import styles from './style.scss'

export default class City extends Component {
  render() {
    const { content, city, country } = this.props
    return (
      <div>
        <div className={styles.Header}>
          <img src={`/images/${city.file}/header.jpg`}/>
        </div>
        <div className={styles.Content} dangerouslySetInnerHTML={{__html: content}} />
        <div>Country: {country.name}</div>
        <div>City: {city.name}</div>
        <iframe
          width='100%'
          height='450'
          frameBorder='0'
          style={{margin: '20 0',border: 0}}
          src={`https://www.google.com/maps/embed/v1/search?q=${city.name}&key=AIzaSyAhTARSQYOOO7NNVIV2ckKYBUGPFK5oAYw`}
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}
