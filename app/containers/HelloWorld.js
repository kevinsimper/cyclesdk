import React, { Component } from 'react'
import { connect } from 'react-redux'
import HelloWorld from '../components/HelloWorld'

export default class HelloWorldContainer extends Component {
  render() {
    const { companies } = this.props
    return (
      <div>
        <HelloWorld companies={companies}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    companies: state.companies
  }
}

export default connect(mapState)(HelloWorldContainer)
