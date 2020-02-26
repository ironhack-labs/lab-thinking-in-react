import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import {data} from '../data.json';

class FilterableProductTable extends Component {
  render() {
    return (
      <div className="Filterable">
        <h1>Iron Store</h1>
        <SearchBar /> 
        <ProductTable  products = { data }/> 
      </div>
    );
  }
}

export default FilterableProductTable;