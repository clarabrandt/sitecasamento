import React, { Component } from 'react'
import "./Content.css"
import Menu from './Menu'
import Local from './Local'
import Gallery from './Gallery'
import RSVP from './RSVP'
import Story2 from './Story2'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Menu />
        <Story2 />
        <Local />
        <Gallery />
        <RSVP />
      </div>
    )
  }
}
