import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    searchValue: '',
    checked: false,
  };

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase() });
  };

  render() {
    // console.log('props.products', this.props.products);

    const filteredProducts = this.props.products.filter((filteredProduct) => {
      console.log('filteredProduct', filteredProduct);

      return filteredProduct.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    return (
      <>
        <h1>IronStore</h1>
        <SearchBar onSearch={this.searchHandler} />
        <ProductTable products={filteredProducts} />
      </>
    );
  }
}

export default FilterableProductTable;
