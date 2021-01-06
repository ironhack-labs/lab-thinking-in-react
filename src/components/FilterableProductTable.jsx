import React, { Component } from 'react';
import ProductTable from './ProductTable ';
import SearchBar from './SearchBar ';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.productsFromApp,
    filteredProducts: this.props.productsFromApp,
  };

  handleSearch = (event) => {
    this.setState({
      filteredProducts: this.state.products.filter((produit) => {
        return produit.name.includes(event.target.value);
      }),
    });
  };

  render() {
    console.log(this.state.products);
    console.log(this.state.filteredProducts);
    return (
      <div className="motherContent">
        <h1>IronStore</h1>
        <SearchBar handleSearchFromParent={this.handleSearch} />
        <ProductTable productsFromFilter={this.state.filteredProducts} />
      </div>
    );
  }
}
