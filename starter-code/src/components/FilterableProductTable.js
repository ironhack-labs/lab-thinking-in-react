import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar /> 
        <ProductTable product={this.props.products.data}/>
      </div>
    );
  }
}

export default FilterableProductTable;