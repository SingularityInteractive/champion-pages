import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import { App } from './components/layout'
import { Home } from './components/home'
import { NotFound } from './components/notfound'


// wild card * routes must be last child otherwise they will over-ride
export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />

    <Route path="*" component={NotFound} />
  </Route>
)
