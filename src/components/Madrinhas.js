import React, { Component } from 'react';
import './Madrinhas.css'
import clara from './photos/eu.jpg'
import bianca from './photos/bianca.jpg'
import larise from './photos/larise.jpg'
import filipa from './photos/filipa.jpg'
// import fe from './photos/fe.jpg'
import fernanda from './photos/fernanda.jpeg'
import victor from './photos/victor.jpg'
import vilaca from './photos/vilaca.jpg'
import ashish from './photos/ashish.jpg'
// import antonio from './photos/antonio.jpg'
import amanda from './photos/amanda.jpg'
import antonio2 from './photos/Antonio2.JPG'
import joao from './photos/joao.JPG'
import theo from './photos/theo.JPG'
import goncalo from './photos/goncalo.png'

class Madrinhas extends Component {
  render() {
    return (
      <div className='madrinhas'>
        <div className='madrinhas-title'>Pajem, Madrinhas, Padrinhos</div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={theo} alt="theo" />
            <div className='madrinhas-name'>Theo</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={theo} alt="amanda" />
            <div className='madrinhas-name'>Theo</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={theo} alt="antonio" />
            <div className='madrinhas-name'>Theo</div>
          </div>
        </div>
        <div div className='padrinhos-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={amanda} alt="amanda" />
            <div className='madrinhas-name'>Amanda</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={antonio2} alt="antonio" />
            <div className='madrinhas-name'>António</div>
          </div>
        </div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={bianca} alt="bianca" />
            <div className='madrinhas-name'>Bianca</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={ashish} alt="ashish" />
            <div className='madrinhas-name'>Ashish</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={clara} alt="amanda" />
            <div className='madrinhas-name'>Clara</div>
          </div>
        </div>
        <div className='padrinhos-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={filipa} alt="victor" />
            <div className='madrinhas-name'>Filipa</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={joao} alt="bianca" />
            <div className='madrinhas-name'>João</div>
          </div>
        </div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={goncalo} alt="gonçalo" />
            <div className='madrinhas-name'>Gonçalo</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={larise} alt="antonio" />
            <div className='madrinhas-name'>Larise</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={vilaca} alt="clara" />
            <div className='madrinhas-name'>Vilaça</div>
          </div>
        </div>
        <div className='padrinhos-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={fernanda} alt="fernanda" />
            <div className='madrinhas-name'>Fernanda Brandt</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={victor} alt="victor" />
            <div className='madrinhas-name'>Victor Avelar</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Madrinhas