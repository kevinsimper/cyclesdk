import React, { Component } from 'react'
import styles from './style.scss'

export default class Content extends Component {
  render() {
    return (
      <div className={styles.Content}>
        {this.props.children}
      </div>
    )
  }
}
