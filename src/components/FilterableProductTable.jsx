import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
  };

  search = (product) => {
    const copyproducts = [...this.state.products.data];
    console.log(copyproducts);
    copyproducts.includes(product);
    this.setState({ product: copyproducts });
  };

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.search} />
        <div>
          <ProductTable products={this.props.products} />
        </div>
      </div>
    );
  }
}
