import React, { Component } from 'react'
import Header from '../Header'
import Content from '../Content'
import styles from './style.scss'
import Helmet from 'react-helmet'
import Footer from '../Footer'
import cx from 'classnames'

export default class Main extends Component {
  render() {
    let ContentClasses = cx({
      [styles.Content]: true,
      [styles.Admin]: this.props.routes[1].path === 'admin'
    })
    return (
      <div className={styles.wrapper}>
        <Helmet
          defaultTitle={'Alt omkring cykelrejser - Cycles.dk'}
        />
        <Header/>
        <div className={ContentClasses}>
          <Content>
          {this.props.children}
          </Content>
          <Footer/>
        </div>
      </div>
    )
  }
}
