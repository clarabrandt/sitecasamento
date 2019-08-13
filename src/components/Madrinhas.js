import React, { Component } from 'react';
import './Madrinhas.css'
import clara from './photos/madrinhas/eu.jpg'
import bianca from './photos/madrinhas/bianca.jpg'
import larise from './photos/madrinhas/larise.jpg'
import filipa from './photos/madrinhas/filipa.jpg'
import fernanda from './photos/madrinhas/fernanda.jpeg'
import victor from './photos/padrinhos/victor.jpg'
import vilaca from './photos/padrinhos/vilaca.jpg'
import ashish from './photos/padrinhos/ashish.jpg'
import amanda from './photos/madrinhas/amanda.jpg'
import lucas from './photos/pajens/lucas.jpg'
import davi from './photos/pajens/davi.jpg'
import antonio2 from './photos/padrinhos/Antonio2.JPG'
import joao from './photos/padrinhos/joao.JPG'
import theo2 from './photos/pajens/theo2.jpeg'
import goncalo from './photos/padrinhos/goncalo.png'

class Madrinhas extends Component {
  render() {
    return (
      <div className='madrinhas'>
        <div className='component-title'>Pajem, Madrinhas e Padrinhos</div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={theo2} alt="theo" />
            <div className='madrinhas-name'>Theo</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={lucas} alt="amanda" />
            <div className='madrinhas-name'>Lucas</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={davi} alt="antonio" />
            <div className='madrinhas-name'>Davi</div>
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
            <div className='padrinhos-name'>Gonçalo</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={larise} alt="antonio" />
            <div className='madrinhas-name'>Larise</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={vilaca} alt="clara" />
            <div className='padrinhos-name'>Vilaça</div>
          </div>
        </div>
        <div className='padrinhos-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={fernanda} alt="fernanda" />
            <div className='madrinhas-name'>Fernanda</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src={victor} alt="victor" />
            <div className='madrinhas-name'>Victor</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Madrinhas