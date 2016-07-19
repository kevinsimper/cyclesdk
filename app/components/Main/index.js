import React, { Component } from 'react'
import Header from '../Header'
import Content from '../Content'
import styles from './style.scss'
import Helmet from 'react-helmet'
import Footer from '../Footer'

export default class Main extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Helmet
          defaultTitle={'Alt omkring cykelrejser - Cycles.dk'}
        />
        <Header/>
        <div className={styles.Content}>
          <Content>
          {this.props.children}
          </Content>
          <Footer/>
        </div>
      </div>
    )
  }
}
