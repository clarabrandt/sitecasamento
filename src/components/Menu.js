import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import love from './images/love.svg'


export default class Menu extends Component {

  render() {
    return (

      <div className={`menu ${this.props.sticky ? 'sticky' : 'notSticky'}`} >
        <MenuItem name='Home' anchor='home' />
        <img className='heart-icon--menu' src={love} width="10" height="10" alt="Heart" />
        <MenuItem name='Sobre nós' anchor='sobre' />
        <img className='heart-icon--menu' src={love} width="10" height="10" alt="Heart" />
        <MenuItem name='Onde e quando' anchor='local' />
        <img className='heart-icon--menu' src={love} width="10" height="10" alt="Heart" />
        <MenuItem name='Galeria' anchor='galeria' />
        <img className='heart-icon--menu' src={love} width="10" height="10" alt="Heart" />
        <MenuItem name='Madrinhas' anchor='madrinhas' />
        <img className='heart-icon--menu' src={love} width="10" height="10" alt="Heart" />
        <MenuItem name='Padrinhos' anchor='padrinhos' />
        <img className='heart-icon--menu' src={love} width="10" height="10" alt="Heart" />
        <MenuItem name='RSVP' anchor='rsvp' />
        <img className='heart-icon--menu' src={love} width="10" height="10" alt="Heart" />
        <MenuItem name='Presentes' anchor='presentes' />
      </div>
    )
  }
}

