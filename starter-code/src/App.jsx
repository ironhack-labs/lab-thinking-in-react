import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <FilterableProductTable products={data.data} />
      </div>
    );
  }
}

export default App;