import React, { Component } from 'react'
import { connect } from 'react-refetch'

class CompanyCreate extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      url: ''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    })
  }
  onClickCreate() {
    this.props.postCompany({
      name: this.state.name,
      url: this.state.url
    })
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
          <div>
            <label htmlFor="url">Url</label>
          </div>
          <input type="text" id='url' value={this.state.url} onChange={this.onChangeUrl.bind(this)}/>
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
