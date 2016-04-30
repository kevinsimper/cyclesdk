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
        <iframe
          width='100%'
          height='450'
          frameBorder='0'
          style={{margin: '20 0',border: 0}}
          src={`https://www.google.com/maps/embed/v1/search?q=${this.state.city.name}&key=AIzaSyAhTARSQYOOO7NNVIV2ckKYBUGPFK5oAYw`}
          allowFullScreen>
        </iframe>
      </div>
    )
  }
}
