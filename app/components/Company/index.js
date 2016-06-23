import React, { Component } from 'react'

export default class Company extends Component {
  render() {
    const { company } = this.props
    const image = require('../Companies/Logos/' + company.logo)
    return (
      <div>
        <img src={image} style={{float: 'right', maxWidth: 300, width: '100%'}}/>
        <h1>{company.name}</h1>
        <a href={company.url}>{company.url}</a>
        <div>
          {company.trustpilot &&
            'Trustpilot rating: ' + company.trustpilot
          }
        </div>
        <div>
          {company.trustpilot &&
            'Level: ' + company.level
          }
        </div>
        <table style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Afrejse</th>
              <th>Hjemrejse</th>
              <th>Pris</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {company.tours && company.tours.map((tour) => {
              return (
                <tr>
                  <td>{tour.place && tour.place}</td>
                  <td>{tour.start && tour.start}</td>
                  <td>{tour.end && tour.end}</td>
                  <td>{tour.price && tour.price}</td>
                  <td><a href={tour.url}>Se rejse</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
