import React, { Component } from 'react'
import "./Content.css"
import Menu from './Menu'
import Local from './Local'
import Gallery from './Gallery'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Menu />
        <Local />
        <Gallery />
      </div>
    )
  }
}
