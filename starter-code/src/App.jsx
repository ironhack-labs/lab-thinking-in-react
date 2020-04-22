import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='App-h1'>IronStore</h1>
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}

export default App;
