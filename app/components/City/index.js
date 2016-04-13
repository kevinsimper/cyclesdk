import React, { Component } from 'react'
import CountriesData from '../Countries/countries.json'

export default class City extends Component {
  constructor(props) {
    super()
    let country = CountriesData.countries.find(country => {
      return country.name.toLowerCase() === props.params.country
    })
    let city = country.cities.find(city => {
      return city.name.toLowerCase() === props.params.city
    })
    require.ensure([], (require) => {
      let content = require('../../Articles/' + city.file + '.md')
      this.setState({
        content
      })
    })
    this.state = {
      content: '',
      country,
      city
    }
  }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: this.state.content}} />
        <div>Country: {this.state.country.name}</div>
        <div>City: {this.state.city.name}</div>
      </div>
    )
  }
}
