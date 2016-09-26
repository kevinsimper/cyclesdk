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
  onClickCreate() {
    console.log('submit', this.state.name)
  }
  render() {
    return (
      <div>
        <h1>Create new Company</h1>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input type="text" id='name' value={this.state.name} onChange={this.onChangeName.bind(this)}/>
        </div>
        <div>
          <button onClick={this.onClickCreate.bind(this)}>Create company</button>
        </div>
      </div>
    )
  }
}
