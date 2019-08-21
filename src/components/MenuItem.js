import React, { Component } from "react";
import "./MenuItem.css";

export default class MenuItem extends Component {
  render() {
    return (
      <div className="menu--item--style">
        <div
          style={{ textDecoration: "none" }}
          className="menu--item"
          to={this.props.anchor}
          onClick={() => this.props.handleClick(this.props.anchor)}
        >
          <div className="menu-item--name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}