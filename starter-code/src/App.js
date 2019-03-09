import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBar/>
        <ProductTable />
        <ProductRow />
      </div>
    );
  }
}

export default App;
