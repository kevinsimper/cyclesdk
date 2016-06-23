import React, { Component } from 'react'

export default class Tours extends Component {
  render() {
    const { tours } = this.props
    return (
      <div>
        <h1>Tours</h1>
        <table style={{width: '100%'}}>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Firma</th>
              <th>Afrejse</th>
              <th>Hjemrejse</th>
              <th>Pris</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((company) => {
              if(company.tours && company.tours.length > 0) {
                return company.tours.map((tour) => {
                  return (
                    <tr>
                    <td>{tour.place && tour.place}</td>
                    <td>{company.name}</td>
                    <td>{tour.start && tour.start}</td>
                    <td>{tour.end && tour.end}</td>
                    <td>{tour.price && tour.price}</td>
                    <td><a href={tour.url}>Se rejse</a></td>
                    </tr>
                  )
                })
              }
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
