import React, { Component } from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <Table data={this.props.companies}/>
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
