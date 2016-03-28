import React from 'react'
import { render } from 'react-dom'

export const Listen = React.createClass({
  render() {
    return (
      <div>
        <h2>Listen</h2>
        {this.props.children || "Welcome to FamilyLife Today"}
      </div>
    )
  }
})

export const Broadcast = React.createClass({
  render() {
    return <h3>Broadcast {this.props.params.id}</h3>
  }
})
