import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from '../data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
