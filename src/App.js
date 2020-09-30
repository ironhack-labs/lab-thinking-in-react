import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <h1> Iron Store </h1>
      <FilterableProductTable products={data} />
    </div>
  );
}

export default App;
