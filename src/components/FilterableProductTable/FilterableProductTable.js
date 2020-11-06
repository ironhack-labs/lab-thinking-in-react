import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    allProducts: this.props.products,
  };

  filterProducts = (productName) => {
    const filteredProducts = this.state.allProducts.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );

    this.setState({ products: filteredProducts });
  };

  render() {
    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar
          products={this.state.products}
          filterProducts={this.filterProducts}
        />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
