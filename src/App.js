import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.js";
import Madrinhas from "./components/Madrinhas.js";
import Local from "./components/Local.js";
import Gallery from "./components/Gallery.js";


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Layout} />
            <Route path="/madrinhas" component={Madrinhas} />
            <Route path="/local" component={Local} />
            <Route path="/galeria" component={Gallery} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
