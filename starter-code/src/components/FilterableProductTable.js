import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

export class FilterableProductTable extends Component {
  state = {
    products: data,
    query: '',
    inStock: false
  };

  setQuery = query => {
      this.setState ({
          query: query
      });
  }

  setCheckbox = status => {
      this.setState ({
          inStock: status
      })
  }

  render() {
    console.log(this.state.query);
    return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"80%"}}>
        <h1 >IronStore</h1>
        <SearchBar setQuery={this.setQuery} query={this.state.query} setCheckbox={this.setCheckbox} inStock={this.state.inStock} />
        <ProductTable products={this.state.products} filter={this.state.query} inStock={this.state.inStock}/>
      </div>
    );
  }
}

export default FilterableProductTable;
