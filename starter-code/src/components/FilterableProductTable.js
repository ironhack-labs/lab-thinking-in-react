import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor(props){
    super(props);
    this.state = {products: props.products};
  }

  render() {
    return (
      <div className="Filterable">
        <h1>IronStore</h1>
        <SearchBar /> 
        <ProductTable  products={this.state.products}/>
      </div>
    );
  }
}

export default FilterableProductTable;