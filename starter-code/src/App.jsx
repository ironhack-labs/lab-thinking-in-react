import React, { Component } from 'react';
import products from './data.json';
import './App.css';
import "materialize-css/dist/css/materialize.min.css"

import FiltereableProductTable from './components/FilterableProductTable/FilterableProductTable';
import './components/FilterableProductTable/FilterableProductTable.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <FiltereableProductTable products={ products.data } />
      </div>
    );
  }
}
