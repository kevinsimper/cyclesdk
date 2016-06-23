import React, { Component } from 'react'
import { connect } from 'react-redux'
import HelloWorld from '../components/HelloWorld'
import Countries from '../components/Countries'

export default class HelloWorldContainer extends Component {
  render() {
    const { countries } = this.props
    return (
      <div>
        <HelloWorld/>
        <Countries countries={countries}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    countries: state.countries
  }
}

export default connect(mapState)(HelloWorldContainer)
