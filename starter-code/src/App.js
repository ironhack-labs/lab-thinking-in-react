import React, { Component } from 'react';
import data from './data/data.json'
import './App.css';
import SearchBar from './components/SearchBar.js';
import ProductTable from './components/ProductTable.js';


class App extends Component {
  state = {
    filteredProducts : [...data.data],
    inStock: false
  }



  handleSearch = (text) => {
    this.setState({
      filteredProducts: data.data.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  handleCheckboxChange = () => {
    this.setState({
      inStock: !this.state.inStock
    })
  }

  render() {
    const filteredItems = this.state.filteredProducts.filter(e => this.state.inStock ? e.stocked === this.state.inStock : e.stocked === true || e.stocked === false )
    return (
      <div className="App">
        <h1 className='mt-3 mb-3'>IronStore</h1>
        <div className='container'>
          <SearchBar onSearch ={this.handleSearch} onHandleCheckbox={this.handleCheckboxChange}/>
          <ProductTable products = {filteredItems}/>
        </div>
      </div>
    );
  }
}

export default App;
