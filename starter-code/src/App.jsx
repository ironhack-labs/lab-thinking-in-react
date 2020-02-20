import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import FilterableProductTable from './components/FilterableProductTable';

export default class App extends Component {
  state = {
    productList: data.data,
    text: ''
  };

  handleChange = event => {
    console.log(event);

    let filteredProducts = data.data.filter(product => {
      return product.name.toLowerCase().search(event.toLowerCase()) !== -1;
    });

    this.setState({
      productList: filteredProducts,
      text: event
    });
  };

  render() {
    return (
      <div className="App">
        <FilterableProductTable
          products={this.state.productList}
          searchProducts={this.handleChange}
          searchText={this.state.text}
        />
      </div>
    );
  }
}
