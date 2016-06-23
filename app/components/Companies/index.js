import React, { Component } from 'react'
import styles from './style.scss'
import CompanyCard from '../CompanyCard'
import Select from '../Select'

export default class Companies extends Component {
  constructor() {
    super()
  }
  onChangeTrustpilot(e) {
    this.props.onChangeSortingTrustpilot(e.target.value)
  }
  onChangeLevel(e) {
    this.props.onChangeSortingLevel(e.target.value)
  }
  render() {
    const { companies, sorting } = this.props
    return (
      <div>
        <div className={styles.Sorting}>
          <div>
            <h2>Sortering</h2>
          </div>
          <div className={styles.SortOption}>
            <strong>Trustpilot score</strong>
            <div>
              <Select onChange={this.onChangeTrustpilot.bind(this)} value={sorting.trustpilot}>
                <option value='1'>Vis alle</option>
                <option value='2'>Højeste</option>
                <option value='3'>Laveste</option>
              </Select>
            </div>
          </div>
          <div className={styles.SortOption}>
            <strong>Målgruppe</strong>
            <div>
              <Select onChange={this.onChangeLevel.bind(this)} value={sorting.level}>
                <option value='1'>Vis alle</option>
                <option value='2'>Nybegyndere</option>
                <option value='3'>Erfarne</option>
              </Select>
            </div>
          </div>
        </div>
        <div className={styles.Companies}>
          {companies.map((company, key) => {
            return <CompanyCard key={key} company={company}/>
          })}
        </div>
      </div>
    )
  }
}
