import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
  };

  searchProduct = (data) => {
    let filteredProducts = this.props.products.data.filter((product) =>
      product.name.toLowerCase().includes(data.searchbar.toLowerCase())
    );
    if (data.inStock)
      filteredProducts = filteredProducts.filter(
        (product) => product.stocked === true
      );
    this.setState({
      products: filteredProducts,
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <Searchbar searchProduct={this.searchProduct} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
