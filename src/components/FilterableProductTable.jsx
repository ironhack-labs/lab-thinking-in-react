import React, { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar.jsx';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    inStock: false,
  };

  handleSearch = (valueSearch) => {
    let filteredProducts;
    if (typeof valueSearch === 'string') {
         filteredProducts = this.props.products.filter((product) =>
        product.name.toLowerCase().includes(valueSearch.toLowerCase())
      );
      this.setState({
        products: filteredProducts,
      });
    } else if (typeof valueSearch === 'boolean') {
          filteredProducts = this.state.products.filter(
        (product) => product.stocked
      );
      this.setState({
        products: filteredProducts,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar handleSearch={this.handleSearch} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
