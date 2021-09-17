import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar';

import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
  };

  filterProducts = ({ name, showOnlyInStock }) => {
    const filteredProducts = this.props.products.filter((product) => {
      const isProductNameIncludes = product.name
        .toLowerCase()
        .includes(name.toLowerCase());
      const hasStock = product.stocked;

      return showOnlyInStock
        ? isProductNameIncludes && hasStock
        : isProductNameIncludes;
    });

    this.setState({ products: filteredProducts });
  };
  render() {
    return (
      <>
        <SearchBar filterProducts={this.filterProducts} />
        <ProductTable products={this.state.products} />
      </>
    );
  }
}

export default FilterableProductTable;
