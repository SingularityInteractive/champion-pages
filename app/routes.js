import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import { App } from './components/layout'
import { Home } from './components/home/home'
import { Listen, Broadcast } from './components/listen/listen'
import { NotFound } from './components/notfound'


// wild card * routes must be last child otherwise they will over-ride
export const routes = (
  <Route path="/" component={App}>
  <IndexRoute component={Home} />
  <Route path="home" component={Home} />
  <Route path="listen" component={Listen} />

  <Route component={Listen}>
  <Route path="broadcast/:id" component={Broadcast} />
  </Route>
  <Route path="*" component={NotFound} />
  </Route>
)
