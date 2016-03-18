import React, { Component } from 'react'
import Header from '../Header'
import Content from '../Content'
import styles from './style.scss'

export default class Main extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header/>
        <Content>
          {this.props.children}
        </Content>
      </div>
    )
  }
}
