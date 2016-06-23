import React, { Component } from 'react'
import styles from './style.scss'
import bg from './minbg.jpg'

export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div className={styles.HelloWorld} style={{backgroundImage: `url(${bg})`}}>
          <div>
            <h1>
              <span>Hej cykelrytter! Hvor vil du hen?</span>
            </h1>
          </div>
        </div>
      </div>
    )
  }
}
