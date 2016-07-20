import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <pre>
          {JSON.stringify(this.props.companies, null, 2)}
        </pre>
      </div>
    )
  }
}

function mapState(state) {
  return {
    companies: state.companies2
  }
}

export default connect(mapState)(Admin)
