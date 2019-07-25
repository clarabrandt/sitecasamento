import React, { Component } from 'react'
import "./Content.css"
import Menu from './Menu'
import Local from './Local'
import Gallery from './Gallery'
import RSVP from './RSVP'
import Couple from './Couple'
import Timeline from './Timeline'
import Counter from './Counter'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Menu />
        <Couple />
        <Timeline />
        <Counter />
        <Local />
        <Gallery />
        <RSVP />
      </div>
    )
  }
}
