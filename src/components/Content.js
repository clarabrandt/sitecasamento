import React, { Component } from 'react'
import "./Content.css"
import Local from './Local'
import Gallery from './Gallery'
import RSVP from './RSVP'
import Couple from './Couple'
import Timeline from './Timeline'
import Counter from './Counter'
import Madrinhas from './Madrinhas'
import Honeymoon from './honeymoon/Honeymoon'
import Banner2 from './Banner2'

export default class Content extends Component {

  render() {
    return (
      <div className='content'>
        <Couple />
        <Timeline />
        <Counter />
        <Local />
        <Banner2 />
        <Madrinhas />
        <Gallery />
        <Honeymoon />
        <RSVP />
      </div>
    )
  }
}
