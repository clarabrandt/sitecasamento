import React, { Component } from 'react'
import "./Content.css"
import Menu from './Menu'
import Local from './Local'

export default class Content extends Component {
  render() {
    return (
      <div className='content'>
        <Menu />
        <Local />
      </div>
    )
  }
}
