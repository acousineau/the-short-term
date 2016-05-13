import React, { Component } from 'react'

import { config } from '../config'
import Countdown from './countdown'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    ga('create', config.gaId, 'auto')
    ga('send', 'pageview')
  }

  render() {
    return (
      <div className="centered" data-component="home">
        <h2>Site Under Construction...</h2>
        <div className="album">
          <h1>
            <span className="t-display">The</span>
            <span className="t-poster-small">Short</span>
            <span className="t-poster">Term</span>
          </h1>
        </div>
        <div className="social">
          <a target="_blank" href="https://www.facebook.com/theshorttermmusic/"><img src={require('../img/Facebook_logo.png')} alt="Facebook" /></a>
          <a target="_blank" href="https://twitter.com/TheShortTerm"><img src={require('../img/Twitter_logo.png')} alt="Twitter" /></a>
          <a target="_blank" href="https://www.instagram.com/theshortterm/"><img src={require('../img/Instagram_logo.png')} alt="Instagram" /></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCn70lUNylAAI936DNBsh3LA"><img src={require('../img/Youtube_logo.png')} alt="YouTube" /></a>
          <a target="_blank" href="https://theshortterm.bandcamp.com"><img src={require('../img/Bandcamp_logo.png')} alt="Bandcamp" /></a>
        </div>
        <a target="_blank" href="http://m.ticketweb.com/t3/sale/SaleEventDetail?dispatch=loadSelectionData&eventId=6539285&REFERRAL_ID=tmfeed&pl=tw2015us">
          <Countdown />
        </a>
      </div>
    )
  }
}

export default Home
