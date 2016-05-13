import React, { Component } from 'react'
import moment from 'moment'

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }
    this.interval = setInterval(() => this.setTime(), 1000)
  }

  componentDidMount() {
    this.setTime()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  timeLeft() {
    const now = moment()
    const releaseDate = moment('2016-05-13')
    const duration = moment.duration(releaseDate - now, 'milliseconds')

    const time = duration.days() + ':' +
      duration.hours() + ':' +
      duration.minutes() + ':' +
      duration.seconds()

    return time
  }

  setTime() {
    this.setState({
      time: this.timeLeft()
    })
  }

  render() {
    return (
      <div id="countdown" data-component="countdown">
        {this.state.time}
      </div>
    )
  }
}

export default Countdown
