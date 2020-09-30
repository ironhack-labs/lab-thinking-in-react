import React from 'react';
import data from '../src/data.json';
import './App.css';
import FilterableProductTable from './components/filterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
