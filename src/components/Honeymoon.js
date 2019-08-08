import React, { Component } from 'react'
import './Honeymoon.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import safari from './photos/safari.jpg'
// import africa1 from './photos/africa1.jpg'
// import africa2 from './photos/africa2.jpg'
import africa3 from './photos/africa3.jpg'
import hotel1 from './photos/hotel1.jpeg'
import plain from './photos/plain.jpeg'
import plain1 from './photos/plain1.jpeg'
import jantar1 from './photos/jantar1.jpg'
import bungee from './photos/bungee.jpg'

export default class Honeymoon extends Component {
  styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
  render() {
    const { classes } = this.props;
    return (
      <div className='honeymoon'>
        <img className='honeymoon-banner' src={africa3} alt='safari' />
        <div className='honeymoon-content'>
          <div className='component-title'>Presentes</div>
          <div className='honeymoon-text'>Como forma de nos presentear, além da presença de vocês, é possível colaborar com nossa lua-de-mel, que acontecerá futuramente na África do Sul!</div>
          <div className='honeymoon-cards'>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={plain1} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Passagens aéreas</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>10 quotas de</div>
                  <div className='price-value'>€ 120</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>20 quotas de</div>
                  <div className='price-value'>R$ 300</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={hotel1} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Diária de hotel em Joanesburgo</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>3 quotas de</div>
                  <div className='price-value'>€ 50</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>5 quotas de</div>
                  <div className='price-value'>R$ 150</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={safari} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Safari no Kruger Park</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>4 quotas de</div>
                  <div className='price-value'>€ 40</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>10 quotas de</div>
                  <div className='price-value'>R$ 80</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
          </div>
          <div className='honeymoon-cards'>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={jantar1} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Jantar na savana para 2</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>5 quotas de</div>
                  <div className='price-value'>€ 40</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>10 quotas de</div>
                  <div className='price-value'>R$ 100</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={hotel1} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Degustação de vinhos</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'> 3 quotas de</div>
                  <div className='price-value'>€ 50</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>10 quotas de</div>
                  <div className='price-value'>R$ 75</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={bungee} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Bungee Jump na Bloukrans Bridge</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>5 quotas de</div>
                  <div className='price-value'>€ 40</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>10 quotas de</div>
                  <div className='price-value'>R$ 100</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
          </div>
          <div className='honeymoon-cards'>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={jantar1} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Jantar na savana para 2</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>5 quotas de</div>
                  <div className='price-value'>€ 40</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>10 quotas de</div>
                  <div className='price-value'>R$ 100</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={hotel1} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Diária de hotel em Joanesburgo</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>3 quotas de</div>
                  <div className='price-value'>€ 50</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>5 quotas de</div>
                  <div className='price-value'>R$ 150</div>
                </div>
              </div>
              <div className='honeymoon-card--button'>
                <button className='button-euro'>comprar</button>
                <button className='button-real'>comprar</button>
              </div>
            </div>
            <div className='honeymoon-card'>
              <img className='honeymoon-card--pic' src={safari} alt='safari' width='300px' height='250px' />
              <div className='honeymoon-card--title'>Safari no Kruger Park</div>
              <div className='honeymoon-card--price'>
                <div className='price-euro'>
                  <div className='price-text'>4 quotas de</div>
                  <div className='price-value'>€ 40</div>
                </div>
                <div className='price-real'>
                  <div className='price-text'>10 quotas de</div>
                  <div className='price-value'>R$ 80</div>
                </div>
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
