import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

export default class App extends Component {
  state = {
    query: ''
  };

  setQuery = query => {
    this.setState({
      query: query
    });
  };

  render() {
    console.log(typeof data);
    return (
      <div className="App">
        <h1>IRON STORE</h1>
        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}
