import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    searchValue: '',
  };

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  };

  render() {
    // console.log('props.products', this.props.products);
    return (
      <>
        <h1>IronStore</h1>
        <SearchBar onSearch={this.searchHandler} />
        <ProductTable products={this.props.products} />
      </>
    );
  }
}

export default FilterableProductTable;
