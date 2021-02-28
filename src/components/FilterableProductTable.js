import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import React, { Component } from 'react';

export default class FilterableProductTable extends Component {
  state = {
    search: '',
    stocked: false,
  };

  handleSearch = (event) => {
    console.log(`loggin value`, event);

    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const matchStock = (product) => {
      if (this.state.stocked) {
        return product.stocked === true;
      } else {
        return true;
      }
    };

    const matchSearch = (product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    };

    const filteredProducts = this.props.products.filter((product) => {
      return matchSearch(product) && matchStock(product);
    });
    // console.log(filteredProducts);

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar state={this.state} handleInput={this.handleSearch} />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}
