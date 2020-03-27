import React, { Component } from 'react';
import './App.css';
import products from './data.json';
import SearchBar from './components/SearchBar/SearchBar';
import ProductTable from './components/ProductTable/ProductTable';

export default class App extends Component {
  state = {
    allProducts: [...products.data],
    search: '',
    checked: false
  };

  searchProducts = () => {
    let filteredProducts = [...this.state.allProducts].filter(el =>
      el.name.toLowerCase().includes(this.state.search)
    );

    this.setState({
      allProducts: filteredProducts
    });
  };

  handleSearch = e => {
    // here we set the search term to the state
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  showProductsInStock = () => {
    let productsInStock = [...this.state.allProducts].filter(
      product => product.stocked === true
    );
    this.setState({
      checked: !this.state.checked
    });

    !this.state.checked
      ? this.setState({
          allProducts: productsInStock
        })
      : this.setState({
          allProducts: [...products.data]
        });
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar
          products={this.state.allProducts}
          handleSearch={this.handleSearch}
          showProductsInStock={this.showProductsInStock}
        />
        <ProductTable products={this.state.allProducts} />
      </div>
    );
  }
}
