import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    productsList: this.props.products,
    searchedList: this.props.products,
  };

  SearchTheProduct = (input) => {
    if (input === '') {
      this.setState({
        searchedList: this.props.products,
      });
      return;
    }
    const productsCopy = [...this.state.productsList];
    let filteredProducts = productsCopy.filter((product) => {
      return product.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({
      searchedList: filteredProducts,
    });
  };

  checkProductStock = (check) => {
    const productsCopy = [...this.state.searchedList];
    if (check) {
      let stockedProducts = productsCopy.filter(
        (product) => product.stocked === true
      );
      this.setState({
        searchedList: stockedProducts,
      });
    } else {
      this.setState({
        searchedList: this.props.products,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>
          <strong>IronStore</strong>
        </h1>
        <SearchBar
          SearchTheProduct={this.SearchTheProduct}
          checkStock={this.checkProductStock}
        />
        <ProductTable products={this.state.searchedList} />
      </div>
    );
  }
}
