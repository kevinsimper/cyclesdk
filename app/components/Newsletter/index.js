import React, { Component } from 'react'
import styles from './style.scss'

export default class Newsletter extends Component {
  render() {
    return (
      <div className={styles.Form}>
        <h1>Tilmeld nyhedsbrev og få gode tilbud på cykelrejser!</h1>
        <div>
          <label>Name</label>
          <input type="text"/>
        </div>
        <div>
          <label>Email</label>
          <input type="text"/>
        </div>
        <div>
          <button>Tilmeld</button>
        </div>
      </div>
    )
  }
}
