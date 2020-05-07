import React, { Component } from 'react';
import './App.css';
import Data from '../data.json';
import FilterTable from './filterableProductTable/FilterableProductTable';

export default class App extends Component {
  render() {

    return (
      <div className="container">
        <FilterTable products={Data.data}></FilterTable>
      </div>
    );
  }
}
