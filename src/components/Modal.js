import React, { Component } from 'react'
import './Modal.css'
import one from './photos/SaeTomas1.jpg'
import Portal from './Portal'

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: null
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState({
      modal: false
    })

  }
  render() {
    const { children } = this.props
    return (
      <Portal>
        <div>
          <img className='image-modal' alt=''>{children}</img>
        </div>
      </Portal>
    )
  }
}


