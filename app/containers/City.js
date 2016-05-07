import React, { Component } from 'react'
import { connect } from 'react-redux'
import City from '../components/City'

export default class CityContainer extends Component {
  render() {
    return (
      <div>
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
