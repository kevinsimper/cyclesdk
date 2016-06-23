import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tours from '../components/Tours'

export default class ToursContainer extends Component {
  render() {
    const { tours } = this.props
    return (
      <div>
        <Tours tours={tours}/>
      </div>
    )
  }
}

function mapState(state) {
  return {
    tours: state.tours
  }
}

export default connect(mapState)(ToursContainer)
