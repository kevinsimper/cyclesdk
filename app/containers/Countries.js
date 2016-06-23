import React, { Component } from 'react'
import { connect } from 'react-redux'
import Countries from '../components/Countries'

export default class CountriesContainer extends Component {
  render() {
    const { countries } = this.props
    return (
      <div>
        <h1>Lande</h1>
        <div>Jeg har samlet en liste over alle lande hvor du kan finde gode steder at tage hen!</div>
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
