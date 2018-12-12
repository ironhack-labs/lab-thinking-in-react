import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTableItems from './ProductTableItems';

class ProductTable extends Component {
  render() {
    return (
      <div>
      <SearchBar/>
      <ProductTableItems/>

      {this.props.theDataAll}


      </div>
    );
  }
}

export default ProductTable;
