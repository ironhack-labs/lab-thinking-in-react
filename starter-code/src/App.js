import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}

export default App;
