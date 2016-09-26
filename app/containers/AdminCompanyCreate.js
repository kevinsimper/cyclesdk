import React, { Component } from 'react'
import { connect } from 'react-refetch'

class CompanyCreate extends Component {
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
    this.props.postCompany({name: this.state.name})
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

export default connect(() => ({
  postCompany: company => ({
    postCompanyResponse: {
      url: `/api/company`,
      method: 'POST',
      body: JSON.stringify(company)
    }
  })
}))(CompanyCreate)
