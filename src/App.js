import React from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <FilterableProductTable productsFromApp={data.data} />
    </div>
  );
}

export default App;
