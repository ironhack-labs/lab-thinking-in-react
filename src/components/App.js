
import React from 'react';
import data from './data.json'
import './App.css';

import FilterableProductTable from './FilterableProductTable'


function App() {
  return (
    <div className="App">
      <div className="container">
      <h1> Iron Store</h1>
        <FilterableProductTable products={data} />
      </div>
    </div>
  );
}

export default App;