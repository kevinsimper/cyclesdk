import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './style.scss'

export default class Menu extends Component {
  render() {
    return (
      <div className={styles.Links}>
        <Link to={'/'}>Home</Link>
        <Link to={'/countries'}>Countries</Link>
      </div>
    )
  }
}
