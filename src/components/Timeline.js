import React, { Component } from 'react'
import './Timeline.css'
import varandinha from './photos/gallery/lux.jpg'
import Slide from 'react-reveal/Slide';


export default class Timeline extends Component {


  render() {

    return (
      <div className="timeline">
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>04 Jan 2017</div>

              <div className='timeline-text'>Começo do ano, balada com os amigos. Nos conhecemos na Pensão do amor.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>27 Jan 2017</div>

              <div className='timeline-text'>Nossa primeira viagem juntos foi pra Alcobaça, ao norte de Lisboa. Mal sabíamos que seria a primeira de muuuuitas!</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>01 Mai 2017</div>
              <img className='pic--img pic-story' src={varandinha} width='300' height='433' alt="Terrace" />
              <div className='timeline-text'>Estávamos juntos há um mês e meio (em fevereiro) quando o Tomás recebeu a proposta de emprego da Amazon e, em maio, se mudou pra Luxemburgo. Em junho a Sá foi visitá-lo, e em julho se mudou para a casa que dividiriam pelo próximo ano.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>31 Ago 2017</div>
              <img className='pic--img pic-story' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/cristo.d45c6469.jpeg' height='433' width='320' alt="Cristo" />
              <div className='timeline-text'> Primeira viagem do Tomás ao Rio de Janeiro. Aprovado pelos amigos da Sá, ainda fizeram uma viagem a São Paulo com as primas dela, sua irmã/cunhado/sobrinho e Tomás encontrou seu grande amigo (e padrinho) Vilhaça que morava lá!</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>Julho 2018</div>
              <img className='pic--img pic-story' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/alianca.b81c53e2.jpg' width='300' height='433' alt="Ring" />
              <div className='timeline-text'>Com a proposta de irmos morar em Dubai veio também o pedido de casamento!</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>21 Set 2018</div>
              <img className='pic--img pic-story' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/civil.fa6e4fe9.jpg' width='300' height='433' alt="Wedding" />
              <div className='timeline-text'>Nosso casamento civil foi em Lisboa, e a família da Sá veio do Brasil para celebrar com a gente. Tivemos uma bela recepção organizada pela família do Tommy, mas ficou decidido que faríamos outra festa no Rio!</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'> 01 Outubro 2018</div>
              <img className='pic--img pic-story' src='https://picscasamentosaetomas.s3-sa-east-1.amazonaws.com/camelo.76a20ea1.jpeg' width='433' height='390' alt="Dubai" />
              <div className='timeline-text'>Nos mudamos para Dubai. Durou pouco, apenas dois meses, mas foi uma experiência engrandecedora. Pudemos viajar por ali e conhecer um pouco mais sobre a cultura local quando a família do Tomás foi nos visitar.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>12 Dez 2018</div>

              <div className='timeline-text'>Voltamos para Lisboa. Foram 6 meses de reencontros, curtir a família e procurar emprego. Por fim, decidimos que o melhor seria voltarmos para Luxemburgo, onde ambos poderíamos trabalhar.</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'> Maio 2019</div>

              <div className='timeline-text'>Voltamos para Luxemburgo, ambos começamos a trabalhar e já montamos um cantinho para chamarmos de nosso!</div>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}
