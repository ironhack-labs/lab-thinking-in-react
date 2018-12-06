import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../src/components/FilterableProductTable/SearchBar/SearchBar'
import Table from '../src/components/FilterableProductTable/Table.js'

class App extends Component {
  render() {
    return (
    <div>
      <div>
        <SearchBar/>
      </div>

      <div>
      <Table/>
      
      </div>   
    </div>
    )
  
}
}

export default App;
