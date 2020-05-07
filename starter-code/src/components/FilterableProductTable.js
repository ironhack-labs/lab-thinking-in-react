import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable ';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    search: '',
    inStock: false,
  };

  triggerSearch = (val) => {
    this.setState({
      search: val,
    });
  };

  triggerChecked = (val) => {
    this.setState({
      inStock: val,
    });
  };

  render() {
    return (
      <>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          triggerSearch={this.triggerSearch}
          checked={this.state.inStock}
          triggerChecked={this.triggerChecked}
        />
        <ProductTable
          products={this.state.products}
          search={this.state.search}
          stocked={this.state.inStock}
        />
      </>
    );
  }
}

export default FilterableProductTable;
