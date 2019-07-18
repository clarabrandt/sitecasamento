import React, { Component } from 'react'
import ReactDom from 'react-dom'


const portalRoot = document.getElementById('portal-root')

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div')
  }
  componentDidMount = () => {
    portalRoot && portalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    portalRoot && portalRoot.removeChild(this.el);
  }


  render() {
    const { children } = this.props
    return ReactDom.createPortal(
      <div>
        {children}
      </div>,
      this.el
    )
  }
}


