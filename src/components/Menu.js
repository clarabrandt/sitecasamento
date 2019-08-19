
import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import love from './svg/love.svg'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    // this.menu = React.createRef();
    this.state = {
      sticky: true
    }
  }
 
  render() {
    return (
      <div className={`menu ${this.props.sticky ? 'sticky' : 'notSticky'}`} >
        <MenuItem name='Home' anchor='home' handleClick={this.props.handleClick}/>
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Sobre nós' anchor='casal'handleClick={this.props.handleClick} />
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Onde e quando' anchor='local' handleClick={this.props.handleClick}/>
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Galeria' anchor='galeria' handleClick={this.props.handleClick}/>
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Madrinhas/Padrinhos' anchor='madrinhas' handleClick={this.props.handleClick}/>
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='Presentes' anchor='honeymoon' handleClick={this.props.handleClick}/>
        <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
        <MenuItem name='RSVP' anchor='rsvp' handleClick={this.props.handleClick}/>
      </div>
    )
  }
}

