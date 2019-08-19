import React, { Component } from 'react'
import Card from './Card'
// import Table from './Table'
import './Honeymoon.css'
import safari from '../photos/honeymoon/safari.jpg'
// import africa1 from './photos/africa1.jpg'
// import africa2 from './photos/africa2.jpg'
import africa3 from '../photos/honeymoon/africa3.jpg'
import hotel1 from '../photos/honeymoon/hotel1.jpeg'
import plane from '../photos/honeymoon/plane.jpeg'
import plane1 from '../photos/honeymoon/plane1.jpeg'
import jantar1 from '../photos/honeymoon/jantar1.jpg'
import bungee from '../photos/honeymoon/bungee.jpg'

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
          <div className='honeymoon-text'>Como forma de nos presentear, além da presença de vocês, é possível colaborar com nossa lua-de-mel, que acontecerá futuramente na África do Sul!</div>
          <div className='honeymoon-cards'>
            <Card title="Passagens aéreas" photo={plane1} number={10} numero={20} euro={120} real={300} />
            <Card title="Diária de hotel em Joanesburgo" photo={hotel1} number={3} numero={5} euro={50} real={150} />
            <Card title="Safari no Kruger Park" photo={safari} number={4} numero={10} euro={40} real={80} />
            <Card title="Jantar na savana para 2" photo={jantar1} number={5} numero={10} euro={40} real={100} />
            <Card title="Degustação de vinhos" photo={hotel1} number={3} numero={10} euro={50} real={75} />
            <Card title="Bungee Jump na Bloukrans Bridge" photo={bungee} number={5} numero={10} euro={40} real={100} />
            <Card title="Jantar na savana para 2" photo={jantar1} number={3} numero={10} euro={40} real={100} />
            <Card title="Diária de hotel em Joanesburgo" photo={hotel1} number={5} numero={5} euro={50} real={150} />
            <Card title="Safari no Kruger Park" photo={safari} number={4} numero={10} euro={40} real={80} />
            <Card title="Safari no Kruger Park" photo={safari} number={4} numero={10} euro={40} real={80} />
            <Card title="Safari no Kruger Park" photo={safari} number={4} numero={10} euro={40} real={80} />
            <Card title="Safari no Kruger Park" photo={safari} number={4} numero={10} euro={40} real={80} />
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  }
}
