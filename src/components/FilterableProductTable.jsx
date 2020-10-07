import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
  };

  search = (searchProduct) => {
    const copyproducts = [...this.props.products];

    if (searchProduct.length != 0) {
      const filtered = copyproducts.filter((product) =>
        product.name
          .toLowerCase()
          .slice(0, searchProduct.search.length)
          .includes(searchProduct.search.toLowerCase())
      );
      this.setState({ products: filtered });
    } else {
      const filtered = copyproducts.filter((product) => product);
      this.setState({ products: filtered });
    }
  };

  check = (isCheck) => {
    const copyproducts = [...this.state.products];

    if (isCheck.stock) {
      const productsChecked = copyproducts.filter(
        (product) => product.stocked == isCheck.stock
      );

      this.setState({ products: productsChecked });
    } else {
      this.setState({ products: this.props.products });
    }
  };

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.search} handleStock={this.check} />
        <div>
          <ProductTable products={this.state.products} />
        </div>
      </div>
    );
  }
}
