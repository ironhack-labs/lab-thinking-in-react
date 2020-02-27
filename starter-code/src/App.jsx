import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './FilterableProductTable/FilterableProductTable';

export default class App extends Component {
  state={
        products: data.data,
        productsOriginal: data.data,
        checked: false
    }

  searchBar = value => {
    const productsCopie = [...this.state.products]
    const productsOriginal = [...this.state.productsOriginal]
    let newList = []
    console.log(value)
  
      newList = productsOriginal.filter(item => {

        const lc = item.name.toLowerCase();
        console.log(lc)
        const filter = value.toLowerCase();
        return lc.includes(filter);
      })
    
    console.log(newList) 
      this.setState({ products: newList },)
  }

  searchStock(stock) {
  
    console.log(this.state.checked)
    let checked = !this.state.checked
    console.log(checked)
    const productsOriginal = [...this.state.productsOriginal]
    let newList = []
    if (checked === true){
    newList = productsOriginal.filter(item => item.stocked === checked )
  } else {
    newList = productsOriginal
  }
    this.setState({
      products: newList,
      checked: !this.state.checked
    },)
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <FilterableProductTable searchBar = {(value) => this.searchBar(value)} products={ this.state.products } searchStock={(stock) => this.searchStock(stock)}/>
        </div> 
      </div>
    );
  }
}
