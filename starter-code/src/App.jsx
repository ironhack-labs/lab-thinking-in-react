import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import data from './data.json';


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>IronStore</h1>
        <SearchBar/>
        <ProductTable data= {data}/>
      </div>
    );
  }
}

export default App;
