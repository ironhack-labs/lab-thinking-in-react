import React from 'react';
import './App.css';
import jsondata from './data.json'

import FilterableProductTable from './components/FilterableProductTable'

function App() {
  return (
    <FilterableProductTable  products={jsondata} />
  );
}

export default App;
