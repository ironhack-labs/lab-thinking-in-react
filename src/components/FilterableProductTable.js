import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable.js';
import data from '../data.json';
import { v4 as uuid } from 'uuid';

const products = data.data.map((product) => ({ ...product, id: uuid() }));

export default class FilterableProductTable extends Component {
  state = {
    products: products,
    query: '',
    onStock:false,
  };
  setQuery = (name, value) => {
    this.setState({
      //query: query,
      onStock: false,
      [name]:value
    });

    //console.log('the query state / my input is:', this.state.query);
  };

 
  render() {
    //console.log(` Imported Products ${[products]}`)
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar query={this.state.query} setQuery={this.setQuery} onStock={this.props.checked} />
        <ProductTable products={this.state.products} query={this.state.query} onStock={this.props.checked} />
      </div>
    );
  }
}
