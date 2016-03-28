import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { routes } from './routes'

render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('app'))
