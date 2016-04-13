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
    this.state = {
      content: '',
      country,
      city
    }
  }
  componentDidMount() {
    require.ensure([], (require) => {
      let content = require('../../Articles/' + this.state.city.file + '.md')
      this.setState({
        content
      })
    })
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
