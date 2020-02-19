import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from "./data.json"
import Main from "./components/Main";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Main products={data}/>
      </div>
    );
  }
}
