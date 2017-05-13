import React, { Component } from 'react'
import { connect } from 'react-redux'
import Country from '../components/Country'
import Helmet from 'react-helmet'

class CountryContainer extends Component {
  render() {
    const { country } = this.props
    return (
      <div>
        <Helmet title={`Læs om Cykelrejser ${country} - Alt du skal vide!`}/>
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
