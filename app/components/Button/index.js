import React, { Component } from 'react'
import styles from './style.scss'

export default class Button extends Component {
  render() {
    return (
      <a className={styles.Button} {...this.props}>{this.props.children}</a>
    )
  }
}
