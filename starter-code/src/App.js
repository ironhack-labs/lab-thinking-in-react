import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './data.json'
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';



class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={Products}/>
      </div>
    );
  }
}

export default App;
