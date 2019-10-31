import React, { Component } from 'react';
import Searchbar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  render() {
    return (
      <div>
        <Searchbar />
        <ProductTable />
      </div>
    );
  }
}

export default FilterableProductTable;
