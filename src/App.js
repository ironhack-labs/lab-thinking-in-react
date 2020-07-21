import React, { useState } from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';

const App = () => {
  return (
    <div className="App">
      <h1>Thinking in React</h1>
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;