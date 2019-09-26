import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import ShopList from './components/ShopList';

export default class App extends Component {
  state = {
    query: '',
    stock: false
  };

  setQuery = query => {
    this.setState({
      query
    });
  };

  setStock = stock => {
    this.setState({
      stock
    });
  };

  render() {
    console.log(this.state.stock);
    return (
      <div className="App">
        <h1>Ironstore</h1>
        <div className="searchbar">
          <Searchbar
            handleQuery={this.setQuery}
            query={this.state.query}
            handleCheck={this.setStock}
            stock={this.state.stock}
          />
        </div>
        <ShopList query={this.state.query} stock={this.state.stock} />
      </div>
    );
  }
}
