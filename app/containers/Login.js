import React, { Component } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import Button from '../components/Button'

export default class LoginContainer extends Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '782369031899919',
        xfbml      : true,
        version    : 'v2.7'
      });
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  onClickLogin() {
    FB.getLoginStatus(this.statusChangeCallback.bind(this))
  }
  statusChangeCallback(res) {
    if (res.status === 'connected') {
      this.testApi()
    } else if (res.status === 'not_authorized') {
      FB.login(this.statusChangeCallback.bind(this), {scope: 'public_profile,email'})
    } else {
      FB.login(this.statusChangeCallback.bind(this), {scope: 'public_profile,email'})
    }
  }
  testApi() {
    window.location.href = '/admin'
  }
  render() {
    return (
      <div>
        <Helmet title={`Login`}/>
        <h1>Login</h1>
        <Button onClick={this.onClickLogin.bind(this)}>Login with Facebook</Button>
      </div>
    )
  }
}

function mapState() {
  return {}
}

export default connect(mapState)(LoginContainer)
