import React, { Component } from 'react'
import './Honeymoon.css'
import safari from './photos/safari.jpg'
// import africa1 from './photos/africa1.jpg'
// import africa2 from './photos/africa2.jpg'
import africa3 from './photos/africa3.jpg'

export default class Honeymoon extends Component {
  render() {
    return (
      <div className='honeymoon'>
        <img className='honeymoon-banner' src={africa3} alt='safari' />
        <div className='honeymoon-content'>
          <div className='gallery-title'>Presentes</div>
          <div className='honeymoon-text'>Como forma de nos presentear, além da presença de vocês, é possível colaborar com nossa lua-de-mel, que acontecerá futuramente na África do Sul!</div>
          <div className='honeymoon-cards'>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={safari} alt='safari' width='250px' height='250px' />
              <div className='honeymoon-card--title'>Jantar na savana para 2</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>€ 80</div>
                <div className='price-real'>R$ 320</div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={safari} alt='safari' width='250px' height='250px' />
              <div className='honeymoon-card--title'>Garrafa de vinho</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>€ 20</div>
                <div className='price-real'>R$ 80</div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={safari} alt='safari' width='250px' height='250px' />
              <div className='honeymoon-card--title'>Safari</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>€ 100</div>
                <div className='price-real'>R$ 400</div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
