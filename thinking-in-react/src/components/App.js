import React from 'react';
import data from '../data.json'
import './App.css';

import FilterableProductTable from './FilterableProductTable/FilterableProductTable'

function App() {
  return (
    <>
    <div className="App">
      <FilterableProductTable product={data} />
    </div>
    </>
  );
}

export default App;
