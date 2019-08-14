import React, { Component } from 'react'
import "./Layout.css";
import Banner from './Banner'
import Content from './Content'
import Menu from './Menu'

class Layout extends Component {

  render() {
    return (
      <div className='layout'>
        <Banner />
        <Menu />
        <Content />
      </div>
    )
  }
}


export default Layout