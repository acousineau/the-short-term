import React from 'react'
import ReactDOM from 'react-dom'

import { Route, IndexRoute } from 'react-router'
import App from './app'
import Home from './components/home'
import Experiment from './components/experiment'
import NotFound from './components/not-found'

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="experiment" component={Experiment} />
    <Route path="*" component={NotFound}/>
  </Route>
)
