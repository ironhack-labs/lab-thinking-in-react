import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableTable from  './components/home/FilterableTable'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableTable/>
      </div>
    );
  }
}

export default App;
