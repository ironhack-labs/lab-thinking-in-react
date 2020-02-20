import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IronStore from './components/IronStore';
import data from './data.json';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <IronStore products={data}></IronStore>
      </div>
    );
  }
}
