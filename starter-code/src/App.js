import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FilterableProductTable products={ data.data } />
      </div>
    );
  }
}

export default App;
