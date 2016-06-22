import React, { Component } from 'react'
import { connect } from 'react-redux'
import Country from '../components/Country'

export default class CountryContainer extends Component {
  render() {
    return (
      <div>
        <Country {...this.props}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    content: state.content,
    country: state.country,
    cities: state.cities
  }
}

export default connect(mapState)(CountryContainer)
