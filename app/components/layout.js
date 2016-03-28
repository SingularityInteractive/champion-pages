import React from 'react'
import { Link } from 'react-router'
import { render } from 'react-dom'

export const App = React.createClass({
  render() {
    return (
      <main className="wrapper">
        <HeaderNavigation />
        {this.props.children}
      </main>
    )
  }
})

const HeaderNavigation = React.createClass({
  render() {
    return (
      <nav>
        <h1>Champion Page</h1>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/listen">Listen</Link></li>
        </ul>
      </nav>
    )
  }
})
