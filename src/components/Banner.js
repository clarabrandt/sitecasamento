import React, { Component } from 'react'
import "./Banner.css"
import love from './images/love.svg'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className='banner-content'>
          <div className='banner-text'>Sá e Tomás</div>

          <div className='banner-date'>04 . 01 . 2019</div>
        </div>

      </div>
    )
  }
}
