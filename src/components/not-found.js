import React, { Component } from 'react'

import { config } from '../config'

class NotFound extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    ga('create', config.gaId, 'auto')
    ga('send', 'pageview')
  }

  render() {
    return (
      <div className="centered" data-component="not-found">
        <h1>For real brah... The site is underconstruction... Nothing is here for "The Short Term"....</h1>
      </div>
    )
  }
}

export default NotFound
