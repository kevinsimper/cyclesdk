import React, { Component } from 'react'

export default class CompanyCreate extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Create new Company</h1>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' value={this.state.name} onChange={this.onChangeName.bind(this)}/>
        </div>
      </div>
    )
  }
}
