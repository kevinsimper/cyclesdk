import React, { Component } from 'react'

export default class Countries extends Component {
  render() {
    return (
      <div>
        {this.props.countries.map((country) => {
          return <div>{country.name}</div>
        })}
      </div>
    )
  }
}
