import React, { Component } from 'react'
import './Gallery.css'
import one from './photos/SaeTomas1peq.jpg'
import oneBig from './photos/SaeTomas1.jpg'
import two from './photos/SaeTomas2peq.jpg'

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
  }

  render() {
    return (
      <div className='gallery'>
        <div className='gallery-title'>Fotos do casal</div>
        <div className='gallery-grid'>
          <img className='gallery-item gallery-item--1 gallery-img' id='myBtn' src={one} alt="couple" onClick={this.handleClick} />
          <img className='gallery-item gallery-item--2 gallery-img' src={two} alt="couple" />
        </div>
        <div className='gallery-modal'>
          <img className='gallery-modal-photo modal-item--1' id='myModal' src={oneBig} alt="couple" />
          <span className="close">&times;</span>
        </div>
      </div>
    )
  }
}
