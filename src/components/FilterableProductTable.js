import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import data from '../data.json';

class FilterableProductTable extends Component {
  state = {
    products: [],
    query: '',
  };

  componentDidMount = () => {
    this.setState({ products: data.data });
  };

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({ query });
  };

  render() {
    let products = this.state.products;
    products = products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.query.toLowerCase());
    });
    return (
      <div className="FilterableProductTable">
        <SearchBar query={this.state.query} handleChange={this.handleChange} />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
