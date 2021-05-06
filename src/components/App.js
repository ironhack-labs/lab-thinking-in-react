import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import jsondata from './data.json'
import {Component} from 'react'


class App extends Component {
  constructor() {
        super()
        this.state = {
          products: jsondata,
          searchLetter: ''
      }

}

  searchProducts (letter){
    this.setState({searchLetter: letter})
    console.log(letter)
  }

  render(){

    return (
      <div>
        <header>
          <h1>Iron Store</h1>
        </header>
    
         <SearchBar search = {nameSearch => this.searchProducts(nameSearch)} />
         <ProductTable productData = {this.state.products} searchData = {this.state.searchLetter}/>

      </div>
    );

  }
}

export default App;
