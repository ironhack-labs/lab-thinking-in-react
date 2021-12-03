import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Search from './components/SearchBar/SearchBar'
import Products from './components/ProductsTable/ProductsTable'
import FilterableProductTable from './components/FilterableProductTable';


class App extends Component {
    constructor() {
      super()

      this.state = {
        data: data.data,
      }
    }

    render() {

      return (
        <FilterableProductTable products={data.data} />
      );
    }
}


export default App;
