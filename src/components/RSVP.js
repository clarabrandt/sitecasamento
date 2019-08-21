import React, { Component } from 'react'
import './RSVP.css'


export default class RSVP extends Component {
  render() {
    return (
      <div className='rsvp' ref={this.props.rsvp}>
        <div className='rsvp-content'>
          <div className='component-title rsvp-title'>RSVP </div>
          <iframe className='rsvp-form' title='rsvp' src="https://docs.google.com/forms/d/e/1FAIpQLSehhgFEmA0EAnEftzgaM_JFd3FNpOU5zOP9enbSeVIvjy33eA/viewform?embedded=true" width="700" height="700" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

          {/*<iframe className='rsvp-form' src="https://docs.google.com/forms/d/e/1FAIpQLSehhgFEmA0EAnEftzgaM_JFd3FNpOU5zOP9enbSeVIvjy33eA/viewform?embedded=true" width="540" height="615" frameborder="0" marginheight="0" marginwidth="0" title='rsvp_form'>Loading...</iframe>*/}
        </div>
        <div className='foot'>Todos os direitos reservados &copy; | Feito por: Clara Brandt</div>

      </div>
    )
  }
}
