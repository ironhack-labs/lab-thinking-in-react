import React, { Component } from 'react'
import './App.css'
import products from './data.json'
import SearchBar from './components/SearchBar/SearchBar';
import ProductTable from './components/ProductTable/ProductTable';

export default class App extends Component {
  state = {
    allProducts: [...products.data],
    search: ""
  }

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
    const { name, value } = e.target
    this.setState(
      {
        [name]: value
      },
      this.searchProducts
    );
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar products={this.state.allProducts} handleSearch={this.handleSearch}/>
        <ProductTable products={this.state.allProducts}/>
      </div>
    );
  }
} 
