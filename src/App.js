import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from '../src/data.json';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  console.log(data);
  return (
    <div className="App">
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;
