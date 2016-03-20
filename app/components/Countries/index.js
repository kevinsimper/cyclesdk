import React, { Component } from 'react'
import CountriesData from '../../countries.json'

export default class Countries extends Component {
  render() {
    return (
      <div>
        <h1>Lande</h1>
        <div>Jeg har samlet en liste over alle lande hvor du kan finde gode steder at tage hen!</div>
        <ul>
          {CountriesData.countries.map((country) => {
            return <li>{country.name}</li>
          })}
        </ul>
      </div>
    )
  }
}
