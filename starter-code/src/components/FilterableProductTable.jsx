import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

export default class FilterableProductTable extends Component {
  state = {
    filters: {
      name: '',
      stocked: null
    }
  };

  filterProducts = event => {
    let { name, value, type } = event.target;
    if (type === 'checkbox') value = event.target.checked ? true : null;
    this.setState({
      filters: {
        ...this.state.filters,
        [name]: value
      }
    });
  };

  listProducts = () => {
    return this.props.products.filter(product => {
      if (this.state.filters.stocked !== null) {
        return (
          product.name.match(new RegExp(this.state.filters.name, 'ig')) &&
          product.stocked === this.state.filters.stocked
        );
      } else {
        return product.name.match(new RegExp(this.state.filters.name, 'ig'));
      }
    });
  };

  render() {
    return (
      <div className="container columns">
        <div className="column">
          <SearchBar filter={this.filterProducts} />
          <ProductList products={this.listProducts()} />
        </div>
      </div>
    );
  }
}
