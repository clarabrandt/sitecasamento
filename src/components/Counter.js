import React, { Component } from 'react'
import './Counter.css'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setTimer()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTimer() {
    const finalDate = new Date("Jan 4, 2020 19:00:00").getTime();
    const now = new Date().getTime();
    const interval = finalDate - now;
    const days = Math.floor(interval / (1000 * 60 * 60 * 24));
    const hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((interval % (1000 * 60)) / 1000);
    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }



  render() {

    return (
      <div className='counter'>
        <div className='counter-content'>
          <div className='counter-text'>E agora estamos contando os dias para comemorar com vocês! </div>
          <div className='counter-timer'>
            <div>{this.state.days} dias </div>
            <div className='counter-timer-text'>{this.state.hours} horas {this.state.minutes} minutos {this.state.seconds} segundos</div>
          </div>
        </div>
      </div>
    )
  }
}
