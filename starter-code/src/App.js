import React, { Component } from 'react';
import './App.css';
import Products from './components/products/Products'
import Search from './components/search/Search'
import './components/listProducts/list-products.css'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Search />
      </div>
    );
  }
}

export default App;
