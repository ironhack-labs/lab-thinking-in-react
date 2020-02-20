import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import 'bulma/css/bulma.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}
