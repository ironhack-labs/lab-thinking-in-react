import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    query: '',
    stock: false
  };

  setSearch = event => {
    this.setState({
      //query: event.target.value
      [event.target.name]: 
      event.target.name === "stock" ? event.target.checked : event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar setSearch={this.setSearch} query={this.state.query} stock={this.state.stock}/>
        <ProductTable products={this.state.products} query={this.state.query} stock={this.state.stock}/>
      </div>
    );
  }
}
