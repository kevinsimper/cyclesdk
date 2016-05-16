import React, { Component } from 'react'
import text from './about.md'

export default class About extends Component {
  render() {
    return (
      <div style={{width: 500}}>
        <div dangerouslySetInnerHTML={{__html: text}}></div>
      </div>
    )
  }
}
