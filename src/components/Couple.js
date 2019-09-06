import React, { Component } from 'react'
import './Couple.css'
import Modal from './Modal'

import sa5 from './photos/casal/Sa7.jpg'
import tomas5 from './photos/casal/Tomas8.jpg'
import saetomas from './photos/casal/SaeTomas8.jpg'



export default class Couple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }


  toggleScroll() {
    const disable = this.state.modalOpen;
    document.documentElement.style.overflowY = disable ? 'hidden' : '';
  }

  renderModal() {
    return (
      <Modal toggleFn={this.toggleModal} isOpen={this.state.modalOpen}>
        <img src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/casorio2.8fef8c15.jpg' width='500px' height='auto' alt='' />
      </Modal>
    );
  };

  toggleModal(picture) {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
      selectedPicture: picture,
    }), this.toggleScroll);
  };

  render() {
    return (
      <div className='couple' ref={this.props.casal}>
        <div className='component-title'>
          <div>Nossa história</div>
        </div>
        <div className='couple-content'>
          <div className='couple-details-1'>
            <img className='couple-img' src={sa5} alt="couple" onClick={() => this.toggleModal(saetomas)} />
            <div className='couple-name'>Sabrina Brandt</div>
          </div>
          <div className='couple-details-2'>
            <img className='couple-img-full' src={saetomas} alt="couple" />
            <div className='couple-name'>Sabrina Brandt e Tomás Eiró</div>
          </div>

          <div className='couple-text'>Sá, carioca, menina da praia. Resolveu que queria mudar um pouco os ares e, em 2016, foi fazer uma pós em Lisboa. Uma não, duas! Não sabia que, outra vez, sua vida mudaria por completo depois do reveillon de 2017. Tomás e Sá se conheceram, e a vida foi só emoção desde então!</div>
          <div className='couple-details-1'>
            <img className='couple-img' src={tomas5} alt="couple" onClick={() => this.toggleModal(saetomas)} />
            <div className='couple-name'>Tomás Eiró</div>
          </div>
        </div>
        {this.renderModal()}
      </div>
    )
  }
}
