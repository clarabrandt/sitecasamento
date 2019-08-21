import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import love from './svg/love.svg'
import Cross from './svg/Cross.js'
import Hamburger from './svg/Hamburger.js'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.menu = React.createRef();
    this.state = {
      show: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    if (this.state.show === false) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }

  render() {
    return (
      <div className={`menu--dropdown ${this.state.show ? 'show' : 'closed'}`} onClick={this.toggleMenu} >
        <MenuItem name='Home' anchor='home' handleClick={this.props.handleClick} />
        <MenuItem name='Sobre nós' anchor='casal' handleClick={this.props.handleClick} />
        <MenuItem name='Onde e quando' anchor='local' handleClick={this.props.handleClick} />
        <MenuItem name='Galeria' anchor='galeria' handleClick={this.props.handleClick} />
        <MenuItem name='Madrinhas/Padrinhos' anchor='madrinhas' handleClick={this.props.handleClick} />
        <MenuItem name='Presentes' anchor='honeymoon' handleClick={this.props.handleClick} />
        <MenuItem name='RSVP' anchor='rsvp' handleClick={this.props.handleClick} />
      </div>

    )
  }
}

