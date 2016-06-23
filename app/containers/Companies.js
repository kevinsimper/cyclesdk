import React, { Component } from 'react'
import { connect } from 'react-redux'
import Companies from '../components/Companies'
import { sortTrustpilot, sortLevel } from '../actions'

export default class CompaniesContainer extends Component {
  render() {
    const { companies, sorting, dispatch } = this.props
    return (
      <div>
        <h1>Cykelrejse firmaer</h1>
        <Companies
          companies={companies}
          sorting={sorting}
          onChangeSortingTrustpilot={(sort) => dispatch(sortTrustpilot(sort))}
          onChangeSortingLevel={(sort) => dispatch(sortLevel(sort))}
          />
      </div>
    )
  }
}

function mapState(state) {
  return {
    companies: state.sortedCompanies || state.companies,
    sorting: state.sorting
  }
}

export default connect(mapState)(CompaniesContainer)
