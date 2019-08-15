import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/product-table'
import data from './data.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      products: data.data,
      filterProducts: data.data
    }
  }
  search = string => {
    console.log(string)
    const copyProduct = [...this.state.products]
    this.setState({
      filterProducts: copyProduct.filter((elm) => {
        return elm.name.toLowerCase().includes(string.toLowerCase())
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <SearchBar search={this.search} />
        <ProductTable filterProducts={this.state.filterProducts} />
      </div>
    );
  }
}

export default App;
