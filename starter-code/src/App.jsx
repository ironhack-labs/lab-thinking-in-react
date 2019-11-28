import React, { Component } from 'react';
import './App.css';
import Products from "./components/Products"
import Search from "./components/Search"
import products from "./data.json"


export default class App extends Component {
state = {
  products: products,
  query: "",
  checked: false
}

setQuery = query => {
  this.setState({
    query: query
  })
}

setChecked = () => {
  this.setState({
    checked: !this.state.checked
  })
}


  render() {
    return (
      <div className="App">
      <Search setQuery={this.setQuery} query={this.state.query} setChecked={this.setChecked} checked={this.state.checked}/>
      <Products products= {this.state.products}
        filter={this.state.query} checked={this.state.checked}
      />
      </div>
    );
  }
}
