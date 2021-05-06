import React, { Component } from 'react'
import './App.css';
import jsondata from './data.json'
import FilterableProductTable from './components/FilterableProductTable';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronStore</h1>
          <FilterableProductTable products={ jsondata.data } />
        </header>
      </div>
    );
  }
}