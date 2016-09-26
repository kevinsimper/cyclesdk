import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tours from '../components/Tours'
import Helmet from 'react-helmet'

class ToursContainer extends Component {
  render() {
    const { tours, countries } = this.props
    return (
      <div>
        <Helmet title={`Find alle cykelrejser samlet et sted!`}/>
        <Tours tours={tours} countries={countries}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    tours: state.companies,
    countries: state.countries
  }
}

export default connect(mapState)(ToursContainer)
