import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';

export default class App extends Component {
  state={
        products: data.data,
        productsOriginal: data.data
    }

    searchBar = value => {
    const productsCopie = [...this.state.products]
    const productsOriginal = [...this.state.productsOriginal]
    let newList = []
    console.log(value)
  
      newList = productsOriginal.filter(item => {

        const lc = item.name
        console.log(lc)
        const filter = value;
        return lc.includes(filter);
      })
    
    console.log(newList) 
      this.setState({ products: newList })
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <FilterableProductTable searchBar = {(value) => this.searchBar(value)} products={ this.state.products } />
        </div> 
      </div>
    );
  }
}
