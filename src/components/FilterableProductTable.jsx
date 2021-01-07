import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';

const data = require('../data.json');
const products = data.data.map((product) => product);

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
  };
  search = (value) => {
    let productArray = [...products];
    let newArray = productArray.filter((product) =>
      product.name
        .toLowerCase()
        .slice(0, value.length)
        .includes(value.toLowerCase())
    );
    this.setState({ products: newArray });
  };
  showStock = (checked) => {
    if (checked) {
      let newArray = data.data.filter((product) => product.stocked);
      this.setState({
        products: newArray,
      });
    } else {
      this.setState({
        products: products,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar search={this.search} showStock={this.showStock} />
        <ProductTable products={this.state.products} />
      </div>
    );
  }
}
