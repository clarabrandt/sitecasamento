import React, { Component } from 'react'
import './Timeline.css'
import festa from './images/festa.jpg'
import Slide from 'react-reveal/Slide';


export default class Timeline extends Component {


  render() {

    return (
      <div className="timeline">
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>04 Jan 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>05 Mai 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>15 Jul 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>03 Abril 2018</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container left">
          <Slide left>
            <div className="history-content">
              <div className='timeline-date date-left'>10 Set 2018</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container right">
          <Slide right>
            <div className="history-content">
              <div className='timeline-date'>02 Fev 2019</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
      </div>
    )
  }
}
