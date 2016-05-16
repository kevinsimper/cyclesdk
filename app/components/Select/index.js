import React, { Component } from 'react'
import styles from './style.scss'

export default class Select extends Component {
  render() {
    return (
      <select className={styles.Select} {...this.props}>
        {this.props.children}
      </select>
    )
  }
}
