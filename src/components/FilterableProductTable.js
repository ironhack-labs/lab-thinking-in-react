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

      [name]:value
    });

    //console.log('the query state / my input is:', this.state.query);
  };

 
  render() {
    //console.log(` Imported Products ${[products]}`)
    return (
      <div className= "appBody">
        <h1 className="ironStore">IronStore</h1>
        <p>Search</p>
        <SearchBar  setQuery={this.setQuery} state={this.state}/>
        <ProductTable  products={this.state.products} query={this.state.query} onStock={this.state.onStock} />
      </div>
    );
  }
}
