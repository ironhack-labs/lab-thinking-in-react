import React from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from '../src/components/FilterableProductTable ';

function App() {
  return (
    <div className="App">
      <h1>IronStore</h1>
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
