import React, {Component} from 'react';
import data from './data.json';
import './App.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;