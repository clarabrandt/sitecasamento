import React, { Component } from 'react';
import './Madrinhas.css'

class Madrinhas extends Component {
  render() {
    return (
      <div className='madrinhas' ref={this.props.madrinhas}>
        <div className='component-title'>Pajem, Madrinhas e Padrinhos</div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/theo2.f3c937f3.jpeg' alt="theo" />
            <div className='madrinhas-name'>Theo</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/lucas.95279ab7.jpg' alt="amanda" />
            <div className='madrinhas-name'>Lucas</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/davi.2f5699ab.jpg' alt="antonio" />
            <div className='madrinhas-name'>Davi</div>
          </div>
        </div>
        <div div className='padrinhos-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/amanda.757e1e87.jpg' alt="amanda" />
            <div className='madrinhas-name'>Amanda</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/Antonio2.20d13943.jpeg' alt="antonio" />
            <div className='madrinhas-name'>António</div>
          </div>
        </div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/bianca.c6a0b18d.jpg' alt="bianca" />
            <div className='madrinhas-name'>Bianca</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/ashish.96bb412c.jpg' alt="ashish" />
            <div className='madrinhas-name'>Ashish</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/eu.e0631a90.jpg' alt="amanda" />
            <div className='madrinhas-name'>Clara</div>
          </div>
        </div>
        <div className='padrinhos-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/filipa.a8c546cc.jpg' alt="victor" />
            <div className='madrinhas-name'>Filipa</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/joao.7faab38f.jpeg' alt="joao" />
            <div className='madrinhas-name'>João</div>
          </div>
        </div>
        <div className='madrinhas-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/goncalo.6037b0dd.png' alt="gonçalo" />
            <div className='padrinhos-name'>Gonçalo</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/larise.db7bd52b.jpg' alt="larise" />
            <div className='madrinhas-name'>Larise</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/vilaca.55914c36.jpg' alt="vilaca" />
            <div className='padrinhos-name'>Vilaça</div>
          </div>
        </div>
        <div className='padrinhos-content'>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/fernanda.a47109cd.jpeg' alt="fernanda" />
            <div className='madrinhas-name'>Fernanda</div>
          </div>
          <div className='madrinhas-each'>
            <img className='madrinhas-photo' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/victor.3aef2294.jpg' alt="victor" />
            <div className='madrinhas-name'>Victor</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Madrinhas