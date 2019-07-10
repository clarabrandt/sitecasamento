import React, { Component } from 'react'
import "./Banner.css"
import love from './images/love.svg'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='banner-text'>Sá e Tomás</div>
        <img className='heart-icon' src={love} width="40" height="40" alt="Heart" />

      </div>
    )
  }
}
