import React, { Component } from 'react'
import { connect } from 'react-redux'
import Countries from '../components/Countries'
import Helmet from 'react-helmet'

class CountriesContainer extends Component {
  render() {
    const { countries } = this.props
    return (
      <div>
        <Helmet title={`Cykelrejser destinationer i Europa - Find de bedste steder`}/>
        <h1>Cykelrejser destinationer i Europa - Find de bedste steder</h1>
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
