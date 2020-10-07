import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>IronStore</h1>
        <Searchbar />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
