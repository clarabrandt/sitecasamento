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
      modalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  renderModal() {
    return (
      <Modal toggleFn={this.toggleModal} isOpen={this.state.modalOpen}>
        <img src={this.state.selectedPicture} alt='' />
      </Modal>
    );
  };

  toggleModal(picture) {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      selectedPicture: picture,
    }));
  };

  jalapenho = () => {
    return this.toggleModal
  }

  render() {
    return (
      <div className='gallery'>
        <div className='gallery-title'>Fotos do casal</div>
        <div className='gallery-grid'>
          <img className='gallery-item gallery-item--1 gallery-img' src={one} alt="couple" onClick={() => this.toggleModal(one)} />
          <img className='gallery-item gallery-item--2 gallery-img' src={two} alt="couple" onClick={() => this.toggleModal(two)} />
          <img className='gallery-item gallery-item--3 gallery-img' src={three} alt="couple" onClick={() => this.toggleModal(three)} />
          <img className='gallery-item gallery-item--4 gallery-img' src={four} alt="couple" onClick={() => this.toggleModal(four)} />
          <img className='gallery-item gallery-item--5 gallery-img' src={five} alt="couple" onClick={() => this.toggleModal(five)} />
        </div>
        {this.renderModal()}
      </div>
    )
  }
}
