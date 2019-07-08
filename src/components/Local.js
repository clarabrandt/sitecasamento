import React, { Component } from 'react';
import './Local.css'
import igreja from './images/igreja.jpg'
import igreja2 from './images/igreja2.jpg'
import festa from './images/Festa.jpg'
import love from './images/love.svg'
import rings from './images/rings.svg'
import glasses from './images/glasses.svg'


class Local extends Component {
  render() {
    return (
      <div className='local'>
        <div className='local-banner'>
          <div className='local-banner--text'> O grande dia</div>
        </div>
        <div className='local-content'>
          <div className='local-content--banner'>
            <div className='local-content--title'>
              <div className='local-content--title--text'>A CERIMÔNIA</div>
              <div className='local-content--title--icon'><img src={rings} alt="Heart" /></div>
            </div>
            <div className='local-content--details'>
              <div className='local-content--details--block'>
                <div className='local-content--details--title'>Data: </div>
                <div className='local-content--details--info'> 04 de janeiro de 2020</div>
              </div>
              <div className='local-content--details--block'>
                <div className='local-content--details--title'>Hora:</div>
                <div className='local-content--details--info'>19:00 horas</div>
              </div>
              <div className='local-content--details--block'>
                <div className='local-content--details--title'>Local: </div>
                <div className='local-content--details--info'>Paróquina Santa Margarida Maria</div>
              </div>
            </div>
          </div>
          <div className='church'>
            <div className='church-pic'>
              <img className='church-pic--img' src={igreja} height='500' width='600' alt="Church" />
            </div>
            <div className='church-text'>
              <div className='church-text--details'>
              </div>
            </div>
          </div>
          <div className='icons-line'>
            <div className='local-content--title--icon'><img src={love} alt="Heart" /></div>
            <div className='local-content--title--icon'><img src={love} alt="Heart" /></div>
            <div className='local-content--title--icon'><img src={love} alt="Heart" /></div>
          </div>
          <div className='local-content--banner'>
            <div className='local-content--title'>
              <div className='local-content--title--text'>A FESTA</div>
              <div className='local-content--title--icon'><img src={glasses} alt="Heart" /></div>
            </div>
            <div className='local-content--details'>
              <div className='local-content--details--block'>
                <div className='local-content--details--title'>Data: </div>
                <div className='local-content--details--info'> 04 de janeiro de 2020</div>
              </div>
              <div className='local-content--details--block'>
                <div className='local-content--details--title'>Hora:</div>
                <div className='local-content--details--info'>21:00 horas</div>
              </div>
              <div className='local-content--details--block'>
                <div className='local-content--details--title'>Local: </div>
                <div className='local-content--details--info'>Recanto das Palmeiras</div>
              </div>
            </div>
          </div>
          <div className='party'>
            <div className='party-pic'>
              <img className='party-pic--img' src={festa} height='500' width='600' alt="party" />
            </div>
            <div className='party-text'>
              <div className='party-text--details'>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Local