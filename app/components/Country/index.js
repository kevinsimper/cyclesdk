import React, { Component } from 'react'
import CountriesData from '../Countries/countries.json'

export default class Country extends Component {
  render() {
    let country = CountriesData.countries.find(country => {
      return country.name.toLowerCase() === this.props.params.country
    })
    return (
      <div>Country: {country.name}</div>
    )
  }
}
