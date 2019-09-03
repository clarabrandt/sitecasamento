import React, { Component } from 'react'
import "./Layout.css";
import Banner from './Banner'
import Content from './Content'
import Menu from './menu/Menu'
import MenuDropdown from './menu/MenuDropdown'

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: "home",
      isSmall: false,
      isFullScreen: false,
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

  // goToTop() {
  //   if (this.props.clicked === "arrow") {
  //     this.smoothScroll(this.top);
  //   }
  // }

  handleClick(clicked) {
    this.setState({
      clicked
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let screenSize = window.innerWidth;

    this.setState({
      isFullScreen: screenSize >= 760,
      isMobile: screenSize <= 760
    });
  }

  render() {
    return (
      <div className='layout'>
        <Banner />
        {this.state.isFullScreen &&
          <Menu handleClick={this.handleClick} />
        }
        {this.state.isMobile &&
          <MenuDropdown handleClick={this.handleClick} />
        }
        <Content clicked={this.state.clicked} />
      </div>
    )
  }
}


export default Layout