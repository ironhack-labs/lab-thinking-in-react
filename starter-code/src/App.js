import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'

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



