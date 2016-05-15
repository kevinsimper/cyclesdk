import React, { Component } from 'react'
import styles from './style.scss'
import axios from 'axios'

export default class Newsletter extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      submitted: false
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onClickSubmit() {
    axios.post('/api/subscriber', {
      name: this.state.name,
      email: this.state.email
    }).then(() => {
      this.setState({
        submitted: true
      })
    })
  }
  render() {
    let form = (<div>
      <div>
        <label>Name</label>
        <input type="text" onChange={this.onChangeName.bind(this)} value={this.state.name}/>
      </div>
      <div>
        <label>Email</label>
        <input type="text" onChange={this.onChangeEmail.bind(this)} value={this.state.email}/>
      </div>
      <div>
        <button onClick={this.onClickSubmit.bind(this)}>Tilmeld</button>
      </div>
    </div>)
    
    return (
      <div className={styles.Form}>
        <h1>Tilmeld nyhedsbrev og få gode tilbud på cykelrejser!</h1>
        {!this.state.submitted ?
          form :
          <h2>Du er nu tilmeldt!</h2>
        }
      </div>
    )
  }
}
