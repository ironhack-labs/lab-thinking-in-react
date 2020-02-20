import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/App.css';
import FilterableProductTable from './components/FilterableProductTable'
import data from './data.json'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable products={ data }></FilterableProductTable>

      
      </div>
    );
  }
}
