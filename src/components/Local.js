import React, { Component } from 'react'
import './Local.css'
// import love from './images/love.svg'
import rings from './svg/rings.svg'
import glasses from './svg/glasses.svg'


export default class Local extends Component {
  render() {
    return (
      <div className='local' ref={this.props.local}>
        <div className='component-title'>Data e Local</div>
        <div className='local-text'>O casamento será no dia 04 de janeiro de 2020, às 18:30 horas, na Igreja Santa Margarida Maria, seguido pela festa no Solar das Palmeiras.</div>
        <div className='local-content'>
          <div className='church'>
            <div className='local-banner'>
              <div className='local-banner--title'>
                <div className='local-banner--title-text'>CERIMÔNIA</div>
                <div className='local-banner--title-icon'><img src={rings} alt="Heart" /></div>
              </div>
            </div>
            <div className='pic'>
              <img className='pic--img' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/igreja.54e930ac.jpg' height='300' width='300' alt="Church" />
            </div>
            <div className='end'>Endereço: Rua Frei Solano, 23. Lagoa</div>
          </div>
          <div className='party'>
            <div className='local-banner'>
              <div className='local-banner--title'>
                <div className='local-banner--title-text'>FESTA</div>
                <div className='local-banner--title-icon'><img src={glasses} alt="Heart" /></div>
              </div>
            </div>
            <div className='pic'>
              <img className='pic--img' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/festa.c96ca58f.jpg' height='300' width='300' alt="Party" />
            </div>
            <div className='end'>Endereço: R. das Palmeiras, 35. Botafogo.</div>
          </div>
          {/*<div className='map'>
            <img className='pic--img' src={festa} height='400' width='400' alt="Church" />
    </div>*/}
        </div>
      </div>
    )
  }
}
