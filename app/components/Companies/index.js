import React, { Component } from 'react'
import styles from './style.scss'
import Company from '../Company'
import Select from '../Select'

export default class Companies extends Component {
  constructor() {
    super()
  }
  onChangeTrustpilot(e) {
    this.props.onChangeSortingTrustpilot(e.target.value)
  }
  render() {
    const { companies, sorting } = this.props
    return (
      <div>
        <div className={styles.Sorting}>
          <div>
            <div>Trustpilot score:</div>
            <div>
              <Select onChange={this.onChangeTrustpilot.bind(this)} value={sorting.trustpilot}>
                <option value='1'>Vis alle</option>
                <option value='2'>Højeste</option>
                <option value='3'>Laveste</option>
              </Select>
            </div>
          </div>
        </div>
        <div className={styles.Companies}>
          {companies.map((company, key) => {
            return <Company key={key} company={company}/>
          })}
        </div>
      </div>
    )
  }
}
