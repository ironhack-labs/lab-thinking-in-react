import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
export default class App extends Component {
  render() {
    return (
      <div className="App">
       <SearchBar />
      </div>
    );
  }
}
