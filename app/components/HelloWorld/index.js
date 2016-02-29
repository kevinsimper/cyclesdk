import React, { Component } from 'react'
import styles from './style.scss'

export default class HelloWorld extends Component {
  render() {
    return (
      <div className={styles.HelloWorld}>
        <h1>Hej cykelrytter!</h1>
        Her er en liste over alle de bedste danske udbydere af cykelrejser!
      </div>
    )
  }
}
