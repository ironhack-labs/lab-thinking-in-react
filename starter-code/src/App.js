import React, { Component } from 'react'; 
import './App.css';

import data from './data.json';

import FilteredProductTable from './components/FilteredProductTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredProductTable products={data} />
      </div>
    );
  }
}

export default App;
