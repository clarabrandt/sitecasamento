import React, { Component } from 'react'
import './Gallery.css'
import one from './photos/SaeTomas1peq.jpg'
import two from './photos/SaeTomas2peq.jpg'
import three from './photos/SaeTomas3peq.jpeg'
import four from './photos/SaeTomas5peq.jpeg'
import five from './photos/SaeTomas6peq.jpeg'
import Modal from './Modal'

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      modal: true
    })

  }

  render() {
    return (
      <div className='gallery'>
        <div className='gallery-title'>Fotos do casal</div>
        <div className='gallery-grid'>
          <img className='gallery-item gallery-item--1 gallery-img' src={one} alt="couple" onClick={this.handleClick} />
          {this.state.modal ? (
            <Modal />
          ) : false}
          <img className='gallery-item gallery-item--2 gallery-img' src={two} alt="couple" onClick={this.handleClick} />
          <img className='gallery-item gallery-item--3 gallery-img' src={three} alt="couple" onClick={this.handleClick} />
          <img className='gallery-item gallery-item--4 gallery-img' src={four} alt="couple" onClick={this.handleClick} />
          <img className='gallery-item gallery-item--5 gallery-img' src={five} alt="couple" onClick={this.handleClick} />
        </div>
      </div>
    )
  }
}
