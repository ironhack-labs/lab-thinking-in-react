import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <>
      <FilterableProductTable products={data} />
    </>
  );
}

export default App;
