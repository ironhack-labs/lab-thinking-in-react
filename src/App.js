import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import storeGoods from './data.json'
import SearchBar from './SearchBar/SearchBar';
import ProductTable from './ProductTable/ProductTable';


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      search: "",
      checked: false
    }
    
  }

  searchProduct = (searchItem) => {
    this.setState({
      search: searchItem
    })
  }

  checkProduct = (isChecked) => {
    this.setState({
      checked: isChecked
    })
  }

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar searchFunction={this.searchProduct} checkFunction={this.checkProduct}/>
        <ProductTable allProducts={storeGoods} searchProduct={this.state.search} checkFunction={this.state.checked}/>
    </div>
    )
  }
}

