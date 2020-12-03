import React from 'react';
import logo from './logo.svg';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable.js';
import data from './data.json'
import './App.css';

function App() {
  return (
    <div className="App">
        <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
