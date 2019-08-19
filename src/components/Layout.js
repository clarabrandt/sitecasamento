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

  }


handleClick(clicked) {
  this.setState({
    clicked
  });
  


  render() {
    return (
      <div className='layout'>
        <Banner />
        <Menu handleClick={this.handleClick} />
        <Content clicked={this.state.clicked} />
      </div>
    )
  }
}


export default Layout