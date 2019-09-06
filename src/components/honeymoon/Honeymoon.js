import React, { Component } from 'react'
import Card from './Card'
// import Table from './Table'
import './Honeymoon.css'

const gifts = [
  {
    title: "Passagens aéreas",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/plane1.jpeg',
    number: 10,
    numero: 20,
    euro: 120,
    real: 300,
  },
  {
    title: "Diárias de hotel",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/hotel1.609b8810.jpeg',
    number: 5,
    numero: 25,
    euro: 150,
    real: 150,
  },
  {
    title: "Safari",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/safari.jpg',
    number: 4,
    numero: 10,
    euro: 40,
    real: 80,
  },
  {
    title: "Jantar na savana para 2",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/jantar1.e1d29d7b.jpg',
    number: 5,
    numero: 10,
    euro: 40,
    real: 100,
  },
  {
    title: "Degustação de vinhos",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/vinho_degu.jpeg',
    number: 3,
    numero: 10,
    euro: 50,
    real: 75,
  },
  {
    title: "Bungee Jump",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/bungee.jpg',
    number: 5,
    numero: 10,
    euro: 40,
    real: 100,
  },
  {
    title: "Passeio de balão",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/balao.jpg',
    number: 5,
    numero: 10,
    euro: 100,
    real: 250,
  },
  {
    title: "Passeio pra ver pinguins",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/penguins.jpeg',
    number: 4,
    numero: 5,
    euro: 25,
    real: 100,
  },
  {
    title: "Aluguel de carro",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/car2.jpeg',
    number: 10,
    numero: 10,
    euro: 50,
    real: 250,
  },
  {
    title: "Mergulho com tubarões",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/tubarao1.jpeg',
    number: 5,
    numero: 10,
    euro: 60,
    real: 150,
  },
  {
    title: "Cabo da Boa Esperança",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/cabo.jpeg',
    number: 4,
    numero: 10,
    euro: 40,
    real: 80,
  },
  {
    title: "Robben Island",
    photo: 'https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/mandela.jpeg',
    number: 1,
    numero: 5,
    euro: 100,
    real: 100,
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
        <img className='honeymoon-banner' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/africa3.4d961bf1.jpg' alt='safari' />
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
