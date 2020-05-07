import React, { Component } from 'react';
import './App.css';
import Data from '../data.json';
import FilterTable from './filterableProductTable/FilterableProductTable';

export default class App extends Component {
  render() {
    return <FilterTable products={Data.data} ></FilterTable>;
  }
}
