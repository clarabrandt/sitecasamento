import React, { Component } from 'react'
import './Timeline.css'
import festa from './images/festa.jpg'
import alianca from './photos/alianca.jpg'
import alianca2 from './photos/alianca2.jpg'
import civil from './photos/civil.jpg'
import civil2 from './photos/civil2.jpg'
import deserto from './photos/deserto.jpg'
import Slide from 'react-reveal/Slide';


export default class Timeline extends Component {


  render() {

    return (
      <div className="timeline">
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>04 Jan 2017</div>
              <img className='pic--img pic-story' src={festa} width='300' height='433' alt="Party" />
              <div className='timeline-text'>Começo do ano, balada com os amigos. Nos conhecemos na Pensão do amor.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>27 Jan 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Nossa primeira viagem juntos foi pra Alcobaça, ao norte de Lisboa.</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>01 Mai 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Estávamos juntos há um mês e meio (em fevereiro) quando o Tomás recebeu a proposta de emprego Amazon e, em maio, se mudou pra Luxemburgo. Em junho a Sá vou visitá-lo, e em julho se mudou para a casa que dividiriam pelo próximo ano.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>31 Ago 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'> Primeira viagem do Tomás ao Rio de Janeiro. Aprovado pelos amigos da Sá, ainda fizeram uma viagem à São Paulo com as primas dela, sua irmã/cunhado/sobrinho e Tomás encontrou seu grande amigo (e padrinho) Vilhaça que morava lá!</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>Julho 2018</div>
              <img className='pic--img pic-story' src={alianca} width='300' height='433' alt="Party" />
              <div className='timeline-text'>Com a proposta de irmos morar em Dubai veio também o pedido de casamento!</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>21 Set 2018</div>
              <img className='pic--img pic-story' src={civil} width='300' height='433' alt="Party" />
              <div className='timeline-text'>Nosso casamento civil foi em Lisboa, e a família da Sá veio do Brasil para celebrar com a gente. Tivemos uma recepção depois, mas ficou decidido que a festa seria no Rio!</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'> 01 Outubro 2018</div>
              <img className='pic--img pic-story' src={deserto} width='300' height='433' alt="Party" />
              <div className='timeline-text'>Nos mudamos para Dubai. Durou pouco, apenas dois meses, mas foi uma experiência engrandecedora. Pudemos viajar por ali e conhecer um pouco mais sobre a cultura local quando a família do Tomás foi nos visitar.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>12 Dez 2018</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Nos mudamos para Lisboa. Foram 6 meses de reencontros, curtir a família e procurar emprego. Por fim, decidimos que o melhor seria voltarmos para Luxemburgo, onde ambos poderíamos trabalhar.</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'> Maio 2019</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Voltamos para Luxemburgo, ambos começamos a trabalhar e já montamos um cantinho para chamarmos de nosso!</div>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}
