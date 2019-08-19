import React, { Component } from 'react'
import Card from './Card'
// import Table from './Table'
import './Honeymoon.css'
import safari from '../photos/honeymoon/safari.jpg'
// import africa1 from './photos/africa1.jpg'
// import africa2 from './photos/africa2.jpg'
import africa3 from '../photos/honeymoon/africa3.jpg'
import hotel1 from '../photos/honeymoon/hotel1.jpeg'
import plane1 from '../photos/honeymoon/plane1.jpeg'
import tubarao1 from '../photos/honeymoon/tubarao1.jpeg'
import jantar1 from '../photos/honeymoon/jantar1.jpg'
import bungee from '../photos/honeymoon/bungee.jpg'
import car from '../photos/honeymoon/car2.jpeg'
import cabo from '../photos/honeymoon/cabo.jpeg'

export default class Honeymoon extends Component {
  styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      color: 'green',
    },
    input: {
      display: 'none',
    },
  });
  render() {
    return (
      <div className='honeymoon' ref={this.props.honeymoon}>
        <img className='honeymoon-banner' src={africa3} alt='safari' />
        <div className='honeymoon-content'>
          <div className='component-title'>Presentes</div>
          <div className='honeymoon-text'>Como forma de nos presentear, além da presença de vocês, é possível colaborar com nossa lua-de-mel, que acontecerá futuramente na África!</div>
          <div className='honeymoon-cards'>
            <Card title="Passagens aéreas" photo={plane1} number={10} numero={20} euro={120} real={300} />
            <Card title="Diárias de hotel em Joanesburgo" photo={hotel1} number={5} numero={20} euro={150} real={150} />
            <Card title="Safari" photo={safari} number={4} numero={10} euro={40} real={80} />
            <Card title="Jantar na savana para 2" photo={jantar1} number={5} numero={10} euro={40} real={100} />
            <Card title="Degustação de vinhos" photo={hotel1} number={3} numero={10} euro={50} real={75} />
            <Card title="Bungee Jump Bloukrans Bridge" photo={bungee} number={5} numero={10} euro={40} real={100} />
            <Card title="Jantar na savana para 2" photo={jantar1} number={3} numero={10} euro={40} real={100} />
            <Card title="Diária de hotel em Cape Town" photo={hotel1} number={5} numero={5} euro={50} real={150} />
            <Card title="Aluguel de carro" photo={car} number={10} numero={10} euro={50} real={200} />
            <Card title="Mergulho na jaula com tubarões" photo={tubarao1} number={5} numero={10} euro={60} real={120} />
            <Card title="Ida ao Cabo da Boa Esperança" photo={cabo} number={4} numero={10} euro={40} real={80} />
            <Card title="Diárias de hotel Cidade do Cabo" photo={safari} number={5} numero={150} euro={20} real={150} />
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}
