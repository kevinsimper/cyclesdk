import React, { Component } from 'react'
import { connect } from 'react-redux'
import City from '../components/City'

export default class CityContainer extends Component {
  render() {
    const { countries, params } = this.props
    return (
      <div>
        <City countries={countries} params={params}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    countries: state.countries
  }
}

export default connect(mapState)(CityContainer)
