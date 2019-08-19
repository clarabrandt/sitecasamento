import React, { Component } from 'react'
import "./Content.css"
import Local from './Local'
import Gallery from './Gallery'
import RSVP from './RSVP'
import Couple from './Couple'
import Timeline from './Timeline'
import Counter from './Counter'
import Madrinhas from './Madrinhas'
import Honeymoon from './honeymoon/Honeymoon'
import Banner2 from './Banner2'


export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false
    };
    this.local = React.createRef();
    this.home = React.createRef();
    this.casal = React.createRef();
    this.galeria = React.createRef();
    this.madrinhas = React.createRef();
    this.honeymoon = React.createRef();
    this.rsvp = React.createRef();


    this.goToComponent = this.goToComponent.bind(this);
  }

  componentDidUpdate() {
    this.goToComponent()
  }

  smoothScroll(clicked) {
    clicked.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  goToComponent() {
    if (this.props.clicked === "home") {
      this.smoothScroll(this.top);
    }
    if (this.props.clicked === "casal") {
      this.smoothScroll(this.casal);
    }
    if (this.props.clicked === "galeria") {
      this.smoothScroll(this.galeria);
    }
    if (this.props.clicked === "madrinhas") {
      this.smoothScroll(this.madrinhas);
    }
    if (this.props.clicked === "local") {
      this.smoothScroll(this.local);
    }
    if (this.props.clicked === "honeymoon") {
      this.smoothScroll(this.honeymoon);
    }
    if (this.props.clicked === "rsvp") {
      this.smoothScroll(this.rsvp);
    }
  }



  // onScroll() {
  //   const isTop =
  //     this.layout.current.scrollTop === null ||
  //       this.layout.current.scrollTop <= 0
  //       ? false
  //       : true;
  //   this.setState({
  //     sticky: isTop
  //   });
  // }

  render() {
    return (
      <div className='content'>
        <Couple casal={this.casal} handleClick={this.handleClick} clicked={this.state.clicked} />
        <Timeline />
        <Counter />
        <Local local={this.local} handleClick={this.handleClick} />
        <Banner2 />
        <Madrinhas madrinhas={this.madrinhas} handleClick={this.handleClick} />
        <Gallery galeria={this.galeria} handleClick={this.handleClick} />
        <Honeymoon honeymoon={this.honeymoon} handleClick={this.handleClick} />
        <RSVP rsvp={this.rsvp} handleClick={this.handleClick} />
      </div>
    )
  }
}
