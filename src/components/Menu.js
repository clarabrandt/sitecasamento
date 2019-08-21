
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
      sticky: false,
      open: false
    }
    this.onScroll = this.onScroll.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  onScroll() {

    const isTop =
      window.pageYOffset <= 790 ? false : true;
    this.setState({
      sticky: isTop
    });
  }


  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.setState({
      clicked: this.props.path
    });
  }

  toggleMenu() {
    if (this.state.open === false) {
      this.setState({
        open: true
      })
    } else {
      this.setState({
        open: false
      })
    }
  }

  render() {
    return (
      <div className={`menu ${this.state.sticky ? 'sticky' : 'notSticky'}`} ref={this.menu}>
          <MenuItem name='Home' anchor='home' handleClick={this.props.handleClick} />
          <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
          <MenuItem name='Sobre nós' anchor='casal' handleClick={this.props.handleClick} />
          <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
          <MenuItem name='Onde e quando' anchor='local' handleClick={this.props.handleClick} />
          <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
          <MenuItem name='Galeria' anchor='galeria' handleClick={this.props.handleClick} />
          <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
          <MenuItem name='Madrinhas/Padrinhos' anchor='madrinhas' handleClick={this.props.handleClick} />
          <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
          <MenuItem name='Presentes' anchor='honeymoon' handleClick={this.props.handleClick} />
          <img className='heart-icon--menu' src={love} width="8" height="8" alt="Heart" />
          <MenuItem name='RSVP' anchor='rsvp' handleClick={this.props.handleClick} />
        <div className={`hamburger ${this.state.open ? 'open' : 'closed'}`} onClick={this.toggleMenu}>
          <Hamburger/>
        </div>
        <div className={`cross ${this.state.open ? 'open' : 'closed'}`} onClick={this.toggleMenu}>
          <Cross />
        </div>
        <div className={`menu--dropdown ${this.state.open ? 'open' : 'closed'}`} onClick={this.toggleMenu} >
          <MenuItem name='Home' anchor='home' handleClick={this.props.handleClick} />
          <MenuItem name='Sobre nós' anchor='casal' handleClick={this.props.handleClick} />
          <MenuItem name='Onde e quando' anchor='local' handleClick={this.props.handleClick} />
          <MenuItem name='Galeria' anchor='galeria' handleClick={this.props.handleClick} />
          <MenuItem name='Madrinhas/Padrinhos' anchor='madrinhas' handleClick={this.props.handleClick} />
          <MenuItem name='Presentes' anchor='honeymoon' handleClick={this.props.handleClick} />
          <MenuItem name='RSVP' anchor='rsvp' handleClick={this.props.handleClick} />
      </div>
      </div>
      
    )
  }
}

