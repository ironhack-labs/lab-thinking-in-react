import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
    
  state = {
    filter: this.props.products,
    // data: this.props.products,
  };
  render() {
    return (
      <div className="FilterableProductTable">
        <p>hello</p>
        <SearchBar />
        <ProductTable products={this.state.filter}/>
      </div>
    );
  }
}
