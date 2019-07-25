import React, { Component } from 'react'
import './Couple.css'
import sa from './photos/Sa.jpg'
import tomas from './photos/Tomas.jpg'
import love from './images/love.svg'

export default class Couple extends Component {
  render() {
    return (
      <div className='couple'>
        <div className='couple-title'>
          <div>Nossa</div>
          <img className='heart-icon--couple' src={love} width="60" height="50" alt="Heart" />
          <div>história</div>
        </div>
        <div className='couple-content'>
          <div className='couple-details'>
            <img className='couple-img' src={sa} alt="couple" />
            <div className='couple-name'>Sabrina Brandt</div>
          </div>
          <div className='couple-text'>Sá, carioca, menina da praia. Resolveu que queria mudar um pouco os ares e, em 2016, foi fazer uma pós em Lisboa. Uma não, duas! Não sabia que, outra vez, sua vida mudaria por completo depois do reveillon de 2017. Tomás e Sá se conheceram, e a vida foi só emoção desde então!</div>
          <div className='couple-details'>
            <img className='couple-img' src={tomas} alt="couple" />
            <div className='couple-name'>Tomás Eiró</div>
          </div>
        </div>

      </div>
    )
  }
}
