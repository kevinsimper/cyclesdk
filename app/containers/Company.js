import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class CompanyContainer extends Component {
  render() {
    const { company } = this.props
    return (
      <div>
        Company {company}
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
