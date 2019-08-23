import React, { Component } from 'react'
import "./Layout.css";
import Banner from './Banner'
import Content from './Content'
import Menu from './Menu'

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: "home",
    };

    this.handleClick = this.handleClick.bind(this);
    // this.goToTop = this.goToTop.bind(this);
    this.smoothScroll = this.smoothScroll.bind(this);
    this.top = React.createRef();
  }

  // componentDidUpdate() {
  //   this.goToTop()()
  // }

  smoothScroll(clicked) {
    clicked.current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  }

  goToTop() {
    if (this.props.clicked === "arrow") {
      this.smoothScroll(this.top);
    }
  }

  handleClick(clicked) {
    this.setState({
      clicked
    });

  }
  render() {
    return (
      <div className='layout' ref={this.top}>
        <Banner />
        <Menu handleClick={this.handleClick} />
        <Content clicked={this.state.clicked} goToTop={this.goToTop} />
      </div>
    )
  }
}


export default Layout