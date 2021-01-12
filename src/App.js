import React from 'react';
import data from './data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <h1>Iron Store</h1>
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
