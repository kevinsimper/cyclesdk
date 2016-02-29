import React, { Component } from 'react'
import styles from './style.scss'

export default class Button extends Component {
  render() {
    return (
      <a className={styles.Button} href={this.props.href}>{this.props.children}</a>
    )
  }
}
