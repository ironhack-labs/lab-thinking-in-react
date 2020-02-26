import React, { Component } from 'react';
import FirstBox from './Components/FirstBox';
import data from '../src/data.json'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FirstBox products={ data } />
      </div>
    );
  }
}

