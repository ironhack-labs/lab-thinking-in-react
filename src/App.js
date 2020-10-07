import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'

function App() {
  return (
    <div>
    <FilterableProductTable products = {data}/>
    </div>
  );
}

export default App;
