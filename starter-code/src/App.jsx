import React, { Component } from 'react';
import './App.css';
import { data } from './data.json'
import SearchBar from './SearchBar/SearchBar';
import ProductList from './ProductList/ProductList';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [...data],
      isChecked: false,
      searchInput: ""
    }

  }



  search(e) {
    e.preventDefault()
    let searchInput = e.target.value;
    this.filterProducts(searchInput, this.state.isChecked)
  }

  onlyStock(e) {
    let searchInput = this.state.searchInput
    let isChecked = !this.state.isChecked
    this.setState({
      ...this.state,
      isChecked: isChecked
    }, ()=>{this.filterProducts(searchInput, this.state.isChecked)})
  }

  filterProducts(searchInput, isChecked) {
    let updatedData = [...data];
    updatedData = updatedData.filter((product) => {
    let productName = product.name.toLowerCase()
      return productName.indexOf(
        searchInput) !== -1
    })
    if (isChecked) {
      updatedData = updatedData.filter((product) => {
        return product.stocked === true
      })
    }
    this.setState({
      ...this.state,
      data: updatedData,
      searchInput: searchInput,
    });
  }








  render() {
    return (
      <div className="App">
        <SearchBar search={(e) => this.search(e)} searchInput={this.state.searchInput} onlyStock={(e) => this.onlyStock(e)} checkState={this.state.checkState}></SearchBar>
        <ProductList products={this.state.data}></ProductList>
      </div>
    );
  }
}
