import React, { Component } from 'react'
import styles from './style.scss'
import Button from '../Button'

export default class Company extends Component {
  render() {
    const { company } = this.props
    const image = require('../Companies/Logos/' + company.logo)
    return (
      <div className={styles.Company}>
        <div className={styles.LogoContainer}>
          <div className={styles.Logo}>
            <img src={image}/>
          </div>
        </div>
        <div className={styles.Info}>
          <div>Navn: {company.name}</div>
          <div>Målgruppe: {(company.level) ? company.level : 'Nybegyndere'}</div>
          <div>Trustpilot: {(company.trustpilot) ? company.trustpilot + ' / 10' : '?'}</div>
        </div>
        <div>
          <Button href={company.url}>Besøg</Button>
          <Button href={`/cykelrejse-bureau/${company.slug}`}>Vis mere</Button>
        </div>
      </div>
    )
  }
}
