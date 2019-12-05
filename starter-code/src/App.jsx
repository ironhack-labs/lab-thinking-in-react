import React, { Component } from 'react';
// import data from '../data.json'
import FilterProduct from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterProduct  />
      </div>
    );
  }
}

export default App
