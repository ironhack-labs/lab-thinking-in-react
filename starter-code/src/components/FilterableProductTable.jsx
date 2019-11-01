import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json';

class FilterableProductTable extends Component {
  state = {
    products: data.data,
    filteredProducts: []
  };

  searchBarChangeHandler = text => {
    let copyArr = this.state.products.filter(product =>
      product.name.includes(text)
    );
    this.setState({
      filteredProducts: copyArr
    });
  };

  render() {
    return (
      <div>
        <SearchBar changeHandler={this.searchBarChangeHandler}></SearchBar>
        {this.state.filteredProducts.length ? ( //evaluates to true if length > 0
          <ProductTable productsToShow={this.state.filteredProducts} />
        ) : (
          <ProductTable productsToShow={this.state.products} />
        )}
      </div>
    );
  }
}

export default FilterableProductTable;
