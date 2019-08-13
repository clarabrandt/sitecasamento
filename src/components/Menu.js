import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import love from './images/love.svg'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sticky: true
    }
  }
  // el.scrollIntoView({
  //   behavior: 'smooth', // smooth scroll
  //   block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
  // })
  render() {
    return (

      <div className={`menu ${this.props.sticky ? 'sticky' : 'notSticky'}`} >
        <MenuItem name='Home' anchor='home' />
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Sobre nós' anchor='sobre' />
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Onde e quando' anchor='local' />
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Galeria' anchor='galeria' />
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Madrinhas/Padrinhos' anchor='madrinhas' />
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Presentes' anchor='presentes' />
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='RSVP' anchor='rsvp' />
      </div>
    )
  }
}

