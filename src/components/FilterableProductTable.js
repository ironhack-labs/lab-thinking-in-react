import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    query: '',
    inStock: false,
  };

  setQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  setInStock = (inStock) => {
    this.setState({
      inStock: inStock,
    });
  };

  filteredProducts = () => {
    return this.props.products.filter((product) => {
      return this.state.inStock
        ? product.name.toLowerCase().includes(this.state.query.toLowerCase()) &&
            product.stocked === this.state.inStock
        : product.name.toLowerCase().includes(this.state.query.toLowerCase());

      // // Longer Version:
      //   if (this.state.inStock) {
      //     return (
      //       product.name.toLowerCase().includes(this.state.query.toLowerCase()) &&
      //       product.stocked === this.state.inStock
      //     );
      //   } else {
      //     return product.name
      //       .toLowerCase()
      //       .includes(this.state.query.toLowerCase());
      //   }
    });
  };

  render() {
    return (
      <>
        <h1>IronStore</h1>
        <SearchBar
          query={this.state.query}
          inStock={this.state.inStock}
          setQuery={this.setQuery}
          setInStock={this.setInStock}
        />
        <ProductTable products={this.filteredProducts()} />
      </>
    );
  }
}
