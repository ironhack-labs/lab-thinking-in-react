import React, { Component } from 'react';
// import logo from './logo.svg';
import data from './constants/data.json';
import FilterableProductTable from './containers/FilterableProductTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable data={data}/>
      </div>
    );
  }
}

export default App;
