import React, { Component } from 'react'
import './Story2.css'
import festa from './images/festa.jpg'
import Slide from 'react-reveal/Slide';


export default class Story2 extends Component {

  // animateHTML() {
  //   let elems;
  //   let windowHeight;
  //   function checkPosition() {
  //     for (var i = 0; i < elems.length; i++) {
  //       let positionFromTop = elems[i].getBoundingClientRect().top;
  //       if (positionFromTop - windowHeight <= 0) {
  //         elems[i].className = elems[i].className.replace(
  //           'hidden',
  //           'fade-in-element'
  //         );
  //       }
  //     }
  //   }
  //   function init() {
  //     elems = document.querySelectorAll('.hidden');
  //     windowHeight = window.innerHeight;
  //     addEventHandlers();
  //     checkPosition();
  //   }
  //   function addEventHandlers() {
  //     window.addEventListener('scroll', checkPosition);
  //     window.addEventListener('resize', init);
  //   }
  //   return {
  //     init: init

  //   };
  // };

  // debounce(func, wait = 20, immediate = true) {
  //   let timeout;
  //   return function () {
  //     let context = this, args = arguments;
  //     let later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     let callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);

  //     if (callNow) func.apply(context, args);
  //   }
  // }

  // checkSlide(e) {
  //   const sliderImages = document.querySelectorAll('.slide-in')
  //   sliderImages.forEach(sliderImage => {

  //     // halfway through the image
  //     const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
  //     console.log(window.scrollY)
  //     console.log(window.innerHeight)

  //     // bottom of the image 
  //     const imageBottom = sliderImage.offsetTop + sliderImage.height;
  //     console.log(imageBottom)
  //     const isHalfShown = slideInAt > sliderImage.offsetTop;
  //     const isNotScrolledPast = window.scrollY < imageBottom;
  //     if (isHalfShown && isNotScrolledPast) {
  //       sliderImage.classList.add('active')
  //     } else {
  //       sliderImage.classList.remove('active')
  //     }
  //   })
  // }

  render() {
    // this.animateHTML().init();

    // window.addEventListener('scroll', this.debounce(this.checkSlide))
    return (
      <div className="timeline2">
        <div className="container2 left">
          <Slide left>
            <div className="content2">
              <div className='timeline-date date-left'>04 Jan 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container2 right">
          <Slide right>
            <div className="content2">
              <div className='timeline-date'>05 Mai 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container2 left">
          <Slide left>
            <div className="content2">
              <div className='timeline-date date-left'>15 Jul 2017</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container2 right">
          <Slide right>
            <div className="content2">
              <div className='timeline-date'>03 Abril 2018</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container2 left">
          <Slide left>
            <div className="content2">
              <div className='timeline-date date-left'>10 Set 2018</div>
              <img className='pic--img pic-story' src={festa} height='300' width='433' alt="Party" />
              <div className='timeline-text'>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</div>
            </div>
          </Slide>
        </div>
        <div className="container2 right">
          <Slide right>
            <div className="content2">
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
