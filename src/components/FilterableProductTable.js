import React, { Component } from 'react';

import products from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(){
    super();
    this.useless= 0;
  }

  render(){
    return (
      <div className="box">
        <SearchBar></SearchBar>
        <ProductTable></ProductTable>
      </div>
    )
  }

}