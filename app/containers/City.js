import React, { Component } from 'react'
import { connect } from 'react-redux'
import City from '../components/City'
import Helmet from 'react-helmet'

class CityContainer extends Component {
  render() {
    const { city, country } = this.props
    return (
      <div>
        <Helmet title={`Cykelrejse til ${city.name}, ${country.name} - Alt du skal vide!`}/>
        <City {...this.props}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    countries: state.countries,
    content: state.content,
    city: state.city,
    country: state.country
  }
}

export default connect(mapState)(CityContainer)
