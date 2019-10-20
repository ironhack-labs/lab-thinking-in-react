/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import '../App.css';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.allProducts = this.props.products.data;
    this.state = {
      productsList: this.allProducts,
      search: '',
      checked: true
    }
    this.searchProducts = this.searchProducts.bind(this);
    this.checkedProducts = this.checkedProducts.bind(this);
  }

  searchProducts(e) {
    const productsCopy = [...this.allProducts];
    let { value } = e.target;
    let result = productsCopy.filter(e => e.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      productsList: result,
      search: value
    });
  }

  checkedProducts(e) {
    const productsCopy = [...this.allProducts];
    let result;
    if (this.state.checked) {
      result = productsCopy.filter(e => e.stocked)
      this.setState({
        checked: !this.state.checked,
        productsList: result
      });
    } else {
      this.setState({
        checked: !this.state.checked,
        productsList: productsCopy
      });
    }
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar checkedProducts={this.checkedProducts} search={this.state.search} searchProducts={this.searchProducts} />
        <ProductTable productsList={this.state.productsList} />
      </div>
    )
  }
}

export default FilterableProductTable;