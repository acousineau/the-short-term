require('../scss/core.scss')

import moment from 'moment'

import config from './config'

const countdown = () => {
  const now = moment()
  const releaseDate = moment('2016-05-13')
  const duration = moment.duration(releaseDate - now, 'milliseconds')

  document.getElementById("countdown").innerHTML = 
    duration.days() + ':' +
    duration.hours() + ':' +
    duration.minutes() + ':' +
    duration.seconds()
}

countdown()
setInterval(countdown, 1000)

ga('create', config.gaId, 'auto')
ga('send', 'pageview')
