import React, { Component } from 'react'
import { connect } from 'react-redux'
import Company from '../components/Company'
import Helmet from 'react-helmet'

class CompanyContainer extends Component {
  render() {
    const { company } = this.props
    return (
      <div>
        <Helmet title={`Se cykelrejser som ${company.name} tilbyder`}/>
        <Company company={company}/>
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
