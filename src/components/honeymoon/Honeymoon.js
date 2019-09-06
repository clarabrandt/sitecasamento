import React, { Component } from 'react'
import Card from './Card'
// import Table from './Table'
import './Honeymoon.css'
import safari from '../photos/honeymoon/safari.jpg'
import africa3 from '../photos/honeymoon/africa3.jpg'
import hotel1 from '../photos/honeymoon/hotel1.jpeg'
import plane1 from '../photos/honeymoon/plane1.jpeg'
import tubarao1 from '../photos/honeymoon/tubarao1.jpeg'
import jantar1 from '../photos/honeymoon/jantar1.jpg'
import balao from '../photos/honeymoon/balao.jpg'
import bungee from '../photos/honeymoon/bungee.jpg'
import car from '../photos/honeymoon/car2.jpeg'
import mandela from '../photos/honeymoon/mandela.jpeg'
import vinho from '../photos/honeymoon/vinho_degu.jpeg'
import cabo from '../photos/honeymoon/cabo.jpeg'

const gifts = [
  {
    id: 1,
    title: "Passagens aéreas",
    photo: plane1,
    number: 10,
    numero: 20,
    euro: 120,
    real: 300,
  },
  {
    id: 2,
    title: "Diárias de hotel",
    photo: hotel1,
    number: 5,
    numero: 25,
    euro: 150,
    real: 150,
  },
  {
    id: 3,
    title: "Uba Tuba rão",
    photo: tubarao1,
    number: 5,
    numero: 25,
    euro: 150,
    real: 150,
  },
]

export default class Honeymoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts
    }
  }

  styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      color: 'green',
    },
    input: {
      display: 'none',
    },
  });

  changeAmount(idx) {
    this.setState({
      gifts: [
        ...this.state.gifts,
      ]
    })
  }

  render() {
    return (
      <div className='honeymoon' ref={this.props.honeymoon}>
        <img className='honeymoon-banner' src={africa3} alt='safari' />
        <div className='honeymoon-content'>
          <div className='component-title'>Presentes</div>
          <div className='honeymoon-text'>Como forma de nos presentear, além da presença de vocês, é possível colaborar com nossa lua-de-mel, que acontecerá futuramente na África!</div>
          <div className='honeymoon-cards'>
            {
              this.state.gifts.map((gift) => {
                return (
                  <Card title={gift.title} photo={gift.photo} number={gift.number} numero={gift.numero} euro={gift.euro} real={gift.real} />
                )
              })
            }
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}
