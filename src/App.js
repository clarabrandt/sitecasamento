import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout.js";
import Madrinhas from "./components/Madrinhas.js";


class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Layout} />
            <Route path="/madrinhas" component={Madrinhas} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
