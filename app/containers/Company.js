import React, { Component } from 'react'
import { connect } from 'react-redux'
import Company from '../components/Company'

export default class CompanyContainer extends Component {
  render() {
    const { company } = this.props
    return (
      <Company company={company}/>
    )
  }
}

function mapState(state) {
  return {
    company: state.company
  }
}

export default connect(mapState)(CompanyContainer)
