import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import Data from "./data.json"
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
  
    this.state ={
      Data
    };
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ Data } />
       
      </div>
    );
  }
}

export default App;
