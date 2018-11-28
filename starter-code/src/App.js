import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default App;
