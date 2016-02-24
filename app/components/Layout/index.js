import React, { Component } from 'react'

export default class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Cycles.dk</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
}
