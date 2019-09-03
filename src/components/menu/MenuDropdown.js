import React, { Component } from 'react';
import './MenuDropdown.css';
import MenuItem from './MenuItem';
import Cross from '../svg/Cross.js'
import Hamburger from '../svg/Hamburger.js'


export default class MenuDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    };
    this.toggleMenu = this.toggleMenu.bind(this)
  }


  toggleMenu() {
    if (this.state.show === true) {
      this.setState({
        show: false
      })
    } else {
      this.setState({
        show: true
      })
    }
  }


  render() {
    return (
      <div className='menu-smallScreen'>
        <div className={`hamburger ${this.state.show ? 'show ' : 'hide'}`} onClick={this.toggleMenu}>
          <Hamburger />
        </div>
        <div className={`menu--dropdown ${this.state.show ? 'hide' : 'show'}`}>
          <MenuItem name='Home' anchor='home' handleClick={this.props.handleClick} />
          <MenuItem name='Sobre nós' anchor='casal' handleClick={this.props.handleClick} />
          <MenuItem name='Onde e quando' anchor='local' handleClick={this.props.handleClick} />
          <MenuItem name='Galeria' anchor='galeria' handleClick={this.props.handleClick} />
          <MenuItem name='Madrinhas/Padrinhos' anchor='madrinhas' handleClick={this.props.handleClick} />
          <MenuItem name='Presentes' anchor='honeymoon' handleClick={this.props.handleClick} />
          <MenuItem name='RSVP' anchor='rsvp' handleClick={this.props.handleClick} />
        </div>
        <div className={`cross ${this.state.show ? 'hide ' : 'show'}`} onClick={this.toggleMenu}>
          <Cross />
        </div>


      </div>
    )
  }
}

