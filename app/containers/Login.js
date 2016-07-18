import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

export default class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Helmet title={`Login`}/>
        <h1>Login</h1>
      </div>
    )
  }
}

function mapState() {
  return {}
}

export default connect(mapState)(LoginContainer)
