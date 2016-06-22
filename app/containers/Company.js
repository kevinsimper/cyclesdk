import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class CompanyContainer extends Component {
  render() {
    const { company } = this.props
    const image = require('../components/Companies/Logos/' + company.logo)
    return (
      <div>
        <img src={image} style={{float: 'right', maxWidth: 300, width: '100%'}}/>
        <h1>{company.name}</h1>
        <a href={company.url}>{company.url}</a>
        <div>
          {company.trustpilot &&
            'Trustpilot rating: ' + company.trustpilot
          }
        </div>
        <div>
          {company.trustpilot &&
            'Level: ' + company.level
          }
        </div>
      </div>
    )
  }
}

function mapState(state) {
  return {
    company: state.company
  }
}

export default connect(mapState)(CompanyContainer)
