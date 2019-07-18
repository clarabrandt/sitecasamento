import React, { Component } from 'react'
import './Local.css'
// import love from './images/love.svg'
import rings from './images/rings.svg'
import glasses from './images/glasses.svg'
import igreja from './images/igreja.jpg'
import festa from './images/festa.jpg'



export default class Local extends Component {
  render() {
    return (
      <div className='local'>
        <div className='local-content'>
          <div className='church'>
            <div className='local-banner'>
              <div className='local-banner--title'>
                <div className='local-banner--title-text'>A CERIMÔNIA</div>
                <div className='local-banner--title-icon'><img src={rings} alt="Heart" /></div>
              </div>
            </div>
            <div className='details'>
              <div className='local-details--block'>
                <div className='local-details--title'>DATA: </div>
                <div className='local-details--info'> 04/01/2020</div>
              </div>
              <div className='local-details--block'>
                <div className='local-details--title'>HORA: </div>
                <div className='local-details--info'> 19 horas</div>
              </div>
              <div className='local-details--block'>
                <div className='local-details--title'>LOCAL: </div>
                <div className='local-details--info'> Paróquina Santa Margarida Maria</div>
              </div>
            </div>
            <div className='pic'>
              <img className='pic--img' src={igreja} height='200' width='200' alt="Church" />
            </div>
          </div>
          <div className='party'>
            <div className='local-banner'>
              <div className='local-banner--title'>
                <div className='local-banner--title-text'>A FESTA</div>
                <div className='local-banner--title-icon'><img src={glasses} alt="Heart" /></div>
              </div>
            </div>
            <div className='details'>
              <div className='local-details--block'>
                <div className='local-details--title'>DATA:</div>
                <div className='local-details--info'>04 de janeiro de 2020</div>
              </div>
              <div className='local-details--block'>
                <div className='local-details--title'>HORA:</div>
                <div className='local-details--info'>21 horas</div>
              </div>
              <div className='local-details--block'>
                <div className='local-details--title'>LOCAL:</div>
                <div className='local-details--info'>RECANTO DAS PALMEIRAS</div>
              </div>
            </div>
            <div className='pic'>
              <img className='pic--img' src={festa} height='200' width='200' alt="Party" />
            </div>
          </div>
          <div className='map'>
            <img className='pic--img' src={festa} height='400' width='400' alt="Church" />
          </div>
        </div>
      </div>
    )
  }
}
