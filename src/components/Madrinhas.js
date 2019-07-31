import React, { Component } from 'react';
import './Madrinhas.css'
import clara from './photos/eu.jpg'
import bianca from './photos/bianca.jpg'
import larise from './photos/larise.jpg'
import fe from './photos/fe.jpg'
import filipa from './photos/filipa.jpg'

class Madrinhas extends Component {
  render() {
    return (
      <div className='madrinhas'>
        <div className='madrinhas-title'>As madrinhas</div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={clara} alt="clara" />
            <div className='madrinhas-name'>Clara Brandt</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={bianca} alt="bianca" />
            <div className='madrinhas-name'>Bianca Delarue</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={larise} alt="larise" />
            <div className='madrinhas-name'>Larise Barros</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={fe} alt="fernanda" />
            <div className='madrinhas-name'>Fernanda Brandt</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={filipa} alt="filipa" />
            <div className='madrinhas-name'>Filipa Eiró</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={larise} alt="clara" />
            <div className='madrinhas-name'>Larise Barros</div>
          </div>
        </div>
        <div className='madrinhas-title'>Os padrinhos</div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={clara} alt="clara" />
            <div className='madrinhas-name'>Clara Brandt</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={bianca} alt="bianca" />
            <div className='madrinhas-name'>Bianca Delarue</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={larise} alt="larise" />
            <div className='madrinhas-name'>Larise Barros</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={fe} alt="fernanda" />
            <div className='madrinhas-name'>Fernanda Brandt</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={filipa} alt="filipa" />
            <div className='madrinhas-name'>Filipa Eiró</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={larise} alt="clara" />
            <div className='madrinhas-name'>Larise Barros</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Madrinhas