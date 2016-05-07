import React, { Component } from 'react'
import { connect } from 'react-redux'
import Countries from '../components/Countries'

export default class CountriesContainer extends Component {
  render() {
    const { countries } = this.props
    return (
      <div>
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

export default connect(mapState)(CountriesContainer)
