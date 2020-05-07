import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    search: '',
    onlyShowProductsInStock: false,
  };

  setQuery = (search) => {
    this.setState({
      search,
    });
  };

  setInStock = (onlyShowProductsInStock) => {
    this.setState({
      onlyShowProductsInStock,
    });
  };

  render() {
    console.log(this.state.onlyShowProductsInStock);
    return (
      <>
        <SearchBar
          search={this.state.search}
          setQuery={this.setQuery}
          setInStock={this.setInStock}
          onlyShowProductsInStock={this.state.onlyShowProductsInStock}
        />
        <ProductTable
          onlyShowProductsInStock={this.state.onlyShowProductsInStock}
          products={this.state.products}
          search={this.state.search}
        />
      </>
    );
  }
}
